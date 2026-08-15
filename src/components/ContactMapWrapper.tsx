"use client";

import dynamic from "next/dynamic";

const ContactMap = dynamic(() => import("@/components/ContactMap"), {
  ssr: false,
  loading: () => (
    <div style={{ minHeight: "500px", width: "100%", backgroundColor: "#e5e3df" }}></div>
  ),
});

export default function ContactMapWrapper() {
  return <ContactMap />;
}
