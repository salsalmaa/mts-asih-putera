import React from "react";

interface OfficialLogoProps {
  className?: string;
  variant?: "color" | "white" | "dark";
  height?: number | string;
}

export const OfficialLogo: React.FC<OfficialLogoProps> = ({
  className = "",
  variant = "color",
  height = 36,
}) => {
  const heightStyle = typeof height === "number" ? `${height}px` : height;

  return (
    <img
      src="/images/logo_mts_asih_putera_official.png"
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