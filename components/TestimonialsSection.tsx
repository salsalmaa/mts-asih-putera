"use client";

import React, { useState, useEffect } from "react";
import { TestimonialItem } from "../types";
import { testimonialsService } from "../services/testimonialsServices";
import { loginService } from "../services/loginServices";
import { TestimonialsSectionClient } from "./TestimonialsSectionClient";

export function TestimonialsSection() {
  const [testimonialsList, setTestimonialsList] = useState<TestimonialItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        setLoading(true);
        let token = localStorage.getItem("token");

        // Jika token belum ada, lakukan login otomatis
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
            console.error("Gagal melakukan login otomatis untuk testimoni:", loginErr);
          }
        }

        let responseData;
        try {
          responseData = await testimonialsService.getTestimonials(token || undefined);
        } catch (err: any) {
          // Jika token kedaluwarsa atau unauthorized (401), coba login ulang sekali lagi
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
              responseData = await testimonialsService.getTestimonials(token);
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

        const formattedTestimonials: TestimonialItem[] = rawData.map(
          (item: any, index: number) => {
            const rawQuote =
              item.Description || item.Content || item.ShortDescription || "";
            const cleanQuote = rawQuote.replace(/<\/?[^>]+(>|$)/g, "");

            return {
              id: item.ContentId || item.Id || item.id || index + 1,
              name: item.Title || item.Author || "Orang Tua / Siswa",
              role: item.Category || "Orang Tua Siswa",
              quote: cleanQuote,
              avatar:
                item.SignedThumbnail ||
                item.Image ||
                item.image ||
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
            };
          }
        );

        setTestimonialsList(formattedTestimonials);
      } catch (err: any) {
        console.error("Gagal mengambil data testimoni:", err);
        setErrorMessage("Gagal memuat testimoni.");
      } finally {
        setLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

  return (
    <TestimonialsSectionClient
      testimonialsList={testimonialsList}
      loading={loading}
      error={errorMessage}
    />
  );
}