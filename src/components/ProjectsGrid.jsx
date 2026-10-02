import { useState } from "react";
import { projects, categories } from "../data/projectsData";
import ProjectItem from "./ProjectItem";
import { Box } from "@mui/material";

const ProjectsGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "All" ||
      project.category === activeCategory
  );

  return (
    <section
      id="projects-grid"
      className="page-section"
      style={{
        padding: "2rem 0",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "800",
                color: "#f8fafc",
                margin: 0,
              }}
            >
              All Innovation Projects
            </h3>

            <p
              style={{
                color: "#94a3b8",
                fontSize: "0.9rem",
                margin: "0.2rem 0 0",
              }}
            >
              Explore healthcare AI, Agentic RAG, computer vision,
              and machine learning systems
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, rgba(56, 189, 248, 0.25), rgba(16, 185, 129, 0.25))"
                      : "rgba(30, 41, 59, 0.6)",
                    color: isActive ? "#38bdf8" : "#94a3b8",
                    border: isActive
                      ? "1px solid rgba(56, 189, 248, 0.4)"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    padding: "0.45rem 1rem",
                    borderRadius: "1rem",
                    fontSize: "0.8rem",
                    fontWeight: isActive ? "700" : "500",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
              lg: "1fr 1fr 1fr",
            },
            gap: "1.8rem",
          }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectItem
              key={project.id ?? index}
              index={index}
              project={project}
            />
          ))}
        </Box>
      </div>
    </section>
  );
};

export default ProjectsGrid;