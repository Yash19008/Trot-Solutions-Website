"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function CareerApplyForm({ jobTitles = [] }: { jobTitles?: string[] }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [dynamicOptions, setDynamicOptions] = useState<string[]>(
    Array.from(new Set([...jobTitles]))
  );

  useEffect(() => {
    const modal = document.getElementById("applyModal");
    
    const handleModalShow = (e: any) => {
      const button = e.relatedTarget;
      const job = button.getAttribute("data-job");
      if (job) {
        setSelectedJob(job);
        setDynamicOptions((prev) => {
          if (!prev.includes(job)) {
            return [job, ...prev];
          }
          return prev;
        });
      } else {
        setSelectedJob("");
      }
    };

    if (modal) {
      modal.addEventListener("show.bs.modal", handleModalShow);
    }

    return () => {
      if (modal) {
        modal.removeEventListener("show.bs.modal", handleModalShow);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    
    let resumeUrl = "";
    
    // 1. Upload CV if present
    const file = formData.get("cv") as File;
    if (file && file.size > 0) {
      const uploadData = new FormData();
      uploadData.append("file", file);
      
      try {
        const uploadRes = await fetch("/api/careers-upload", {
          method: "POST",
          body: uploadData,
        });
        
        if (uploadRes.ok) {
          const uploadResult = await uploadRes.json();
          resumeUrl = uploadResult.filePath;
        } else {
          toast.error("Error uploading CV. Please try again.");
          setIsSubmitting(false);
          return;
        }
      } catch (err) {
        console.error(err);
        toast.error("Network error while uploading CV.");
        setIsSubmitting(false);
        return;
      }
    }

    // 2. Submit Lead
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone") || "",
      position: selectedJob,
      resumeUrl: resumeUrl,
      coverLetter: formData.get("message"),
    };

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast.success("Thank you! Your application has been submitted successfully.");
        formElement.reset();
        setSelectedJob("");
        
        // Try to close modal programmatically
        const closeBtn = document.querySelector("#applyModal .btn-close") as HTMLButtonElement;
        if (closeBtn) closeBtn.click();
      } else {
        const errorData = await res.json();
        toast.error("Error: " + (errorData.error || "Failed to submit application."));
      }
    } catch (err) {
      console.error(err);
      toast.error("A network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form id="apply-form" className="contact-page__form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xl-6">
          <div className="contact-page__input-box">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              required
              minLength={2}
              maxLength={100}
              style={{
                height: "57px",
                width: "100%",
                backgroundColor: "var(--builza-white)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                padding: "0 20px",
                outline: "none",
                fontSize: "16px",
                color: "var(--builza-black)",
                borderRadius: "var(--builza-bdr-radius)",
              }}
            />
          </div>
        </div>
        <div className="col-xl-6">
          <div className="contact-page__input-box">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
              maxLength={100}
              style={{
                height: "57px",
                width: "100%",
                backgroundColor: "var(--builza-white)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                padding: "0 20px",
                outline: "none",
                fontSize: "16px",
                color: "var(--builza-black)",
                borderRadius: "var(--builza-bdr-radius)",
              }}
            />
          </div>
        </div>
        <div className="col-xl-6">
          <div className="contact-page__input-box">
            <div className="select-box">
              <select
                className="ignore"
                id="jobSelect"
                name="job"
                value={selectedJob}
                onChange={(e) => setSelectedJob(e.target.value)}
                required
                style={{
                  height: "57px",
                  width: "100%",
                  backgroundColor: "var(--builza-white)",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  padding: "0 20px",
                  outline: "none",
                  fontSize: "16px",
                  color: "var(--builza-black)",
                  borderRadius: "20px",
                }}
              >
                <option value="" disabled>
                  Select Job Position
                </option>
                {dynamicOptions.map((opt, idx) => (
                  <option key={idx} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="contact-page__input-box">
            <input
              type="text"
              placeholder="Mobile Number"
              name="phone"
              required
              pattern="^\+?[0-9\s\-\(\)]{7,15}$"
              title="Please enter a valid phone number (7-15 digits)"
              style={{
                height: "57px",
                width: "100%",
                backgroundColor: "var(--builza-white)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                padding: "0 20px",
                outline: "none",
                fontSize: "16px",
                color: "var(--builza-black)",
                borderRadius: "var(--builza-bdr-radius)",
              }}
            />
          </div>
        </div>
        <div className="col-xl-12 mb-4">
          <label
            style={{
              fontWeight: 600,
              marginBottom: "10px",
              display: "block",
              color: "var(--builza-black)",
            }}
          >
            Attach CV / Resume (PDF, DOCX)
          </label>
          <div className="contact-page__input-box">
            <input
              type="file"
              name="cv"
              accept=".pdf,.doc,.docx"
              required
              style={{
                height: "57px",
                width: "100%",
                backgroundColor: "var(--builza-white)",
                border: "1px dashed rgba(0, 0, 0, 0.2)",
                padding: "12px 20px",
                outline: "none",
                fontSize: "16px",
                color: "var(--builza-gray)",
                borderRadius: "var(--builza-bdr-radius)",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <div className="col-xl-12">
          <div className="contact-page__input-box text-message-box">
            <textarea
              name="message"
              placeholder="Cover Letter / Message"
              required
              minLength={10}
              maxLength={2000}
              style={{
                fontSize: "16px",
                color: "var(--builza-black)",
                height: "150px",
                width: "100%",
                backgroundColor: "var(--builza-white)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                padding: "15px 20px",
                borderRadius: "var(--builza-bdr-radius)",
                outline: "none",
              }}
            ></textarea>
          </div>
        </div>
        
        {/* We place the footer action buttons inside the form here to leverage the onSubmit naturally, or we keep them outside. 
            Since they were originally outside in the modal-footer, let's just render them here so they submit properly. */}
        <div className="col-xl-12 mt-4" style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            className="thm-btn"
            data-bs-dismiss="modal"
            style={{
              backgroundColor: "var(--builza-gray)",
              padding: "10px 30px",
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="thm-btn"
            disabled={isSubmitting}
            style={{ padding: "10px 30px", opacity: isSubmitting ? 0.7 : 1 }}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
            <i
              className="fas fa-paper-plane"
              style={{ marginLeft: "5px" }}
            ></i>
          </button>
        </div>
      </div>
    </form>
  );
}
