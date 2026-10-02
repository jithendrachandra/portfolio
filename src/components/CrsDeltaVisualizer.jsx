import { useState } from "react";
import { CheckCircle, DeleteSweep, AddCircle, Edit, Layers } from "@mui/icons-material";

const CrsDeltaVisualizer = () => {
  const [filter, setFilter] = useState("ALL"); // ALL, DELETED, ADDED, MODIFIED

  const deltas = [
    {
      id: "TAG-4081",
      type: "DELETED",
      color: "#10b981", // Green
      label: "Bypassed Recirculation Loop P-10B",
      comment: "Outdated piping assembly removed per Rev B engineering request",
      code: "DEL-GREEN",
    },
    {
      id: "TAG-9920",
      type: "ADDED",
      color: "#ef4444", // Red
      label: "High-Pressure Relief Valve V-402",
      comment: "New safety compliance valve added for EPC spec 4.1",
      code: "ADD-RED",
    },
    {
      id: "TAG-3105",
      type: "MODIFIED",
      color: "#f59e0b", // Amber
      label: "Suction Nozzle Orientation N-01",
      comment: "Orientation rotated 45° CW and tag updated to REV C status",
      code: "MOD-AMBER",
    },
  ];

  const filtered = filter === "ALL" ? deltas : deltas.filter((d) => d.type === filter);

  return (
    <div
      style={{
        background: "rgba(15, 23, 42, 0.85)",
        border: "1px solid rgba(51, 65, 85, 0.8)",
        borderRadius: "1rem",
        padding: "1.2rem",
        marginTop: "1.5rem",
        backdropFilter: "blur(12px)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
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
          <Layers style={{ color: "#38bdf8", fontSize: "1.5rem" }} />
          <h4 style={{ color: "#f8fafc", fontSize: "1.1rem", fontWeight: "600", margin: 0 }}>
            Interactive Visual PDF Delta Engine Demo
          </h4>
        </div>
        <span
          style={{
            background: "rgba(56, 189, 248, 0.15)",
            color: "#38bdf8",
            padding: "0.3rem 0.8rem",
            borderRadius: "1rem",
            fontSize: "0.75rem",
            fontWeight: "600",
            border: "1px solid rgba(56, 189, 248, 0.3)",
          }}
        >
          VendorPrint 1 AI • Module 2
        </span>
      </div>

      {/* Filter Buttons */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
        <button
          onClick={() => setFilter("ALL")}
          style={{
            padding: "0.4rem 0.9rem",
            borderRadius: "0.5rem",
            fontSize: "0.8rem",
            fontWeight: "600",
            background: filter === "ALL" ? "rgba(56, 189, 248, 0.25)" : "rgba(30, 41, 59, 0.7)",
            color: filter === "ALL" ? "#38bdf8" : "#94a3b8",
            border: filter === "ALL" ? "1px solid #38bdf8" : "1px solid #334155",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          All Layers ({deltas.length})
        </button>
        <button
          onClick={() => setFilter("DELETED")}
          style={{
            padding: "0.4rem 0.9rem",
            borderRadius: "0.5rem",
            fontSize: "0.8rem",
            fontWeight: "600",
            background: filter === "DELETED" ? "rgba(16, 185, 129, 0.25)" : "rgba(30, 41, 59, 0.7)",
            color: filter === "DELETED" ? "#34d399" : "#94a3b8",
            border: filter === "DELETED" ? "1px solid #10b981" : "1px solid #334155",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          🟢 Deleted (Green)
        </button>
        <button
          onClick={() => setFilter("ADDED")}
          style={{
            padding: "0.4rem 0.9rem",
            borderRadius: "0.5rem",
            fontSize: "0.8rem",
            fontWeight: "600",
            background: filter === "ADDED" ? "rgba(239, 68, 68, 0.25)" : "rgba(30, 41, 59, 0.7)",
            color: filter === "ADDED" ? "#f87171" : "#94a3b8",
            border: filter === "ADDED" ? "1px solid #ef4444" : "1px solid #334155",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          🔴 Added (Red)
        </button>
        <button
          onClick={() => setFilter("MODIFIED")}
          style={{
            padding: "0.4rem 0.9rem",
            borderRadius: "0.5rem",
            fontSize: "0.8rem",
            fontWeight: "600",
            background: filter === "MODIFIED" ? "rgba(245, 158, 11, 0.25)" : "rgba(30, 41, 59, 0.7)",
            color: filter === "MODIFIED" ? "#fbbf24" : "#94a3b8",
            border: filter === "MODIFIED" ? "1px solid #f59e0b" : "1px solid #334155",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          🟠 Modified (Amber)
        </button>
      </div>

      {/* Drawing Canvas Simulation */}
      <div
        style={{
          position: "relative",
          height: "180px",
          background: "#090d16",
          borderRadius: "0.6rem",
          border: "1px dashed rgba(56, 189, 248, 0.3)",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage:
            "linear-gradient(rgba(56, 189, 248, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.05) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          marginBottom: "1rem",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "10px",
            left: "12px",
            color: "#64748b",
            fontSize: "0.7rem",
            fontFamily: "monospace",
          }}
        >
          SCHEMATIC_REV_C_BLUEPRINT.PDF [RENDER_CANVAS]
        </span>

        {/* Delta Mock Nodes */}
        {filtered.map((item, idx) => (
          <div
            key={item.id}
            style={{
              position: "absolute",
              top: `${25 + idx * 28}%`,
              left: `${15 + idx * 26}%`,
              padding: "0.4rem 0.8rem",
              borderRadius: "0.4rem",
              background: `rgba(0, 0, 0, 0.75)`,
              border: `2px solid ${item.color}`,
              boxShadow: `0 0 15px ${item.color}88`,
              color: "#ffffff",
              fontSize: "0.75rem",
              fontFamily: "monospace",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              animation: "pulse 2s infinite ease-in-out",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: item.color,
                boxShadow: `0 0 8px ${item.color}`,
              }}
            />
            {item.id}: {item.label}
          </div>
        ))}
      </div>

      {/* Active Delta Items List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {filtered.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              background: "rgba(30, 41, 59, 0.5)",
              borderLeft: `4px solid ${item.color}`,
              borderRadius: "0.4rem",
              padding: "0.6rem 0.8rem",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span
                  style={{
                    color: item.color,
                    fontWeight: "bold",
                    fontSize: "0.75rem",
                    fontFamily: "monospace",
                  }}
                >
                  [{item.type}]
                </span>
                <span style={{ color: "#e2e8f0", fontWeight: "600", fontSize: "0.85rem" }}>
                  {item.label}
                </span>
              </div>
              <p style={{ color: "#94a3b8", fontSize: "0.78rem", margin: "0.2rem 0 0 0" }}>
                {item.comment}
              </p>
            </div>
            <span
              style={{
                fontSize: "0.7rem",
                color: item.color,
                background: `${item.color}15`,
                padding: "0.2rem 0.5rem",
                borderRadius: "0.3rem",
                border: `1px solid ${item.color}40`,
                fontFamily: "monospace",
              }}
            >
              {item.code}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrsDeltaVisualizer;
