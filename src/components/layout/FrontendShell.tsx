"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import RouteChangeListener from "@/components/RouteChangeListener";

interface ChatFormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  category: string;
  message: string;
}

interface ChatFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  category?: string;
  message?: string;
}

const CATEGORIES = [
  "Container Cranes",
  "Bulk Cranes",
  "Spreaders",
  "Trailers & Port Carts",
  "Others",
];

export default function FrontendShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState<ChatFormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });
  const [errors, setErrors] = useState<ChatFormErrors>({});

  // If we are in the admin area, do not render the frontend header, footer, chat popup, and legacy scripts
  const isAdmin = pathname.startsWith("/admin") || pathname.startsWith("/login");

  useEffect(() => {
    if (!isAdmin) {
      document.body.classList.add("custom-cursor");
    } else {
      document.body.classList.remove("custom-cursor");
      const preloader = document.getElementById("preloader");
      if (preloader) preloader.style.display = "none";
    }
  }, [isAdmin]);

  if (isAdmin) {
    return <>{children}</>;
  }

  const validate = (): boolean => {
    const newErrors: ChatFormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      newErrors.name = "Full name is required (min 2 chars).";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email address.";
    if (!form.phone.trim() || !/^\+?[0-9\s\-\(\)]{7,15}$/.test(form.phone))
      newErrors.phone = "Enter a valid phone number.";
    if (!form.category) newErrors.category = "Please select a category.";
    if (!form.message.trim() || form.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ChatFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitError) setSubmitError("");
  };

  const handleChatSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          companyName: form.company || null,
          email: form.email,
          phone: form.phone,
          userType: "Customer",
          category: form.category,
          message: form.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", company: "", email: "", phone: "", category: "", message: "" });
        setErrors({});
      } else {
        const data = await res.json().catch(() => ({}));
        setSubmitError(data.error || "Failed to send. Please try again.");
      }
    } catch {
      setSubmitError("A network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Start Preloader */}
      <div id="preloader">
        <div className="preloader">
          <span></span>
          <span></span>
        </div>
      </div>
      {/* End Preloader */}
      <div className="custom-cursor__cursor"></div>
      <div className="custom-cursor__cursor-two"></div>

      <div className="page-wrapper">
        <Header />
        <RouteChangeListener />
        {children}
        <Footer />
      </div>

      <div className="chat-icon">
        <button type="button" className="chat-toggler">
          <i className="fa fa-comment"></i>
        </button>
      </div>
      {/* Chat Popup */}
      <div id="chat-popup" className="chat-popup">
        <div className="popup-inner">
          <div className="close-chat">
            <i className="fa fa-times"></i>
          </div>
          <div className="chat-form">
            {submitted ? (
              <div style={{ textAlign: "center", padding: "24px 10px" }}>
                <div style={{
                  width: "52px", height: "52px", borderRadius: "50%",
                  background: "#eab308", margin: "0 auto 14px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h5 style={{ color: "#eab308", marginBottom: "8px" }}>Message Sent!</h5>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", marginBottom: "16px", lineHeight: "1.5" }}>
                  Thank you! We&apos;ll be in touch shortly.
                </p>
                <button
                  type="button"
                  className="thm-btn"
                  style={{ fontSize: "12px", padding: "8px 18px" }}
                  onClick={() => setSubmitted(false)}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <p>
                  Please fill out the form below and we will get back to you as soon as possible.
                </p>
                {submitError && (
                  <div style={{
                    background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.4)",
                    borderRadius: "6px", padding: "8px 12px", marginBottom: "12px",
                    color: "#fca5a5", fontSize: "12px", display: "flex", alignItems: "center", gap: "6px"
                  }}>
                    <span>⚠️</span> {submitError}
                  </div>
                )}
                <form onSubmit={handleChatSubmit} noValidate>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      value={form.name}
                      onChange={handleChange}
                      maxLength={100}
                    />
                    {errors.name && <span className="trot-field-error">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name (Optional)"
                      value={form.company}
                      onChange={handleChange}
                      maxLength={100}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email ID *"
                      value={form.email}
                      onChange={handleChange}
                      maxLength={100}
                    />
                    {errors.email && <span className="trot-field-error">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Mobile Number *"
                      value={form.phone}
                      onChange={handleChange}
                      maxLength={20}
                    />
                    {errors.phone && <span className="trot-field-error">{errors.phone}</span>}
                  </div>
                  <div className="form-group">
                    <select
                      className="ignore"
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                    >
                      <option value="">Select Category *</option>
                      {CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    {errors.category && <span className="trot-field-error">{errors.category}</span>}
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Your Message *"
                      value={form.message}
                      onChange={handleChange}
                      maxLength={1000}
                    />
                    {errors.message && <span className="trot-field-error">{errors.message}</span>}
                  </div>
                  <div className="form-group message-btn">
                    <button
                      type="submit"
                      className="thm-btn"
                      disabled={isSubmitting}
                      style={{ opacity: isSubmitting ? 0.7 : 1 }}
                    >
                      {isSubmitting ? "Sending..." : "Submit Now"}
                      <span className="fas fa-arrow-right"></span>
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <span className="scroll-to-top__wrapper">
          <span className="scroll-to-top__inner"></span>
        </span>
        <span className="scroll-to-top__text"> Go Back Top</span>
      </a>
    </>
  );
}
