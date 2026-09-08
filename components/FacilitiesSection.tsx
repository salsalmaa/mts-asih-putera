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
            console.error(
              "Gagal melakukan login otomatis untuk galeri:",
              loginErr,
            );
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

          let imageUrl = "/images/default-facility.jpg";

          if (item.SignedThumbnail) {
            imageUrl = item.SignedThumbnail;
          } else if (item.Thumbnail) {
            imageUrl = item.Thumbnail;
          } else if (item.Image) {
            imageUrl = item.Image;
          } else if (attachmentItem) {
            const attId = attachmentItem.Id || attachmentItem.id;
            const attRefId = attachmentItem.RefId || attachmentItem.refId || item.GalleryId || item.id;
            const attName = attachmentItem.Name || attachmentItem.FileName || attachmentItem.filename;

            // Menggunakan proxy Next.js /api/attachment dengan parameter lengkap seperti kode slider temanmu
            if (attId && attRefId && attName) {
              imageUrl = `/api/attachment?Id=${attId}&RefId=${attRefId}&Filename=${encodeURIComponent(attName)}`;
            } else if (attName) {
              imageUrl = `/api/attachment?filename=${encodeURIComponent(attName)}`;
            }
          } else if (item.URL) {
            imageUrl = item.URL;
          }

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