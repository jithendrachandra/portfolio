import { experienceData } from "../data/experience";
import { educationData } from "../data/education";
import { BusinessCenter, School, LocationOn, CalendarToday, Verified } from "@mui/icons-material";

const ExperienceSection = () => {
  return (
    <section id="experience" style={{ padding: "3rem 0", position: "relative", zIndex: 2 }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 1.5rem" }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span
            style={{
              background: "rgba(16, 185, 129, 0.15)",
              color: "#34d399",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              borderRadius: "1rem",
              padding: "0.35rem 1rem",
              fontSize: "0.8rem",
              fontWeight: "700",
              display: "inline-block",
              marginBottom: "0.6rem",
            }}
          >
            CAREER TRAJECTORY
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.6rem)", fontWeight: "800", color: "#f8fafc", margin: 0 }}>
            Experience & Education
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
          
          {/* Experience Timeline */}
          <div
            style={{
              background: "rgba(15, 23, 42, 0.75)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(56, 189, 248, 0.25)",
              borderRadius: "1.8rem",
              padding: "2rem",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.8rem" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "0.8rem",
                  background: "linear-gradient(135deg, #0284c7, #10b981)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  boxShadow: "0 0 15px rgba(2, 132, 199, 0.4)",
                }}
              >
                <BusinessCenter />
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#f8fafc", margin: 0 }}>
                Work Experience
              </h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {experienceData.map((item) => (
                <div
                  key={item.id}
                  style={{
                    position: "relative",
                    paddingLeft: "1.5rem",
                    borderLeft: "2px solid rgba(56, 189, 248, 0.3)",
                  }}
                >
                  {/* Glowing Node Dot */}
                  <span
                    style={{
                      position: "absolute",
                      left: "-7px",
                      top: "4px",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#38bdf8",
                      boxShadow: "0 0 10px #38bdf8",
                    }}
                  />

                  <h4 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#f8fafc", margin: 0 }}>
                    {item.title}
                  </h4>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", margin: "0.4rem 0 0.8rem 0" }}>
                    <span
                      style={{
                        color: "#38bdf8",
                        fontSize: "0.78rem",
                        fontWeight: "600",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                      }}
                    >
                      <CalendarToday style={{ fontSize: "0.85rem" }} /> {item.period}
                    </span>

                    <span
                      style={{
                        color: "#94a3b8",
                        fontSize: "0.78rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                      }}
                    >
                      <LocationOn style={{ fontSize: "0.85rem" }} /> {item.location} ({item.workMode})
                    </span>
                  </div>

                  {item.client && (
                    <div
                      style={{
                        background: "rgba(16, 185, 129, 0.15)",
                        color: "#34d399",
                        border: "1px solid rgba(16, 185, 129, 0.3)",
                        borderRadius: "0.5rem",
                        padding: "0.25rem 0.6rem",
                        fontSize: "0.72rem",
                        fontWeight: "700",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        marginBottom: "0.8rem",
                      }}
                    >
                      <Verified style={{ fontSize: "0.85rem" }} /> Client: {item.client}
                    </div>
                  )}

                  <p style={{ color: "#cbd5e1", fontSize: "0.88rem", lineHeight: "1.6", margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Achievements */}
          <div
            style={{
              background: "rgba(15, 23, 42, 0.75)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(16, 185, 129, 0.25)",
              borderRadius: "1.8rem",
              padding: "2rem",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.8rem" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "0.8rem",
                  background: "linear-gradient(135deg, #10b981, #a855f7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  boxShadow: "0 0 15px rgba(16, 185, 129, 0.4)",
                }}
              >
                <School />
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#f8fafc", margin: 0 }}>
                Academic Foundation
              </h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {educationData.map((item) => (
                <div
                  key={item.id}
                  style={{
                    position: "relative",
                    paddingLeft: "1.5rem",
                    borderLeft: "2px solid rgba(16, 185, 129, 0.3)",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "-7px",
                      top: "4px",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#34d399",
                      boxShadow: "0 0 10px #34d399",
                    }}
                  />

                  <h4 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#f8fafc", margin: 0 }}>
                    {item.title}
                  </h4>

                  <p style={{ color: "#38bdf8", fontWeight: "600", fontSize: "0.9rem", margin: "0.3rem 0" }}>
                    {item.description}
                  </p>

                  <div style={{ display: "flex", gap: "1rem", fontSize: "0.78rem" }}>
                    <span style={{ color: "#94a3b8" }}>Period: {item.period}</span>
                    <span style={{ color: "#34d399", fontWeight: "700" }}>CGPA: {item.percentage}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Core Competencies Box */}
            <div
              style={{
                marginTop: "2.5rem",
                background: "rgba(30, 41, 59, 0.6)",
                border: "1px solid rgba(56, 189, 248, 0.2)",
                borderRadius: "1rem",
                padding: "1.2rem",
              }}
            >
              <h5 style={{ color: "#f8fafc", fontSize: "0.95rem", fontWeight: "700", margin: "0 0 0.6rem 0" }}>
                🎯 Specialized Domain Expertise
              </h5>
              <ul style={{ color: "#cbd5e1", fontSize: "0.82rem", lineHeight: "1.7", paddingLeft: "1.2rem", margin: 0 }}>
                <li>EPC Engineering Dossier Processing (MRB 30k pages / 2GB payload)</li>
                <li>Visual Tri-Color PDF Delta Generation (CRS Comment Resolution)</li>
                <li>Oracle Aconex Integration & Document Revision Calls</li>
                <li>Async Microservices Architecture with Python & FastAPI</li>
                <li>Azure SQL, Azure Databricks, Azure Blob Storage & AWS Cloud</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
