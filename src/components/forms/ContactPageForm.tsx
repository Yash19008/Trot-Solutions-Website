"use client";

import { useState } from "react";

interface FormState {
  userType: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  category: string;
  message: string;
}

interface Errors {
  userType?: string;
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

export default function ContactPageForm() {
  const [form, setForm] = useState<FormState>({
    userType: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (!form.userType)
      newErrors.userType = "Please select how you are contacting us.";
    if (!form.name.trim() || form.name.trim().length < 2)
      newErrors.name = "Full name must be at least 2 characters.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email address.";
    if (!form.phone.trim() || !/^\+?[0-9\s\-\(\)]{7,15}$/.test(form.phone))
      newErrors.phone = "Please enter a valid phone number (7–15 digits).";
    if (!form.category)
      newErrors.category = "Please select a category.";
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
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitError) setSubmitError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
          userType: form.userType,
          category: form.category,
          message: form.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ userType: "", name: "", company: "", email: "", phone: "", category: "", message: "" });
        setErrors({});
      } else {
        const data = await res.json().catch(() => ({}));
        setSubmitError(data.error || "Failed to send. Please try again.");
      }
    } catch {
      setSubmitError("A network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "50px 24px",
          background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
          borderRadius: "12px",
          border: "2px solid #86efac",
        }}
      >
        <div style={{
          width: "70px", height: "70px", borderRadius: "50%",
          background: "#22c55e", margin: "0 auto 20px",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 style={{ color: "#15803d", marginBottom: "10px", fontSize: "24px" }}>Message Sent!</h3>
        <p style={{ color: "#166534", marginBottom: "28px", fontSize: "15px", lineHeight: "1.6" }}>
          Thank you for reaching out. Our team will review your inquiry and get back to you within 1–2 business days.
        </p>
        <button
          type="button"
          className="thm-btn"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message <span className="fas fa-arrow-right" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-page__form" noValidate>
      {submitError && (
        <div style={{
          background: "#fef2f2", border: "1px solid #fca5a5", borderRadius: "8px",
          padding: "12px 16px", marginBottom: "20px", color: "#dc2626", fontSize: "14px",
          display: "flex", alignItems: "center", gap: "8px"
        }}>
          <span style={{ fontSize: "18px" }}>⚠️</span>
          {submitError}
        </div>
      )}

      <div className="row">
        {/* Are you a... */}
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="contact-page__input-box">
            <select
              className="form-control ignore"
              name="userType"
              value={form.userType}
              onChange={handleChange}
            >
              <option value="">Are you a... *</option>
              <option value="Customer">Customer</option>
              <option value="Job Seeker">Job Seeker</option>
            </select>
            {errors.userType && (
              <span className="trot-field-error">{errors.userType}</span>
            )}
          </div>
        </div>

        {/* Full Name */}
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="contact-page__input-box">
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={form.name}
              onChange={handleChange}
              maxLength={100}
            />
            {errors.name && (
              <span className="trot-field-error">{errors.name}</span>
            )}
          </div>
        </div>

        {/* Company (Optional) */}
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="contact-page__input-box">
            <input
              type="text"
              name="company"
              placeholder="Company Name (Optional)"
              value={form.company}
              onChange={handleChange}
              maxLength={100}
            />
          </div>
        </div>

        {/* Email */}
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="contact-page__input-box">
            <input
              type="email"
              name="email"
              placeholder="Email ID *"
              value={form.email}
              onChange={handleChange}
              maxLength={100}
            />
            {errors.email && (
              <span className="trot-field-error">{errors.email}</span>
            )}
          </div>
        </div>

        {/* Phone */}
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="contact-page__input-box">
            <input
              type="text"
              name="phone"
              placeholder="Mobile Number *"
              value={form.phone}
              onChange={handleChange}
              maxLength={20}
            />
            {errors.phone && (
              <span className="trot-field-error">{errors.phone}</span>
            )}
          </div>
        </div>

        {/* Category */}
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="contact-page__input-box">
            <select
              className="form-control ignore"
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              <option value="">Select Category *</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            {errors.category && (
              <span className="trot-field-error">{errors.category}</span>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="col-xl-12">
          <div className="contact-page__input-box text-message-box">
            <textarea
              name="message"
              placeholder="Your Message *"
              value={form.message}
              onChange={handleChange}
              maxLength={1000}
            />
            {errors.message && (
              <span className="trot-field-error">{errors.message}</span>
            )}
          </div>
          <div className="contact-page__btn-box">
            <button
              type="submit"
              className="thm-btn contact-page__btn"
              disabled={isSubmitting}
              style={{ opacity: isSubmitting ? 0.7 : 1 }}
            >
              {isSubmitting ? "Sending..." : "Send A Message"}
              <span className="fas fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
