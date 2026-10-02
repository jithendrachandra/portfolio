import {
  aiMlSkillsData,
  algorithmSkillsData,
  apiSkillsData,
  cloudSkillsData,
  databaseSkillsData,
  devEnvironmentsSkillsData,
  frameworksLibrariesSkillsData,
  programmingLangSkillsData,
  visualizationSkillsData,
} from "../data/skills";
import SkillsItems from "./SkillsItems";
import { Psychology } from "@mui/icons-material";

const SkillsSection = () => {
  return (
    <section id="skills" style={{ padding: "3rem 0", position: "relative", zIndex: 2 }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 1.5rem" }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span
            style={{
              background: "rgba(168, 85, 247, 0.15)",
              color: "#c084fc",
              border: "1px solid rgba(168, 85, 247, 0.3)",
              borderRadius: "1rem",
              padding: "0.35rem 1rem",
              fontSize: "0.8rem",
              fontWeight: "700",
              display: "inline-block",
              marginBottom: "0.6rem",
            }}
          >
            TECHNICAL CAPABILITIES
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.6rem)", fontWeight: "800", color: "#f8fafc", margin: 0 }}>
            Skills Matrix & Technology Stack
          </h2>
        </div>

        <div
          style={{
            background: "rgba(15, 23, 42, 0.75)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(56, 189, 248, 0.25)",
            borderRadius: "2rem",
            padding: "2rem",
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5)",
          }}
        >
          <SkillsItems title="Programming Languages" skillsData={programmingLangSkillsData} />
          <SkillsItems title="AI/ML & Vision AI" skillsData={aiMlSkillsData} />
          <SkillsItems title="Frameworks & Libraries" skillsData={frameworksLibrariesSkillsData} />
          <SkillsItems title="Cloud (Azure & AWS)" skillsData={cloudSkillsData} />
          <SkillsItems title="Algorithms & Neural Architectures" skillsData={algorithmSkillsData} />
          <SkillsItems title="Databases & Storage" skillsData={databaseSkillsData} />
          <SkillsItems title="Dev Environments & Enterprise APIs" skillsData={devEnvironmentsSkillsData} />
          <SkillsItems title="Visualization & Analytics" skillsData={visualizationSkillsData} />
          <SkillsItems title="REST APIs & Security" skillsData={apiSkillsData} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
