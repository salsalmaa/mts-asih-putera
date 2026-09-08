"use client";

import React, { useState, useEffect } from "react";
import { FacilityItem } from "../types";
import { galleryService } from "../services/galleryServices";
import { loginService } from "../services/loginServices"; // Menggunakan loginService yang terpusat
import { FacilitiesSectionClient } from "./FacilitiesSectionClient";

interface FacilitiesSectionProps {
  onSelectFacility: (facility: FacilityItem) => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({
  onSelectFacility,
}) => {
  const [facilitiesList, setFacilitiesList] = useState<FacilityItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFacilities() {
      try {
        setLoading(true);
        let token = localStorage.getItem("token");

        // Jika token belum ada, panggil loginService.login() seperti pada FeaturedPrograms
        if (!token) {
          try {
            const loginRes = await loginService.login();
            token =
              loginRes?.Data?.Token ||
              loginRes?.data?.Data?.Token ||
              loginRes?.Token ||
              loginRes?.data?.Token;

            if (token) {
              localStorage.setItem("token", token);
            }
          } catch (loginErr) {
            console.error("Gagal melakukan login otomatis untuk galeri:", loginErr);
          }
        }

        let responseData;
        try {
          responseData = await galleryService.getGallery(token || undefined);
        } catch (err: any) {
          // Jika unauthorized (401), hapus token lama & login ulang sekali lagi via loginService
          if (err?.response?.status === 401) {
            localStorage.removeItem("token");
            const loginRes = await loginService.login();
            token =
              loginRes?.Data?.Token ||
              loginRes?.data?.Data?.Token ||
              loginRes?.Token ||
              loginRes?.data?.Token;

            if (token) {
              localStorage.setItem("token", token);
              responseData = await galleryService.getGallery(token);
            } else {
              throw err;
            }
          } else {
            throw err;
          }
        }

        const galleryList =
          responseData?.Data?.Gallery ||
          responseData?.Gallery ||
          responseData?.Data ||
          responseData ||
          [];
        const rawData = Array.isArray(galleryList) ? galleryList : [];

        const formattedData: FacilityItem[] = rawData.map((item: any) => {
          const rawDesc = item.Description || item.content || "";
          const cleanDesc = rawDesc.replace(/<\/?[^>]+(>|$)/g, "");

          const attachmentItem =
            item.Attachment && item.Attachment.length > 0
              ? item.Attachment[0]
              : null;

          const fileName = attachmentItem?.Name || attachmentItem?.FileName || "";
          
          // Menggunakan route /resources/asset/ sesuai yang terbaca sukses 200 di terminal Go
          const imageUrl = fileName
            ? `http://localhost:7000/resources/asset/${fileName}`
            : item.URL || item.Image || "/images/default-facility.jpg";

          return {
            id: item.GalleryId || item.id,
            title: item.Title || item.title,
            description: cleanDesc,
            image: imageUrl,
          };
        });

        setFacilitiesList(formattedData);
      } catch (err: any) {
        console.error("Gagal memuat data fasilitas:", err);
        setErrorMessage("Gagal memuat data fasilitas dari server.");
      } finally {
        setLoading(false);
      }
    }

    fetchFacilities();
  }, []);

  return (
    <FacilitiesSectionClient
      facilitiesList={facilitiesList}
      loading={loading}
      error={errorMessage}
      onSelectFacility={onSelectFacility}
    />
  );
};