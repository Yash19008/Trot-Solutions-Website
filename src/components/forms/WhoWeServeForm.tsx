"use client";

import { useState } from "react";

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  category: string;
  message: string;
}

interface Errors {
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

// This form is on the homepage "Who We Serve" section — user type defaults to Customer
const DEFAULT_USER_TYPE = "Customer";

export default function WhoWeServeForm() {
  const [form, setForm] = useState<FormState>({
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
    if (!form.name.trim() || form.name.trim().length < 2)
      newErrors.name = "Full name must be at least 2 characters.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email address.";
    if (!form.phone.trim() || !/^\+?[0-9\s\-\(\)]{7,15}$/.test(form.phone))
      newErrors.phone = "Please enter a valid phone number (7–15 digits).";
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
          userType: DEFAULT_USER_TYPE,
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
      setSubmitError("A network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={{
        textAlign: "center",
        padding: "36px 20px",
        background: "#1e293b",
        borderRadius: "10px",
        border: "2px solid #eab308",
      }}>
        <div style={{
          width: "60px", height: "60px", borderRadius: "50%",
          background: "#eab308", margin: "0 auto 16px",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 0 0 8px rgba(234,179,8,0.15)",
        }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h4 style={{ color: "#eab308", marginBottom: "10px", fontSize: "20px", fontWeight: 700 }}>
          Request Sent!
        </h4>
        <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: "20px", fontSize: "14px", lineHeight: "1.6" }}>
          Thank you! Our team will contact you shortly.
        </p>
        <button
          type="button"
          className="thm-btn"
          style={{ fontSize: "13px", padding: "10px 24px" }}
          onClick={() => setSubmitted(false)}
        >
          Send Another Request
        </button>
      </div>
    );
  }


  return (
    <form onSubmit={handleSubmit} className="who-we-serve__form" noValidate>
      {submitError && (
        <div style={{
          background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.4)",
          borderRadius: "6px", padding: "10px 14px", marginBottom: "14px",
          color: "#fca5a5", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px"
        }}>
          <span>⚠️</span> {submitError}
        </div>
      )}

      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="who-we-serve__input-box">
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={form.name}
              onChange={handleChange}
              maxLength={100}
            />
            {errors.name && (
              <span className="trot-field-error who-we-serve-error">{errors.name}</span>
            )}
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="who-we-serve__input-box">
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
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="who-we-serve__input-box">
            <input
              type="email"
              name="email"
              placeholder="Email ID *"
              value={form.email}
              onChange={handleChange}
              maxLength={100}
            />
            {errors.email && (
              <span className="trot-field-error who-we-serve-error">{errors.email}</span>
            )}
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="who-we-serve__input-box">
            <input
              type="text"
              name="phone"
              placeholder="Mobile Number *"
              value={form.phone}
              onChange={handleChange}
              maxLength={20}
            />
            {errors.phone && (
              <span className="trot-field-error who-we-serve-error">{errors.phone}</span>
            )}
          </div>
        </div>
        <div className="col-xl-12">
          <div className="who-we-serve__input-box">
            <div className="select-box">
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="form-control ignore"
              >
                <option value="">Select Category *</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            {errors.category && (
              <span className="trot-field-error who-we-serve-error">{errors.category}</span>
            )}
          </div>
        </div>
        <div className="col-xl-12">
          <div className="who-we-serve__input-box text-message-box">
            <textarea
              name="message"
              placeholder="Your Message *"
              value={form.message}
              onChange={handleChange}
              maxLength={1000}
            />
            {errors.message && (
              <span className="trot-field-error who-we-serve-error">{errors.message}</span>
            )}
          </div>
          <div className="who-we-serve__btn-box">
            <button
              type="submit"
              className="thm-btn"
              disabled={isSubmitting}
              style={{ opacity: isSubmitting ? 0.7 : 1 }}
            >
              {isSubmitting ? "Sending..." : "Request a Call"}
              <span className="fas fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
