import { useState } from "react";
import { images } from "../Images";
import { Code, Description, ContentCopy } from "@mui/icons-material";
import { Snackbar, Alert } from "@mui/material";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jithendrachandra20@gmail.com");
    setCopied(true);
  };

  return (
    <section
      id="hero"
      style={{
        paddingTop: "8rem",
        paddingBottom: "4rem",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            alignItems: "center",
            background: "var(--white-1)",
            border: "1px solid var(--onyx)",
            borderRadius: "1.5rem",
            padding: "3rem",
            boxShadow: "var(--shadow-2)",
          }}
        >
          {/* Text Content */}
          <div>
            <div style={{ marginBottom: "1rem" }}>
              <span
                style={{
                  background: "rgba(56, 189, 248, 0.1)",
                  color: "#38bdf8",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  borderRadius: "0.5rem",
                  padding: "0.3rem 0.8rem",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                }}
              >
                Full Stack AI Engineer @ Evomaton
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
                fontWeight: "800",
                color: "var(--eerie-black-1)",
                lineHeight: "1.15",
                letterSpacing: "-0.5px",
                marginBottom: "1.2rem",
              }}
            >
              Building Enterprise AI & Document Intelligence Systems
            </h1>

            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--light-gray)",
                lineHeight: "1.7",
                marginBottom: "2rem",
                maxWidth: "640px",
              }}
            >
              Full Stack AI Engineer at <strong style={{ color: "var(--eerie-black-1)" }}>Evomaton</strong> specializing in industrial Vision AI document intelligence, visual PDF delta highlighting, agentic RAG microservices, and full-stack cloud backend architectures on Azure and AWS.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <a href="#projects">
                <button
                  style={{
                    background: "#0284c7",
                    color: "#ffffff",
                    border: "none",
                    padding: "0.8rem 1.6rem",
                    borderRadius: "0.7rem",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Code style={{ fontSize: "1.1rem" }} /> View Projects
                </button>
              </a>

              <a
                href="https://drive.google.com/file/d/1_p92N1NxjUEdbk3tztI3vu-wGU41WpWm/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  style={{
                    background: "rgba(30, 41, 59, 0.8)",
                    color: "#f8fafc",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    padding: "0.8rem 1.4rem",
                    borderRadius: "0.7rem",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Description style={{ fontSize: "1.1rem", color: "#38bdf8" }} /> Resume
                </button>
              </a>

              <button
                onClick={handleCopyEmail}
                style={{
                  background: "transparent",
                  color: "#cbd5e1",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  padding: "0.8rem 1.2rem",
                  borderRadius: "0.7rem",
                  fontSize: "0.88rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <ContentCopy style={{ fontSize: "0.95rem", color: "#34d399" }} /> Copy Email
              </button>
            </div>
          </div>

          {/* Profile Card */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "100%",
                maxWidth: "320px",
                background: "var(--white-2)",
                border: "1px solid var(--onyx)",
                borderRadius: "1.5rem",
                padding: "1.8rem",
                textAlign: "center",
                boxShadow: "var(--shadow-1)",
              }}
            >
              <img
                src={images.avatar}
                alt="VenkataJithendra Chandra"
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "1rem",
                  marginBottom: "1rem",
                  border: "2px solid rgba(56, 189, 248, 0.3)",
                }}
              />

              <h2 style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--eerie-black-1)", margin: "0 0 0.3rem 0" }}>
                VenkataJithendra Chandra
              </h2>

              <p style={{ fontSize: "0.85rem", color: "var(--blue-crayola)", fontWeight: "600", margin: "0 0 1.2rem 0" }}>
                Full Stack AI Engineer
              </p>

              <div
                style={{
                  background: "var(--smoky-black)",
                  borderRadius: "0.8rem",
                  padding: "0.8rem 1rem",
                  textAlign: "left",
                  fontSize: "0.8rem",
                  border: "1px solid var(--onyx)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--light-gray)" }}>Company:</span>
                  <span style={{ color: "var(--blue-crayola)", fontWeight: "600" }}>Evomaton</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--light-gray)" }}>Focus:</span>
                  <span style={{ color: "var(--eerie-black-1)", fontWeight: "600" }}>Document AI & RAG</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--light-gray)" }}>Location:</span>
                  <span style={{ color: "var(--eerie-black-2)" }}>Bengaluru, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Snackbar
        open={copied}
        autoHideDuration={3000}
        onClose={() => setCopied(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setCopied(false)} severity="success" sx={{ width: "100%" }}>
          Email address copied to clipboard!
        </Alert>
      </Snackbar>
    </section>
  );
};

export default HeroSection;
