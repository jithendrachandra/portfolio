import { useState } from "react";
import {
  Box,
  Divider,
  Typography,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CrsDeltaVisualizer from "./CrsDeltaVisualizer";
import MrbScannerVisualizer from "./MrbScannerVisualizer";

function ProjectItem({ index, project }) {
  const [openReadMoreDialog, setOpenReadMoreDialog] = useState(false);

  const settings = {
    dots: true,
    infinite: project.images.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    pauseOnHover: true,
  };

  const handleReadMoreDialogOpen = () => {
    setOpenReadMoreDialog(true);
  };

  const handleReadMoreDialogClose = () => {
    setOpenReadMoreDialog(false);
  };

  const isMrb = project.title.includes("MRB");
  const isCrs = project.title.includes("CRS");

  return (
    <>
      <div
        key={index}
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "rgba(18, 24, 38, 0.75)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "1rem",
          padding: "1.2rem",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div>
          {/* Company / Suite badge */}
          {project.company && (
            <div style={{ marginBottom: "0.8rem", display: "flex", gap: "0.5rem" }}>
              <span
                style={{
                  background: "rgba(56, 189, 248, 0.1)",
                  color: "#38bdf8",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "0.4rem",
                  fontSize: "0.72rem",
                  fontWeight: "600",
                }}
              >
                {project.company}
              </span>
            </div>
          )}

          {/* Image */}
          <figure
            onClick={handleReadMoreDialogOpen}
            style={{
              borderRadius: "0.8rem",
              overflow: "hidden",
              cursor: "pointer",
              marginBottom: "1rem",
            }}
          >
            <img
              src={project.images[0]}
              alt={project.alt}
              loading="lazy"
              style={{
                width: "100%",
                height: "190px",
                objectFit: "cover",
                borderRadius: "0.8rem",
              }}
            />
          </figure>

          <h3
            style={{
              fontSize: "1.15rem",
              fontWeight: "700",
              color: "#f8fafc",
              marginBottom: "0.5rem",
              lineHeight: "1.3",
            }}
          >
            {project.title}
          </h3>

          {/* Tags */}
          {project.tags && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "0.8rem" }}>
              {project.tags.slice(0, 4).map((tag, i) => (
                <span
                  key={i}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "#cbd5e1",
                    padding: "0.15rem 0.45rem",
                    borderRadius: "0.3rem",
                    fontSize: "0.68rem",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p
            style={{
              fontSize: "0.85rem",
              color: "#94a3b8",
              lineHeight: "1.5",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.desc.replace(/[*#]/g, "")}
          </p>
        </div>

        {/* Footer Actions */}
        <div
          style={{
            marginTop: "1rem",
            paddingTop: "0.8rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button
            onClick={handleReadMoreDialogOpen}
            style={{
              background: "rgba(56, 189, 248, 0.12)",
              color: "#38bdf8",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              padding: "0.4rem 0.9rem",
              borderRadius: "0.5rem",
              fontSize: "0.78rem",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            View Specs
          </button>

          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              <IconButton style={{ color: "#cbd5e1" }}>
                <GitHubIcon />
              </IconButton>
            </a>
          )}
        </div>
      </div>

      {/* Modal Dialog */}
      <Dialog
        open={openReadMoreDialog}
        onClose={handleReadMoreDialogClose}
        fullWidth
        maxWidth="md"
        PaperProps={{
          style: {
            borderRadius: "1.2rem",
            background: "#0f172a",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            color: "#f8fafc",
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1.2rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "700", color: "#f8fafc" }}>
            {project.title}
          </Typography>

          <IconButton onClick={handleReadMoreDialogClose} sx={{ color: "#94a3b8" }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ padding: "1.5rem" }}>
          <Slider {...settings}>
            {project.images.map((image, idx) => (
              <div key={idx} style={{ textAlign: "center" }}>
                <img
                  src={image}
                  alt={`Project ${idx + 1}`}
                  style={{
                    borderRadius: "0.8rem",
                    maxWidth: "100%",
                    maxHeight: "300px",
                    margin: "0 auto",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </Slider>

          {isMrb && <MrbScannerVisualizer />}
          {isCrs && <CrsDeltaVisualizer />}

          <Box sx={{ whiteSpace: "pre-wrap", marginTop: "1.5rem" }}>
            <Typography variant="body1" sx={{ color: "#cbd5e1", lineHeight: "1.7" }}>
              {project.desc}
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ProjectItem;
