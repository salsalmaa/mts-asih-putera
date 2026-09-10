"use client";

import React, { useState, useEffect } from "react";
import { FacilityItem } from "../types";
import { galleryService } from "../services/galleryServices";
import { loginService } from "../services/loginServices";
import { FacilitiesSectionClient } from "./FacilitiesSectionClient";

interface FacilitiesSectionProps {
  onSelectFacility: (facility: FacilityItem) => void;
}

// Fungsi helper penataan data (mirip gaya temanmu: buildSlides)
function buildFacilities(galleryList: any[]): FacilityItem[] {
  const rawData = Array.isArray(galleryList) ? galleryList : [];

  return rawData.map((item: any) => {
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
      const attId = attachmentItem.AttachmentId || attachmentItem.id || attachmentItem.Id;
      const attRefId = attachmentItem.ReferenceId || attachmentItem.refId || attachmentItem.RefId;
      const attName = attachmentItem.Name || attachmentItem.Filename || attachmentItem.filename;

      const queryParams = new URLSearchParams();
      if (attId != null) queryParams.append('Id', String(attId));
      if (attRefId != null) queryParams.append('RefId', String(attRefId));
      if (attName) queryParams.append('Filename', String(attName));

      if (queryParams.toString()) {
        imageUrl = `/api/attachment?${queryParams.toString()}`;
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
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({
  onSelectFacility,
}) => {
  const [facilitiesList, setFacilitiesList] = useState<FacilityItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchFacilities() {
      try {
        setLoading(true);
        let token = localStorage.getItem("token");

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

        if (!isMounted) return;

        const galleryList =
          responseData?.Data?.Gallery ||
          responseData?.Gallery ||
          responseData?.Data ||
          responseData ||
          [];

        const formattedData = buildFacilities(galleryList);
        setFacilitiesList(formattedData);
      } catch (err: any) {
        if (!isMounted) return;
        console.error("Gagal memuat data fasilitas:", err);
        setErrorMessage("Gagal memuat data fasilitas dari server.");
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchFacilities();

    return () => {
      isMounted = false;
    };
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