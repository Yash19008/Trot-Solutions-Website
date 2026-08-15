import React from "react";

export interface Job {
  id: string;
  image: string;
  title: string;
  position: string;
  location: string;
  posted: string;
  deadline: string;
  description: string;
  status?: string;
  jobDetailsPdf?: string;
}

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div
      className="career-card"
      style={{
        background: "var(--builza-white)",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div className="career-card__img" style={{ position: "relative" }}>
        <img
          src={job.image}
          alt={job.title}
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
          }}
        />
        <div
          className="career-card__status"
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "var(--builza-base)",
            color: "var(--builza-black)",
            padding: "5px 15px",
            borderRadius: "20px",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          {job.status || "Open"}
        </div>
      </div>
      <div
        className="career-card__content"
        style={{
          padding: "30px",
          flexGrow: "1",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3
          className="career-card__title"
          style={{
            fontSize: "24px",
            fontWeight: "700",
            marginBottom: "10px",
            color: "var(--builza-black)",
          }}
        >
          {job.title}
        </h3>
        <h4
          className="career-card__position"
          style={{
            fontSize: "16px",
            color: "var(--builza-base)",
            marginBottom: "20px",
            fontWeight: "600",
          }}
        >
          {job.position}
        </h4>

        <ul
          className="career-card__meta list-unstyled"
          style={{
            marginBottom: "20px",
            borderTop: "1px solid rgba(0,0,0,0.05)",
            borderBottom: "1px solid rgba(0,0,0,0.05)",
            padding: "15px 0",
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <li style={{ fontSize: "14px", color: "var(--builza-gray)" }}>
            <i
              className="fas fa-map-marker-alt"
              style={{
                color: "var(--builza-base)",
                marginRight: "5px",
              }}
            ></i>{" "}
            {job.location}
          </li>
          <li style={{ fontSize: "14px", color: "var(--builza-gray)" }}>
            <i
              className="fas fa-calendar-alt"
              style={{
                color: "var(--builza-base)",
                marginRight: "5px",
              }}
            ></i>{" "}
            Posted: {job.posted}
          </li>
          <li style={{ fontSize: "14px", color: "var(--builza-gray)" }}>
            <i
              className="fas fa-calendar-times"
              style={{
                color: "var(--builza-base)",
                marginRight: "5px",
              }}
            ></i>{" "}
            Deadline: {job.deadline}
          </li>
        </ul>

        <p
          className="career-card__desc"
          style={{
            color: "var(--builza-gray)",
            lineHeight: "1.7",
            marginBottom: "25px",
            flexGrow: "1",
          }}
        >
          {job.description}
        </p>

        <div
          className="career-card__actions"
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#applyModal"
            data-job={job.title}
            className="thm-btn apply-btn"
            style={{ padding: "10px 25px", borderRadius: "5px" }}
          >
            Apply Now
          </a>
          {job.jobDetailsPdf && (
            <a
              href={job.jobDetailsPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="thm-btn"
              style={{
                padding: "10px 25px",
                borderRadius: "5px",
                backgroundColor: "var(--builza-black)",
                color: "var(--builza-white)",
              }}
            >
              <i className="fas fa-file-pdf"></i> Job Details
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
