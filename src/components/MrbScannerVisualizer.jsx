import { useState, useEffect } from "react";
import { Visibility, CheckCircle, Warning, Cached, Storage, Verified } from "@mui/icons-material";

const MrbScannerVisualizer = () => {
  const [activeTab, setActiveTab] = useState("SUMMARY");
  const [progress, setProgress] = useState(87);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 80 : prev + 1));
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: "Total Dossier Volume", value: "30,420 Pages", status: "PASS" },
    { label: "File Size Payload", value: "2.14 GB (2,140 MB)", status: "OPTIMIZED" },
    { label: "Vision AI Legibility", value: "99.4% Precision", status: "PASS" },
    { label: "Page Orientation", value: "Auto-Corrected (90°)", status: "ALIGNED" },
    { label: "Missing Documents", value: "0 Anomalies Detected", status: "VERIFIED" },
    { label: "Oracle Aconex Sync", value: "Rev C - Code 1 Approved", status: "SYNCED" },
  ];

  return (
    <div
      style={{
        background: "rgba(15, 23, 42, 0.85)",
        border: "1px solid rgba(56, 189, 248, 0.3)",
        borderRadius: "1rem",
        padding: "1.2rem",
        marginTop: "1.5rem",
        backdropFilter: "blur(12px)",
        boxShadow: "0 10px 35px rgba(0,210,255,0.15)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "1rem",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          paddingBottom: "0.8rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <Storage style={{ color: "#38bdf8", fontSize: "1.5rem" }} />
          <h4 style={{ color: "#f8fafc", fontSize: "1.1rem", fontWeight: "600", margin: 0 }}>
            Vision AI MRB Dossier Inspector Telemetry
          </h4>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span
            style={{
              background: "rgba(16, 185, 129, 0.2)",
              color: "#34d399",
              padding: "0.3rem 0.8rem",
              borderRadius: "1rem",
              fontSize: "0.75rem",
              fontWeight: "600",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
            }}
          >
            <Verified style={{ fontSize: "0.9rem" }} /> Live Aconex Pipeline
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{ marginBottom: "1.2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
          <span style={{ color: "#94a3b8", fontSize: "0.78rem", fontWeight: "500" }}>
            Real-Time OCR & Legibility Analysis (Stream Buffer)
          </span>
          <span style={{ color: "#38bdf8", fontSize: "0.78rem", fontWeight: "700", fontFamily: "monospace" }}>
            {progress}% Completed
          </span>
        </div>
        <div
          style={{
            height: "8px",
            background: "rgba(30, 41, 59, 0.8)",
            borderRadius: "4px",
            overflow: "hidden",
            border: "1px solid rgba(56, 189, 248, 0.2)",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "linear-gradient(90deg, #0284c7, #38bdf8, #34d399)",
              borderRadius: "4px",
              transition: "width 0.5s ease-in-out",
            }}
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "0.8rem",
        }}
      >
        {stats.map((stat, idx) => (
          <div
            key={idx}
            style={{
              background: "rgba(30, 41, 59, 0.6)",
              border: "1px solid rgba(51, 65, 85, 0.7)",
              borderRadius: "0.6rem",
              padding: "0.75rem 0.9rem",
            }}
          >
            <span style={{ color: "#94a3b8", fontSize: "0.72rem", display: "block" }}>
              {stat.label}
            </span>
            <span
              style={{
                color: "#f1f5f9",
                fontSize: "0.95rem",
                fontWeight: "700",
                display: "block",
                margin: "0.2rem 0",
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                color: "#34d399",
                fontSize: "0.68rem",
                fontWeight: "600",
                fontFamily: "monospace",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.2rem",
              }}
            >
              <CheckCircle style={{ fontSize: "0.75rem" }} /> {stat.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MrbScannerVisualizer;
