import React from "react";
import localFallbackLogo from "../assets/images/logo_mts_asih_putera_official.png";

interface OfficialLogoProps {
  className?: string;
  variant?: "color" | "white" | "dark";
  height?: number | string;
}

// Exact official logo asset extracted directly from https://mts.asihputera.sch.id header
const LIVE_OFFICIAL_LOGO_URL =
  "https://cms.asihputera.sch.id/upload/profilesite/a5d2618874049c00473d7680ee98ac29.png";

export const OfficialLogo: React.FC<OfficialLogoProps> = ({
  className = "",
  variant = "color",
  height = 36,
}) => {
  const [imgSrc, setImgSrc] = React.useState<string>(LIVE_OFFICIAL_LOGO_URL);
  const heightStyle = typeof height === "number" ? `${height}px` : height;

  return (
    <img
      src={imgSrc}
      onError={() => {
        if (imgSrc !== localFallbackLogo) {
          setImgSrc(localFallbackLogo);
        }
      }}
      alt="Logo Resmi MTs Asih Putera"
      className={`block select-none ${variant === "white" ? "brightness-0 invert" : ""} ${className}`}
      style={{
        height: heightStyle,
        width: "auto",
        maxWidth: "none",
        objectFit: "contain",
        aspectRatio: "auto",
      }}
    />
  );
};
