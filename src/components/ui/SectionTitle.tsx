import React from "react";

interface SectionTitleProps {
  tagline: string;
  title: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  tagline,
  title,
  centered = true,
  className = "mb-5",
}: SectionTitleProps) {
  return (
    <div className={`section-title ${centered ? "text-center" : ""} ${className}`}>
      <span className="section-title__tagline">{tagline}</span>
      <h2
        className="section-title__title"
        style={{ color: "var(--builza-black)" }}
      >
        {title}
      </h2>
    </div>
  );
}
