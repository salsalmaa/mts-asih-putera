"use client";

import React, { useState, useEffect } from "react";
import { NewsItem } from "../types";
import { newsService } from "../services/newsServices";
import { loginService } from "../services/loginServices";
import { NewsSectionClient } from "./NewsSectionClient";

interface NewsSectionProps {
  onSelectNews: (news: NewsItem) => void;
  onOpenAllNews: () => void;
}

export function NewsSection({
  onSelectNews,
  onOpenAllNews,
}: NewsSectionProps) {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNews() {
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
            console.error("Gagal melakukan login otomatis untuk berita:", loginErr);
          }
        }

        let responseData;
        try {
          responseData = await newsService.getNews(token || undefined);
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
              responseData = await newsService.getNews(token);
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

        const formattedNews: NewsItem[] = rawData.map((item: any, index: number) => {
          const rawExcerpt = item.ShortDescription || item.Content || "";
          const cleanExcerpt = rawExcerpt.replace(/<\/?[^>]+(>|$)/g, "");

          const rawFullContent = item.Content || item.FullContent || "";
          const cleanFullContent = rawFullContent.replace(/<\/?[^>]+(>|$)/g, "");

          return {
            id: item.ContentId || item.Id || item.id || index + 1,
            title: item.Title || item.Category || "Berita Terbaru",
            excerpt: cleanExcerpt,
            image: item.SignedThumbnail || item.Image || item.image || "",
            day: item.Day || "01",
            monthYear: item.MonthYear || "JAN 2026",
            date: item.Date || `${item.Day || "01"} ${item.MonthYear || "JAN 2026"}`,
            category: item.Category || "Berita",
            fullContent: cleanFullContent,
          };
        });

        setNewsList(formattedNews);
      } catch (err: any) {
        console.error("Gagal mengambil berita:", err);
        setErrorMessage("Gagal memuat berita.");
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  return (
    <NewsSectionClient
      newsList={newsList}
      loading={loading}
      error={errorMessage}
      onSelectNews={onSelectNews}
      onOpenAllNews={onOpenAllNews}
    />
  );
}