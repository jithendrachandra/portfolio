import { useEffect } from "react";
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
import SkillsItems from "../components/SkillsItems";

function Skills() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <article className="skills active" data-page="skills">
      <header>
        <h2 className="h2 article-title">Skills</h2>
      </header>

      {/* <section className="skill">
        <h3 className="h3 skills-title">Overview Skills</h3>

        <div
          style={{
            display: "grid",
            justifyContent: "end",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
            justifyItems: "center",
            padding: ".5rem 0rem",
          }}
        >
          <p className="skillsOverviewText"></p>
          <p className="skillsOverviewText">Basic</p>
          <p className="skillsOverviewText">Good</p>
          <p className="skillsOverviewText">Skilled</p>
          <p className="skillsOverviewText">Master</p>
        </div>
        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Frontend Development</h5>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "85%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Backend Development</h5>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "60%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">
                Core Subjects - OS, CN, DBMS, SDE, CyberSecurity
              </h5>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "40%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Problem Solving / DSA</h5>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "70%" }}
              ></div>
            </div>
          </li>
        </ul>
      </section> */}

      <SkillsItems
        title="Programming Languages"
        skillsData={programmingLangSkillsData}
      />
      <SkillsItems title="AI/ML" skillsData={aiMlSkillsData} />
      <SkillsItems title="Frameworks & Libraries" skillsData={frameworksLibrariesSkillsData} />
      <SkillsItems title="Cloud" skillsData={cloudSkillsData} />
      <SkillsItems title="Algorithms" skillsData={algorithmSkillsData} />
      <SkillsItems title="Databases" skillsData={databaseSkillsData} />
      <SkillsItems title="Dev Environments" skillsData={devEnvironmentsSkillsData} />
      <SkillsItems title="Visualization" skillsData={visualizationSkillsData} />
      <SkillsItems title="APIs" skillsData={apiSkillsData} />
    </article>
  );
}

export default Skills;
