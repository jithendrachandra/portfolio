import { useEffect, useState } from "react";
import TimeLine from "../components/TimeLine";
import { educationData } from "../data/education";
import { experienceData } from "../data/experience";
import ServiceItems from "../components/ServiceItems";
import { servicesData } from "../data/serviceItems";
import { Button } from "@mui/material";

function About() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hello! I’m an AI/ML Engineer specializing in intelligent algorithms, agentic AI, and end-to-end deep learning solutions for technology’s next frontier. I architect, optimize, and deploy complex machine learning systems using state-of-the-art frameworks (TensorFlow, PyTorch, LangChain) and cloud platforms—delivering impactful results for global clients. Driven by curiosity and innovation, I’m dedicated to advancing artificial intelligence and creating lasting value through transformative solutions.";

  useEffect(() => {
    window.scrollTo(0, 0);
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>{displayText}<span className="cursor">|</span></p>
      </section>

      <a
        href="https://drive.google.com/file/d/1hFov4x9_42L5mvEpZytSN1ny5GFBLSxa/view?usp=sharing"
        target="_blank"
      >
        <Button
          variant="outlined"
          size="large"
          sx={{
            color: "white",
            width: {
              xs: "100%",
              md: "15rem",
            },
            margin: "0 0 2rem 0",
            fontWeight: "bold",
            textTransform: "capitalize",
            borderRadius: "1rem",
            cursor: "pointer",
            border: "1px solid #FFDB70",
          }}
        >
          View Resume
        </Button>
      </a>

      {/* service */}
      <section className="service">
        <h3 className="h3 service-title">What i&apos;m doing</h3>

        <ul className="service-list">
          <ServiceItems servicesData={servicesData} />
        </ul>
      </section>

      {/* Education */}
      <TimeLine title="Education" data={educationData} />

      {/* Experience */}
      <TimeLine title="Experience" data={experienceData} />
    </article>
  );
}

export default About;
