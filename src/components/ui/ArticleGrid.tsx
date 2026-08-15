"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export interface Post {
  id: string;
  image: string;
  date: string;
  title: string;
  text: string;
  content: string;
  tag?: string;
  author?: string;
}

interface ArticleGridProps {
  posts: Post[];
}

export function ArticleGrid({ posts }: ArticleGridProps) {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-xl-4 col-lg-4 col-md-6 mb-5">
            <div
              className="blog-one__single"
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                background: "var(--builza-white)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                transition: "all 0.3s ease",
              }}
            >
              {post.image && (
                <div className="blog-one__img">
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{
                      width: "100%",
                      height: "260px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}
              <div className="blog-one__content" style={{ padding: "30px" }}>
                <div
                  className="blog-one__meta"
                  style={{
                    marginBottom: "15px",
                    fontSize: "14px",
                    fontWeight: "500",
                    display: "flex",
                    gap: "15px",
                  }}
                >
                  <span style={{ color: "var(--builza-gray)" }}>
                    <i className="fas fa-calendar-alt"></i> {post.date}
                  </span>
                  {post.tag && (
                    <span style={{ color: "var(--builza-gray)" }}>
                      <i className="fas fa-tag"></i> {post.tag}
                    </span>
                  )}
                  {post.author && (
                    <span style={{ color: "var(--builza-gray)" }}>
                      <i className="fas fa-user"></i> {post.author}
                    </span>
                  )}
                </div>
                <h3
                  className="blog-one__title"
                  style={{
                    fontSize: "22px",
                    fontWeight: "700",
                    marginBottom: "15px",
                    lineHeight: "1.4",
                  }}
                >
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#articleModal"
                    onClick={() => setSelectedPost(post)}
                    style={{
                      color: "var(--builza-black)",
                      textDecoration: "none",
                    }}
                  >
                    {post.title}
                  </a>
                </h3>
                <p
                  className="blog-one__text"
                  style={{
                    color: "var(--builza-gray)",
                    marginBottom: "25px",
                    lineHeight: "1.7",
                  }}
                >
                  {post.text}
                </p>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#articleModal"
                  onClick={() => setSelectedPost(post)}
                  className="thm-btn"
                  style={{ padding: "10px 30px", borderRadius: "5px" }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {mounted && createPortal(
        <div
          className="modal fade"
          id="articleModal"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
            <div
              className="modal-content"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                border: "none",
                boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
              }}
            >
              <div
                className="modal-header"
                style={{
                  padding: "25px 40px",
                  backgroundColor: "var(--builza-black)",
                  color: "var(--builza-white)",
                }}
              >
                <h5
                  className="modal-title"
                  style={{
                    color: "var(--builza-white)",
                    fontSize: "28px",
                    fontWeight: "700",
                    margin: 0,
                  }}
                >
                  {selectedPost?.title}
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div
                className="modal-body"
                style={{ padding: "0", backgroundColor: "#ffffff" }}
              >
                {selectedPost?.image && (
                  <div
                    style={{
                      width: "100%",
                      height: "450px",
                      backgroundImage: `url(${selectedPost.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                )}
                <div style={{ padding: "50px" }}>
                  <div
                    style={{
                      marginBottom: "30px",
                      color: "var(--builza-gray)",
                      fontWeight: "600",
                      fontSize: "16px",
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                    }}
                  >
                    {selectedPost?.date && (
                      <span>
                        <i className="fas fa-calendar-alt"></i> {selectedPost.date}
                      </span>
                    )}
                    {selectedPost?.tag && (
                      <>
                        <span style={{ color: "#ddd" }}>|</span>
                        <span>
                          <i className="fas fa-tag"></i> {selectedPost.tag}
                        </span>
                      </>
                    )}
                    {selectedPost?.author && (
                      <>
                        <span style={{ color: "#ddd" }}>|</span>
                        <span>
                          <i className="fas fa-user"></i> {selectedPost.author}
                        </span>
                      </>
                    )}
                  </div>
                  {selectedPost?.content && (
                    <div
                      className="blog-content-html"
                      style={{
                        lineHeight: "1.9",
                        color: "#444",
                        fontSize: "17px",
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                        maxWidth: "100%",
                      }}
                      dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
