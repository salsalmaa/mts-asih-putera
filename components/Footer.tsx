"use client";

import React, { useState, useEffect } from "react";
import { siteInformationService } from "../services/siteInformationServices";
import { loginService } from "../services/loginServices";
import { FooterClient } from "./FooterClient";

interface FooterProps {
  onOpenPpdb?: () => void;
  onOpenVisit?: () => void;
}

export function Footer({ onOpenPpdb, onOpenVisit }: FooterProps) {
  const [subscribedEmail, setSubscribedEmail] = useState("");
  const [subscribedSuccess, setSubscribedSuccess] = useState(false);

  const [siteInfo, setSiteInfo] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSiteInfo() {
      try {
        setLoading(true);
        let token = localStorage.getItem("token");

        // Jika token belum ada, panggil loginService.login() untuk mengambil token baru
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
              "Gagal melakukan login otomatis untuk footer:",
              loginErr,
            );
          }
        }

        let responseData;
        try {
          responseData = await siteInformationService.getSiteInformation(
            token || undefined,
          );
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
              responseData =
                await siteInformationService.getSiteInformation(token);
            } else {
              throw err;
            }
          } else {
            throw err;
          }
        }

        const resultData =
          responseData?.Data || responseData?.data || responseData;
        setSiteInfo(resultData);
      } catch (err: any) {
        console.error("Gagal mengambil data site information:", err);
        setError("Gagal memuat informasi situs.");
      } finally {
        setLoading(false);
      }
    }

    fetchSiteInfo();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribedEmail.trim()) {
      setSubscribedSuccess(true);
      setSubscribedEmail("");
      setTimeout(() => setSubscribedSuccess(false), 5000);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <FooterClient
      siteInfo={siteInfo}
      loading={loading}
      subscribedEmail={subscribedEmail}
      subscribedSuccess={subscribedSuccess}
      onEmailChange={setSubscribedEmail}
      onSubmitSubscribe={handleSubscribe}
      onScrollToSection={scrollToSection}
    />
  );
}
