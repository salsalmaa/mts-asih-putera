"use client";

import React, { useState, useEffect } from "react";
import { sliderService, SliderItem } from "../services/sliderService";
import { loginService } from "../services/loginServices";
import { HeroClient } from "./HeroClient";

interface HeroProps {
  onOpenPpdb: () => void;
  onOpenVisit: () => void;
}

const defaultHeroBgImage = "/images/hero_new_bg.jpg";

export interface SlideItem {
  title: string;
  mediaUrl: string;
  mediaType: "image" | "video";
}

// Fungsi helper buildSliders disamakan dengan struktur milik temanmu agar mendukung video dan gambar
function buildSliders(sliderList: SliderItem[]): SlideItem[] {
  const result: SlideItem[] = [];
  const rawData = Array.isArray(sliderList) ? sliderList : [];

  for (const slider of rawData) {
    const attachments = slider.Attachment || [];
    for (const att of attachments) {
      const id = att.AttachmentId;
      const refId = att.ReferenceId;
      const filename = att.Name;
      const typeFile = att.TypeFile || "";

      if (id != null && refId != null && filename) {
        const mediaType = typeFile.startsWith("video/") ? "video" : "image";
        result.push({
          title: slider.Title || "",
          mediaUrl: `/api/attachment?Id=${id}&RefId=${refId}&Filename=${encodeURIComponent(filename)}&t=${Date.now()}`,
          mediaType,
        });
      }
    }
  }

  return result;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPpdb, onOpenVisit }) => {
  // Menggunakan tipe data SlideItem[] agar bisa menampung objek media dinamis (gambar/video)
  const [slides, setSlides] = useState<SlideItem[]>([
    { title: "", mediaUrl: defaultHeroBgImage, mediaType: "image" },
  ]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    async function loadCmsSliders() {
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
              "Gagal melakukan login otomatis untuk slider:",
              loginErr,
            );
          }
        }

        // Ubah baris ini di dalam useEffect Hero.tsx:
        const responseData = await sliderService.fetchSliders(token);

        if (!isMounted) return;

        const sliderList = Array.isArray(responseData) ? responseData : [];
        const builtSlides = buildSliders(sliderList);

        if (builtSlides.length > 0) {
          setCurrentIndex(0);
          setSlides(builtSlides);
        }
      } catch (err: any) {
        if (!isMounted) return;
        console.error("Gagal memuat slider dari CMS:", err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadCmsSliders();

    return () => {
      isMounted = false;
    };
  }, []);

  // Logika interval autoplay dipindah ke file container Hero.tsx (seperti milik temanmu)
  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  return (
    <HeroClient
      slides={slides}
      currentIndex={currentIndex}
      loading={loading}
      onOpenPpdb={onOpenPpdb}
      onOpenVisit={onOpenVisit}
    />
  );
};
