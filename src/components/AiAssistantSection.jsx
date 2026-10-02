import Chatbot from "./Chatbot";
import { SmartToy, AutoAwesome } from "@mui/icons-material";

const AiAssistantSection = () => {
  return (
    <section id="ai-assistant" style={{ padding: "3rem 0", position: "relative", zIndex: 2 }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <span
            style={{
              background: "rgba(56, 189, 248, 0.15)",
              color: "#38bdf8",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              borderRadius: "1rem",
              padding: "0.35rem 1rem",
              fontSize: "0.8rem",
              fontWeight: "700",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              marginBottom: "0.6rem",
            }}
          >
            <AutoAwesome style={{ fontSize: "1rem" }} /> INTERACTIVE AI AGENT
          </span>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: "800", color: "#f8fafc", margin: 0 }}>
            Ask Jithendra&apos;s AI Assistant
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "0.95rem", marginTop: "0.4rem" }}>
            Inquire about his Evomaton engineering projects, MRB Vision AI (30k pages/2GB), CRS visual deltas, skills, or career achievements.
          </p>
        </div>

        <div
          style={{
            background: "rgba(15, 23, 42, 0.85)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(56, 189, 248, 0.3)",
            borderRadius: "2rem",
            padding: "1.5rem",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
          }}
        >
          <Chatbot />
        </div>
      </div>
    </section>
  );
};

export default AiAssistantSection;
