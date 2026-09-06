"use client";

import React, { useState, useEffect } from "react";
import { ProgramItem } from "../types";
import { featuredProgramsService } from "../services/featuredProgramsServices";
import { loginService } from "../services/loginServices"; // Menggunakan loginService yang benar
import { FeaturedProgramsClient } from "./FeaturedProgramsClient";

interface FeaturedProgramsProps {
  onSelectProgram: (program: ProgramItem) => void;
  onOpenAllPrograms: () => void;
}

export function FeaturedPrograms({
  onSelectProgram,
  onOpenAllPrograms,
}: FeaturedProgramsProps) {
  const [programsList, setProgramsList] = useState<ProgramItem[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPrograms() {
      try {
        let token = localStorage.getItem("token");

        // Jika token belum ada, panggil loginService.login() untuk mengambil token baru via proxy
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
            console.error("Gagal melakukan login otomatis:", loginErr);
          }
        }

        let responseData;
        try {
          // Mengirimkan token yang tersimpan di localStorage
          responseData = await featuredProgramsService.getFeaturedPrograms(token || undefined);
        } catch (err: any) {
          // Jika token kedaluwarsa atau 401, coba login ulang sekali lagi
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
              responseData = await featuredProgramsService.getFeaturedPrograms(token);
            } else {
              throw err;
            }
          } else {
            throw err;
          }
        }

        const resultData =
          responseData?.Data?.Content ||
          responseData?.Data ||
          responseData?.data ||
          responseData;
        const rawData = Array.isArray(resultData) ? resultData : [];

        const mappedPrograms = rawData.map((item: any, index: number) => {
          const rawDesc =
            item.Content || item.Description || item.ShortDescription || "";
          const cleanDesc = rawDesc.replace(/<\/?[^>]+(>|$)/g, "");

          return {
            id: item.ContentId || index + 1,
            title: item.Title || "Program Unggulan",
            description: cleanDesc,
            image:
              item.SignedThumbnail ||
              item.Thumbnail ||
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
            category: item.Category || "",
            highlights: item.Highlights || [],
          };
        });

        setProgramsList(mappedPrograms);
      } catch (err: any) {
        console.error("Gagal mengambil data program unggulan:", err);
        setErrorMessage("Gagal memuat program unggulan.");
      }
    }

    fetchPrograms();
  }, []);

  return (
    <FeaturedProgramsClient
      programsList={programsList}
      error={errorMessage}
      onSelectProgram={onSelectProgram}
      onOpenAllPrograms={onOpenAllPrograms}
    />
  );
}