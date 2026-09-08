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
      src="/images/logo_MI_Asih_Putera.png"
      alt="Logo Resmi MI Asih Putera"
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