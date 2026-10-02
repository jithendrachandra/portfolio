import { images } from "../Images";

export const categories = [
  "All",
  "Enterprise EPC AI",
  "AI/ML Applications",
  "Healthcare",
  "Gesture & Vision",
  "Finance & Fraud Detection",
  "Recommendation Systems",
];

export const projects = [
  {
    title: "MRB - Manufacturing Record Book Vision AI",
    category: "Enterprise EPC AI",
    company: "Evomaton",
    suite: "VendorPrint 1 AI Suite (Module 1)",
    featured: true,
    tags: ["Vision AI", "Document Intelligence", "FastAPI", "Python", "TypeScript", "Azure SQL", "Azure Databricks", "Azure Blob", "Oracle Aconex"],
    metrics: [
      { label: "Dossier Volume", value: "10K - 30K Pages" },
      { label: "Payload Capacity", value: "2,000 MB+ (2 GB)" },
      { label: "Revision Sync", value: "Oracle Aconex Live" },
      { label: "Inspection Accuracy", value: "99.4%" }
    ],
    images: [
      images.mrb3d,
      images.vendorprint3d
    ],
    download: null,
    live: null,
    repo: null,
    video: null,
    alt: "MRB - Manufacturing Record Book Vision AI Document Intelligence",
    desc: `Architected and engineered the end-to-end backend and data pipelines for the Manufacturing Record Book (MRB) Vision AI system at Evomaton in the EPC (Engineering, Procurement, Construction) domain.

The platform automates the ingestion, structural validation, and compliance verification of massive engineering dossiers containing 10,000 to 30,000+ pages and exceeding 2 GB per file.

**Core Capabilities & Architectural Innovations**:
- **Vision AI Document Intelligence**: Automatically parses multi-thousand-page dossiers against the project's dynamic MRB Index, evaluating page legibility, OCR quality, contrast, and resolution.
- **Automated Geometry & Sanity Checks**: Detects and auto-corrects page orientation (0°, 90°, 180°, 270°), flags missing required vendor sheets, and isolates unexpected extra or duplicate pages.
- **Oracle Aconex Integration**: Real-time bidirectional API calls to verify document revision statuses, compare revision calls, and synchronize engineering code statuses (Code 1 Approved, Code 2 Approved with Comments, Code 3 Rejected).
- **Enterprise Cloud Stack**: Scalable asynchronous REST APIs built with Python and FastAPI, resilient relational schema in Azure SQL, multi-gigabyte document pipeline on Azure Blob Storage, and distributed OCR processing on Azure Databricks.
- **Unified Ecosystem**: Integrated as Module 1 within the flagship VendorPrint 1 AI enterprise suite (10 AI-driven modules).`
  },

  {
    title: "CRS - Automated Comment Resolution & Visual PDF Delta",
    category: "Enterprise EPC AI",
    company: "Evomaton",
    suite: "VendorPrint 1 AI Suite (Module 2)",
    featured: true,
    tags: ["Visual Delta Engine", "PDF Intelligence", "FastAPI", "Python", "TypeScript", "Azure SQL", "Computer Vision", "VendorPrint AI"],
    metrics: [
      { label: "Visual Highlighting", value: "Tri-Color Delta" },
      { label: "Markup Coverage", value: "Clouds, Stamps, Callouts" },
      { label: "Turnaround Cut", value: "85% Faster Reviews" },
      { label: "Backend Integration", value: "VendorPrint 1 AI" }
    ],
    images: [
      images.crs3d,
      images.vendorprint3d
    ],
    download: null,
    live: null,
    repo: null,
    video: null,
    alt: "CRS - Comment Resolution Sheet with Visual PDF Delta Highlighting",
    desc: `Designed and implemented the Comment Resolution Sheet (CRS) automated review and visual modification engine at Evomaton for engineering workflows.

Engineering review teams mark up vendor blueprint PDFs with extensive annotations, revision clouds, callouts, drop-down menus, cross-outs, and discipline-specific symbols. CRS automates the parsing, reconciliation, and delivery of updated vendor documents.

**Key Technical Highlights**:
- **Visual PDF Delta Highlighting Engine**: Directly renders color-coded change highlights onto high-resolution engineering drawings:
  - 🟢 **Green Highlighting**: Deleted or superseded piping, tags, and geometry.
  - 🔴 **Red Highlighting**: Added vendor modifications, newly inserted client requirements, and updated notes.
  - 🟠 **Amber / Orange Highlighting**: Modified callouts, repositioned symbols, and updated attribute values.
- **Spatial Markup Extraction**: Uses computer vision and vector PDF geometry extraction to bind reviewer comments to precise physical coordinates on complex schematics.
- **Full Backend Architecture**: Engineered the complete relational SQL schema, document state-machine, and async FastAPI backend within the 10-module VendorPrint 1 AI platform.`
  },

  {
    title: "MiraAI - Agentic RAG for Psychiatry",
    category: "Healthcare",
    tags: ["Agentic AI", "LangGraph", "Llama 3", "Pinecone", "FastAPI", "AWS"],
    images: [
      images.mira3d,
      images.llm1,
      images.llm2,
      images.llm3
    ],
    download: null,
    live: null,
    repo: null,
    video: null,
    alt: "Agentic RAG pipeline for clinical psychiatry",
    desc: `Architected production RAG pipeline processing 4,200+ clinical cases using Llama 3 (8B), Pinecone vector DB, and domain embeddings; achieved 82% response reliability via chunk optimization (350–900 tokens) and 17% context routing gains through CI/CD automation.

**Key Highlights**:
- 5-stage LangGraph agent flows with transition constraints and prompt engineering, cutting unsafe generations by 21%
- Deployed via Docker/FastAPI on AWS with MLflow tracking and zero-downtime canary rollouts
- Distributed system with multi-model orchestration, request queueing, Redis caching achieving 99.2% availability`
  },

  {
    title: "SiaAI - Real-time Clinical NoteTaker",
    category: "Healthcare",
    tags: ["Speech AI", "Diarization", "SOAP Notes", "FastAPI", "Docker", "W&B"],
    images: [
      images.sia3d,
      images.dryEye1,
      images.dryEye2,
      images.dryEye3
    ],
    download: null,
    live: null,
    repo: null,
    video: null,
    alt: "AI-powered clinical documentation system",
    desc: `Built end-to-end AI note-taker with real-time STT, diarization, and agentic RAG over 10k+ psychology texts; automated SOAP notes slashing documentation time 80% via hybrid LLM reasoning and async processing queues.

**Key Highlights**:
- Integrated Llama 3 + BAAI/bge-large-en-v1.5 with Pinecone retrieval achieving 90% factual alignment
- Implemented A/B testing framework (W&B) for model performance tracking and safe rollouts
- Containerized with Docker, exposed REST APIs via FastAPI with rate limiting; stress-tested under 200ms latency`
  },

  {
    title: "NeuraAI - Real-time AI Physiotherapist",
    category: "Healthcare",
    images: [
      images.ges,
      images.ges2,
      images.ges3,
      images.ges4
    ],
    download: null,
    live: null,
    repo: null,
    video: null,
    alt: "AI-powered pose estimation physiotherapist",
    desc: `Developed horizontally-scalable pose engine with MediaPipe Holistic (540+ landmarks), custom XGBoost classifiers (5k frames), hitting 90% consistency across 11 movements with MLflow model versioning.

**Key Highlights**:
- Optimized inference to <140ms latency using ONNX/NumPy and batch processing
- Implemented Redis caching and edge deployment strategies with 92% motion correction in clinical trials
- Deployed multi-user cluster on AWS EC2 with PostgreSQL sharding and ALB load balancing`
  },

  {
    title: "AI-based Customer Query Assistant",
    category: "AI/ML Applications",
    images: [
      images.gemini1,
      images.gemini2,
      images.gemini3,
      images.gemini4
    ],
    download: null,
    live: null,
    repo: "https://github.com/jithendrachandra/Ai-base-customer-query-assistant",
    video: null,
    alt: "AI-based customer query automation",
    desc: `A scalable end-to-end system for automating customer support using Large Language Models (LLMs). This assistant leverages advanced natural language understanding for real-time query resolution, reducing manual workload and improving customer experience.`
  },

  {
    title: "LLM Fine-tuning for Domain Adoption",
    category: "AI/ML Applications",
    images: [
      images.llm1,
      images.llm2,
      images.llm3,
      images.llm4
    ],
    download: null,
    live: null,
    repo: "https://github.com/jithendrachandra/llm-finetuning-for-domain-adoption",
    video: null,
    alt: "LLM domain fine-tuning project",
    desc: `Comprehensive pipeline for fine-tuning large-scale language models on domain-specific corpora to boost accuracy and context coverage in specialized verticals.`
  },

  {
    title: "Dry Eye Disease Detection & Classification",
    category: "Healthcare",
    images: [
      images.dryEye1,
      images.dryEye2,
      images.dryEye3,
      images.dryEye4
    ],
    download: null,
    live: null,
    repo: "https://github.com/jithendrachandra/dry-eye-disease",
    video: null,
    alt: "Dry eye detection using deep learning",
    desc: `ML-powered solution for early detection and classification of dry eye disease using patient data and clinical features.`
  },

  {
    title: "Gesture Recognition System",
    category: "Gesture & Vision",
    images: [
      images.ges,
      images.ges2,
      images.ges3,
      images.ges4
    ],
    download: null,
    live: null,
    repo: "https://github.com/jithendrachandra/gestures-recognition",
    video: null,
    alt: "Vision-based gesture recognition",
    desc: `A computer vision system for real-time hand gesture recognition, designed for HCI and automation interfaces.`
  },

  {
    title: "Personalized Recommender System",
    category: "Recommendation Systems",
    images: [
      images.recommender10,
      images.recommender11,
      images.recommender12
    ],
    download: null,
    live: null,
    repo: "https://github.com/jithendrachandra/recommender-system",
    video: null,
    alt: "ML-based personalization system",
    desc: `A modular recommender system powered by collaborative filtering and content analysis.`
  },

  {
    title: "Financial Fraud Detection",
    category: "Finance & Fraud Detection",
    images: [
      images.fraud2,
      images.fraud,
      images.fraud1,
      images.fraud3,
      images.fraud4
    ],
    download: null,
    live: null,
    repo: "https://github.com/jithendrachandra/financial-fraud-detection",
    video: null,
    alt: "Finance fraud detection ML module",
    desc: `A robust pipeline for detecting fraudulent transactions in financial datasets using state-of-the-art ML techniques.`
  }
];