import { useEffect, useState } from "react";
import TimeLine from "../components/TimeLine";
import { educationData } from "../data/education";
import { experienceData } from "../data/experience";
import ServiceItems from "../components/ServiceItems";
import { servicesData } from "../data/serviceItems";
import { Button } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import VerifiedIcon from "@mui/icons-material/Verified";

function About() {
  const [displayText, setDisplayText] = useState("");
  const fullText =
    "Hello! I’m VenkataJithendra Chandra, a Full Stack AI Engineer at Evomaton architecting enterprise AI platforms in the EPC (Engineering, Procurement & Construction) domain. I specialize in Vision AI document intelligence, visual PDF delta rendering, agentic RAG microservices, and full-stack cloud backend architectures on Azure & AWS. I engineer high-throughput systems that process 30,000+ page dossiers, synchronize live Oracle Aconex revision codes, and deliver transformative operational impact.";

  useEffect(() => {
    window.scrollTo(0, 0);
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 18);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { value: "30,000+", label: "Pages / Dossier", sub: "MRB Vision AI" },
    { value: "2 GB+", label: "Payload Capacity", sub: "Azure Blob Storage" },
    { value: "10", label: "AI Modules", sub: "VendorPrint 1 AI Suite" },
    { value: "99.4%", label: "Legibility Precision", sub: "Document Inspection" },
  ];

  return (
    <article className="about active" data-page="about">
      <header>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
          <h2 className="h2 article-title">About Me</h2>
          <span
            style={{
              background: "rgba(56, 189, 248, 0.15)",
              color: "#38bdf8",
              padding: "0.4rem 0.9rem",
              borderRadius: "1rem",
              fontSize: "0.8rem",
              fontWeight: "600",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              marginBottom: "1rem",
            }}
          >
            <VerifiedIcon style={{ fontSize: "1rem" }} /> Full Stack AI Engineer @ Evomaton
          </span>
        </div>
      </header>

      {/* Typing Animated Bio */}
      <section className="about-text" style={{ background: "rgba(15, 23, 42, 0.6)", borderRadius: "1rem", padding: "1.2rem", border: "1px solid rgba(255, 255, 255, 0.08)", marginBottom: "1.5rem" }}>
        <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#cbd5e1" }}>
          {displayText}
          <span className="cursor" style={{ color: "#38bdf8", fontWeight: "bold" }}>|</span>
        </p>
      </section>

      {/* Resume CTA */}
      <div style={{ marginBottom: "2rem" }}>
        <a
          href="https://drive.google.com/file/d/1_p92N1NxjUEdbk3tztI3vu-wGU41WpWm/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<DescriptionIcon />}
            sx={{
              background: "#0284c7",
              color: "white",
              fontWeight: "bold",
              textTransform: "capitalize",
              borderRadius: "0.8rem",
              padding: "0.7rem 1.8rem",
              fontSize: "0.95rem",
              cursor: "pointer",
              "&:hover": {
                background: "#0369a1",
              },
            }}
          >
            View Resume
          </Button>
        </a>
      </div>

      {/* Impact Stats Ribbon */}
      <section style={{ marginBottom: "2.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1rem",
          }}
        >
          {stats.map((item, index) => (
            <div
              key={index}
              style={{
                background: "rgba(30, 41, 59, 0.6)",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                borderRadius: "1rem",
                padding: "1rem",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "1.7rem",
                  fontWeight: "800",
                  color: "#38bdf8",
                  margin: 0,
                }}
              >
                {item.value}
              </h3>
              <p style={{ color: "#f8fafc", fontWeight: "600", fontSize: "0.85rem", margin: "0.3rem 0 0.1rem 0" }}>
                {item.label}
              </p>
              <span style={{ color: "#94a3b8", fontSize: "0.72rem" }}>{item.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="service" style={{ marginBottom: "2.5rem" }}>
        <h3 className="h3 service-title" style={{ fontSize: "1.4rem", fontWeight: "700" }}>
          What I&apos;m Architecting
        </h3>

        <ul className="service-list">
          <ServiceItems servicesData={servicesData} />
        </ul>
      </section>

      {/* Experience Timeline */}
      <TimeLine title="Professional Experience" data={experienceData} />

      {/* Education Timeline */}
      <TimeLine title="Education" data={educationData} />
    </article>
  );
}

export default About;
