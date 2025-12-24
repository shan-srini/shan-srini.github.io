import shanImage from "./assets/shan.jpg";
import draftkings from "./assets/draftkings.png";
import ruumzy from "./assets/ruumzy.png";
import notarize from "./assets/notarize.png";
import veracode from "./assets/veracode.png";
import staples from "./assets/staples.png";
import northeastern from "./assets/northeastern.png";
import upenn from "./assets/upenn.png";
import ruumzyPreview from "./assets/ruumzyPreview.png";

export interface Track {
    id: string;
    title: string;
    duration: string;
    description: string;
    details: string[];
    content?: string; // Markdown content
    link?: string;
    images?: string[];
}

export interface RecordData {
    id: string;
    title: string;
    artist: string;
    description: string;
    coverImages: string[];
    color: string;
    tracks: Track[];
}

export const PORTFOLIO_DATA: RecordData[] = [
    {
        id: "me",
        title: "Shan Srinivasan",
        artist: "Shanmukha Srinivasan",
        description: `Welcome to my website!

I am a software engineer who **loves** building and learning.

- Choose a record and check out the tracklist to learn more about me!`,
        coverImages: [shanImage],
        color: "#a855f7",
        tracks: [
            {
                id: "about-1",
                title: "Introduction",
                duration: "0:45",
                description: "Full-stack developer with a passion for robust backend systems.",
                details: ["Boston Based", "Loves to Travel", "Loves to Read", "Most likely to find me at a concert", "Extremely good at being mediocre at guitar"],
                link: "https://linkedin.com/in/srinishan",
                content: `# Hello, I'm Shanmukha (Shan for short)!
        
I'm a software engineer currently working at **DraftKings** and pursuing a Master's in Data Science at **UPenn**.

I love to move quick, build fast, and ship fast! 

- **Focus**: I specialize in backend development, high-throughput systems (Kafka), and AI-powered tools.
- **Interests**: Traveling, playing guitar, reading, and concerts.
- **Education**: B.S. in Computer Science & Cognitive Psychology from Northeastern (GPA: 3.96).`
            },
            {
                id: "about-2",
                title: "Technical Skills",
                duration: "1:20",
                description: "A comprehensive look at my technical toolkit.",
                details: ["Languages: C#, Java, Python, JS, Ruby", "Tools: Kafka, AWS, GCP, Docker, K8s", "Frameworks: React, Asp.Net, Flask, Spring Boot"],
                link: "https://github.com/shan-srini",
                content: `### Technical Toolbelt

**Languages**
- C#, Java, Python, Javascript, Ruby, SQL, HTML, CSS

**Frameworks & Frameworks**
- React, Asp.Net, Kafka, Flask, Java Spring Boot, Ruby on Rails, GraphQL, Angular, Socket.io

**Infrastructure & Tools**
- Git, AWS, GCP, Docker, Kubernetes, MySQL, MongoDB, PostgreSQL, CockroachDB, Redis, Bash, Vim`
            }
        ]
    },
    {
        id: "work",
        title: "Work Experience",
        artist: "Career History",
        description: `I've had highly productive experiences with focused roles in:
- Backend Engineering (Kafka/C#/Python/Ruby/Java)
- Full-stack development (React/Asp.Net/Flask/Spring Boot)
- AI Development (MCP, LangGraph, Mongo Atlas Vector DB)
- Performance Testing (SUT K8S E2E Test Environments, Gatling, K6)`,
        coverImages: [
            draftkings,
            notarize,
            veracode,
            staples
        ],
        color: "#00ffb7ff",
        tracks: [
            {
                id: "work-1",
                title: "Senior Software Engineer @ DraftKings",
                duration: "2024-Present",
                description: "Focusing on high-throughput Kafka based ETLs and microservices.",
                details: ["C# Backend", "Kafka Streaming", "AI Tools"],
                content: `#### Key Achievements at DraftKings
- **Kafka Architecture**: Operating as a backend developer focusing on high-throughput Kafka-based ETLs and microservices.
- **AI Innovation**: Architected an AI-powered Kafka observability tool using MCP, LangGraph, and Atlas Vector DB.
- **Career Growth**: Promoted from Software Engineer (2022-2024) to Senior Software Engineer in 1.5 years.`
            },
            {
                id: "work-2",
                title: "Software Engineer Co-Op @ Notarize",
                duration: "2021",
                description: "Platform Engineering focusing on backend scalability.",
                details: ["Ruby on Rails", "Data Normalization", "SSO/SAML"],
                content: `#### Highlights at Notarize
- Developed Ruby on Rails backend features for the platform engineering team.
- Successfully normalized 250k+ records during a critical data migration.
- Developed and integrated SSO/SAML solutions for enterprise clients.`
            },
            {
                id: "work-3",
                title: "Software Engineer Co-Op @ Veracode",
                duration: "2020",
                description: "Full-stack development for Dynamic Analysis tools.",
                details: ["Java/Angular", "Feature Ownership", "System Reliability"],
                content: `#### Highlights at Veracode
- Full-stack development using Java and Angular for the Dynamic Analysis Team.
- Owned major features like configurable hostname resolutions for security scanning.`
            },
            {
                id: "work-4",
                title: "Digital Solutions Intern @ Staples",
                duration: "2019",
                description: "Digital solutions for the Home Page team.",
                details: ["Full-stack", "Jest & Enzyme", "Product Tools"],
                content: `#### Highlights at Staples
- Developed product comparison tools from scratch for the staples.com home page.
- Implemented comprehensive testing suites using Jest and Enzyme.`
            }
        ]
    },
    {
        id: "projects",
        title: "Projects",
        artist: "Project Gallery",
        description: `Check out some of my personal and professional projects! 

- Built an E-Commerce application from scratch for my mother's small business 
- Built a photo/video-graphy profile website for my brother
- Received funding and developed a full-featured Subletting platform called Ruumzy
- and more!`,
        coverImages: [
            ruumzy
        ],
        color: "#f59e0b",
        tracks: [
            {
                id: "proj-1",
                title: "Ruumzy",
                duration: "Co-Founder",
                description: "A full-featured mobile app for subletting.",
                details: ["React Native", "Flask", "Socket.io", "Redis", "AWS"],
                link: "https://ruumzy.com",
                images: [ruumzyPreview, ruumzyPreview, ruumzyPreview],
                content: `#### Ruumzy - Lead Developer & Co-Founder
Built a comprehensive subletting platform including:
- Real-time chat with Socket.io.
- Fast data retrieval with Redis caching.
- Scalable backend on AWS.
- Cross-platform mobile app using React Native.`
            },
            {
                id: "proj-2",
                title: "Shree Sai Vogue",
                duration: "E-Commerce",
                description: "A full-stack ecommerce application for a boutique.",
                details: ["Node.js", "React", "CockroachDB", "Stripe"],
                link: "https://shreesaivogue.com",
                content: `#### Shree Sai Vogue (shreesaivogue.com)
Developed an end-to-end commerce solution featuring:
- Full product catalog and inventory management.
- Secure payment integration with Stripe.
- High availability using CockroachDB and Cloudflare.`
            },
            {
                id: "proj-3",
                title: "srigmadeit.com",
                duration: "Portfolio",
                description: "A photography and videography portfolio for my brother.",
                details: ["React", "Python", "MongoDB", "Cloud Run"],
                link: "https://srigmadeit.com",
                content: `#### Photography Portfolio
- Media-heavy gallery optimized for performance.
- Headless CMS approach using MongoDB.
- Containerized deployment on Google Cloud Run.`
            }
        ]
    },
    {
        id: "education",
        title: "Education",
        artist: "Academic Records",
        description: `2018 - 2022 @ Northeastern University
Bachelor's in Computer Science and Cognitive Psychology 

2022 - Present @ University of Pennsylvania
Candidate for Master's in Data Science`,
        coverImages: [
            upenn,
            northeastern,
        ],
        color: "#ff0000",
        tracks: [
            {
                id: "edu-1",
                title: "M.S. in Data Science @ UPenn",
                duration: "2024 - Present",
                description: "Pursuing advanced studies in data science and machine learning.",
                details: ["UPenn Candidate", "Data Science Focus"]
            },
            {
                id: "edu-2",
                title: "B.S. in CS & Cog Psych @ Northeastern",
                duration: "2018 - 2022",
                description: "Combined major focusing on the intersection of human and machine intelligence.",
                details: ["GPA: 3.96 / 4.0", "Summa Cum Laude", "Khoury College", "Teaching Assistant"],
                content: `#### Academic Excellence
- **GPA**: 3.96/4.00, Summa Cum Laude.
- **Teaching Assistant**: Assisted in various CS courses (CS1210, CS2500, CS2510) for over 3 years.
- **Notable Projects**: Advanced work in NLP and Distributed Systems.`
            }
        ]
    }
];

