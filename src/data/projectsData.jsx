import { images } from "../Images"; // Make sure to add project-specific image keys as needed

export const categories = [
  "All",
  "AI/ML Applications",
  "Finance & Fraud Detection",
  "Gesture & Vision",
  "Healthcare",
  "Recommendation Systems",
];

// All sample images below point to `images.projectX` (update with your own keys and images)
export const projects = [
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
    desc: `A scalable end-to-end system for automating customer support using Large Language Models (LLMs). This assistant leverages advanced natural language understanding for real-time query resolution, reducing manual workload and improving customer experience.

**Features**:
- Integrated LLM backbone (OpenAI, Cohere, custom) for semantic understanding
- Multi-intent handling, context memory & conversation threading
- Streamlined API deployment with FastAPI
- Modular architecture for easy cloud deployment and extensibility
    `
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
    desc: `Comprehensive pipeline for fine-tuning large-scale language models on domain-specific corpora to boost accuracy and context coverage in specialized verticals (e.g., finance, healthcare, legal).

**Highlights**:
- Data collection & automated cleaning pipeline
- Supports HuggingFace, OpenAI, and Bedrock LLM interfaces
- Prompt engineering and evaluation suite included
- Detailed instructions for dataset structuring and experiment tracking
    `
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
    desc: `ML-powered solution for early detection and classification of dry eye disease using patient data and clinical features. Designed to assist practitioners with fast, accurate diagnosis.

**Key Capabilities**:
- Feature extraction from medical records and test results
- Ensemble models for robust performance (XGBoost, SVM, Random Forest)
- Visualization tools for feature importance and clinical interpretation
    `
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
    desc: `A computer vision system for real-time hand gesture recognition, designed for HCI and automation interfaces.

**Technical Stack**:
- OpenCV for image acquisition and pre-processing
- Custom CNN model for gesture classification
- Live video streaming and feedback module
    `
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
    desc: `A modular recommender system powered by collaborative filtering and content analysis. Tailored for e-commerce or content platforms.

**Details**:
- Hybrid model architecture (Matrix factorization + ML ranking)
- Real-time recommendations & user profiling
- Configurable for movies, products, or news
    `
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
    desc: `A robust pipeline for detecting fraudulent transactions in financial datasets using state-of-the-art ML techniques.

**Technology**:
- Data preprocessing for high-cardinality categorical variables
- Anomaly detection and supervised classification
- Performance metrics dashboard and reporting
    `
  }
];