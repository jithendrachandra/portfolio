import { images } from "../Images";
import MrbScannerVisualizer from "./MrbScannerVisualizer";
import CrsDeltaVisualizer from "./CrsDeltaVisualizer";

const EnterpriseProjectShowcase = () => {
  return (
    <section
  id="projects"
  style={{
    padding: "3rem 0",
    position: "relative",
    zIndex: 2,
  }}
>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: "3rem" }}>
          <span
            style={{
              color: "#38bdf8",
              fontSize: "0.8rem",
              fontWeight: "700",
              letterSpacing: "1px",
              display: "block",
              marginBottom: "0.4rem",
              textTransform: "uppercase",
            }}
          >
            Featured Enterprise Innovations
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.6rem)", fontWeight: "800", color: "#f8fafc", margin: 0 }}>
            VendorPrint 1 AI Ecosystem
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "1rem", marginTop: "0.5rem", maxWidth: "700px" }}>
            Architected and engineered the full backend, SQL database schemas, vision pipelines, and visual PDF delta rendering for industrial EPC document intelligence.
          </p>
        </div>

        {/* PROJECT 1: MRB */}
        <div
          style={{
            background: "rgba(18, 24, 38, 0.75)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "1.5rem",
            padding: "2.2rem",
            marginBottom: "2.5rem",
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "0.8rem",
              marginBottom: "1.5rem",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              paddingBottom: "1rem",
            }}
          >
            <div>
              <span style={{ color: "#38bdf8", fontSize: "0.82rem", fontWeight: "700", marginRight: "1rem" }}>
                Evomaton
              </span>
              <span style={{ color: "#34d399", fontSize: "0.82rem", fontWeight: "600" }}>
                VendorPrint 1 AI Suite (Module 1)
              </span>
            </div>
            <span style={{ color: "#94a3b8", fontSize: "0.8rem" }}>
              Full Stack AI Engineer & SQL Backend Architect
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", alignItems: "start" }}>
            {/* Image */}
            <div>
              <div style={{ borderRadius: "1rem", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <img
                  src={images.mrb3d}
                  alt="MRB Manufacturing Record Book Vision AI Render"
                  style={{ width: "100%", height: "280px", objectFit: "cover", display: "block" }}
                />
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1rem" }}>
                {["Vision AI", "Document Intelligence", "Python & FastAPI", "TypeScript", "Azure SQL", "Azure Databricks", "Oracle Aconex"].map((t, i) => (
                  <span key={i} style={{ background: "rgba(30, 41, 59, 0.7)", color: "#cbd5e1", borderRadius: "0.4rem", padding: "0.2rem 0.6rem", fontSize: "0.72rem" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Specs & Visualizer */}
            <div>
              <h3 style={{ color: "#f8fafc", fontSize: "1.3rem", fontWeight: "700", margin: "0 0 0.6rem 0" }}>
                MRB - Manufacturing Record Book Vision AI
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: "1.6", margin: 0 }}>
                Automates compliance inspection across massive <strong>10,000 to 30,000+ page dossiers</strong> and <strong>2 GB+ payloads</strong>. Evaluates page legibility, OCR quality, page orientation (0°, 90°, 180°, 270°), missing documents, and live Oracle Aconex revision synchronization.
              </p>

              <MrbScannerVisualizer />
            </div>
          </div>
        </div>

        {/* PROJECT 2: CRS */}
        <div
          style={{
            background: "rgba(18, 24, 38, 0.75)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "1.5rem",
            padding: "2.2rem",
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "0.8rem",
              marginBottom: "1.5rem",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              paddingBottom: "1rem",
            }}
          >
            <div>
              <span style={{ color: "#38bdf8", fontSize: "0.82rem", fontWeight: "700", marginRight: "1rem" }}>
                Evomaton
              </span>
              <span style={{ color: "#34d399", fontSize: "0.82rem", fontWeight: "600" }}>
                VendorPrint 1 AI Suite (Module 2)
              </span>
            </div>
            <span style={{ color: "#94a3b8", fontSize: "0.8rem" }}>
              Visual Delta Engine Developer
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", alignItems: "start" }}>
            {/* Image */}
            <div>
              <div style={{ borderRadius: "1rem", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <img
                  src={images.crs3d}
                  alt="CRS Comment Resolution Sheet 3D PDF Delta Render"
                  style={{ width: "100%", height: "280px", objectFit: "cover", display: "block" }}
                />
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1rem" }}>
                {["Visual PDF Delta Engine", "PDF Markup Parsing", "Python & FastAPI", "TypeScript", "Azure SQL", "Computer Vision"].map((t, i) => (
                  <span key={i} style={{ background: "rgba(30, 41, 59, 0.7)", color: "#cbd5e1", borderRadius: "0.4rem", padding: "0.2rem 0.6rem", fontSize: "0.72rem" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Specs & Visualizer */}
            <div>
              <h3 style={{ color: "#f8fafc", fontSize: "1.3rem", fontWeight: "700", margin: "0 0 0.6rem 0" }}>
                CRS - Automated Comment Resolution & Visual PDF Delta
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: "1.6", margin: 0 }}>
                Parses reviewer markup annotations (revision clouds, callouts, drop-down attributes, cross-outs, stamps) and directly renders color-coded PDF delta overlays: 🟢 Green (Deleted), 🔴 Red (Added), and 🟠 Amber (Modified).
              </p>

              <CrsDeltaVisualizer />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EnterpriseProjectShowcase;
