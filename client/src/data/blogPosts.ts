export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: "patients" | "business" | "partners";
  excerpt: string;
  date: string;
  readTime: string;
  thumbnail?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How Small Businesses Save $50K with AI Agents",
    slug: "how-small-businesses-save-50k-with-ai-agents",
    category: "business",
    excerpt: "Discover how AI agents are transforming small business operations and delivering massive ROI through automation.",
    date: "2024-12-01",
    readTime: "8 min read",
    thumbnail: "/blog/thumbnails/ai-agents-business.jpg",
  },
  {
    id: "2",
    title: "AI Agent Revolution: 700 Jobs in One Platform",
    slug: "ai-agent-700-jobs",
    category: "business",
    excerpt: "Explore how modern AI agents can handle hundreds of different job functions, revolutionizing workforce automation.",
    date: "2024-11-28",
    readTime: "10 min read",
  },
  {
    id: "3",
    title: "AI Tools for Small Business: The Complete Guide",
    slug: "ai-tools-small-business",
    category: "business",
    excerpt: "A comprehensive guide to the best AI tools for small businesses, with practical implementation strategies.",
    date: "2024-11-25",
    readTime: "12 min read",
  },
  {
    id: "4",
    title: "Common AI Automation Mistakes (And How to Avoid Them)",
    slug: "ai-automation-mistakes",
    category: "business",
    excerpt: "Learn from the most common pitfalls in AI automation and how to ensure successful implementation.",
    date: "2024-11-20",
    readTime: "7 min read",
  },
  {
    id: "5",
    title: "AI for Restaurants: Complete Automation Guide",
    slug: "ai-for-restaurants",
    category: "business",
    excerpt: "How restaurants are using AI to streamline operations, reduce costs, and improve customer experience.",
    date: "2024-11-15",
    readTime: "9 min read",
  },
  {
    id: "6",
    title: "AI E-commerce Automation: Boost Sales by 30%",
    slug: "ai-ecommerce-automation",
    category: "business",
    excerpt: "Proven strategies for using AI to automate e-commerce operations and dramatically increase sales.",
    date: "2024-11-10",
    readTime: "11 min read",
  },
  {
    id: "7",
    title: "Humanoid Healthcare Robots: The Future is Here",
    slug: "humanoid-healthcare-robots",
    category: "partners",
    excerpt: "An in-depth look at how humanoid robots are transforming healthcare delivery and patient care.",
    date: "2024-11-05",
    readTime: "15 min read",
  },
  {
    id: "8",
    title: "AI Clinical Assistants: Revolutionizing Patient Care",
    slug: "ai-clinical-assistants",
    category: "patients",
    excerpt: "How AI-powered clinical assistants are improving diagnosis accuracy and patient outcomes.",
    date: "2024-11-01",
    readTime: "10 min read",
  },
  {
    id: "9",
    title: "AI & Alzheimer's: Digital Therapeutics Breakthrough",
    slug: "ai-alzheimers-digital-therapeutics",
    category: "patients",
    excerpt: "Exploring the latest AI-powered digital therapeutics for Alzheimer's disease management.",
    date: "2024-10-28",
    readTime: "12 min read",
  },
  {
    id: "10",
    title: "Curated Guide: AI Mental Health Apps",
    slug: "ai-mental-health-apps",
    category: "patients",
    excerpt: "A curated review of the best AI-powered mental health apps, evaluated with Andy's AAA framework.",
    date: "2024-10-25",
    readTime: "14 min read",
  },
  {
    id: "11",
    title: "Medical Robots: Comprehensive Review & Assessment",
    slug: "medical-robots",
    category: "partners",
    excerpt: "An evidence-based assessment of medical robots using Andy's AAA framework.",
    date: "2024-10-20",
    readTime: "16 min read",
  },
  {
    id: "12",
    title: "Second Medical Opinion Services: What You Need to Know",
    slug: "second-medical-opinion",
    category: "patients",
    excerpt: "A patient advocate's guide to getting second medical opinions and making informed decisions.",
    date: "2024-10-15",
    readTime: "8 min read",
  },
  {
    id: "13",
    title: "Wearable Health Tech: The Complete Guide",
    slug: "wearable-health-tech",
    category: "patients",
    excerpt: "Everything patients need to know about wearable health technology and its benefits.",
    date: "2024-10-10",
    readTime: "10 min read",
  },
  {
    id: "14",
    title: "Robotic Exoskeletons: Mobility Revolution",
    slug: "robotic-exoskeletons",
    category: "patients",
    excerpt: "How robotic exoskeletons are restoring mobility and independence to patients.",
    date: "2024-10-05",
    readTime: "13 min read",
  },
  {
    id: "15",
    title: "The 85% Cliff: Why Most AI Projects Fail",
    slug: "85-percent-cliff",
    category: "partners",
    excerpt: "Understanding why 85% of AI projects fail to reach production and how to avoid this fate.",
    date: "2024-10-01",
    readTime: "9 min read",
  },
  {
    id: "16",
    title: "The Deepfake Dilemma in Healthcare",
    slug: "deepfake-dilemma",
    category: "partners",
    excerpt: "Exploring the risks and ethical challenges of deepfake technology in healthcare settings.",
    date: "2024-09-25",
    readTime: "11 min read",
  },
  {
    id: "17",
    title: "Frontier Firms: Leading the AI Healthcare Revolution",
    slug: "frontier-firms",
    category: "partners",
    excerpt: "Profiling the companies at the forefront of AI-powered healthcare innovation.",
    date: "2024-09-20",
    readTime: "14 min read",
  },
  {
    id: "18",
    title: "New Governance: AIITL vs HITL",
    slug: "new-governance-aiitl-vs-hitl",
    category: "partners",
    excerpt: "Comparing AI-in-the-Loop and Human-in-the-Loop governance models for healthcare AI.",
    date: "2024-09-15",
    readTime: "12 min read",
  },
  {
    id: "19",
    title: "OpenAI's AI Companion: Healthcare Implications",
    slug: "openai-ai-companion",
    category: "partners",
    excerpt: "Analyzing OpenAI's AI companion technology and its potential impact on healthcare.",
    date: "2024-09-10",
    readTime: "8 min read",
  },
  {
    id: "20",
    title: "Pharma's Digital Revolution: AI Transformation",
    slug: "pharma-digital-revolution",
    category: "partners",
    excerpt: "How pharmaceutical companies are leveraging AI to accelerate drug discovery and development.",
    date: "2024-09-05",
    readTime: "15 min read",
  },
  {
    id: "21",
    title: "Robot Workforce Revolution in Healthcare",
    slug: "robot-workforce-revolution",
    category: "partners",
    excerpt: "The rise of robotic workers in healthcare and their impact on the industry.",
    date: "2024-09-01",
    readTime: "10 min read",
  },
  {
    id: "22",
    title: "The Trust Algorithm: Building Confidence in AI",
    slug: "trust-algorithm",
    category: "partners",
    excerpt: "How to build trust in AI systems through transparency, validation, and patient-centered design.",
    date: "2024-08-25",
    readTime: "9 min read",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === "all") return blogPosts;
  return blogPosts.filter((post) => post.category === category);
}
