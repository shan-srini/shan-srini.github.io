import shanImage from "./assets/shan.jpg";
import draftkings from "./assets/draftkings.png";
import ruumzy from "./assets/ruumzy.png";
import notarize from "./assets/notarize.png";
import veracode from "./assets/veracode.png";
import staples from "./assets/staples.png";
import northeastern from "./assets/northeastern.png";
import upenn from "./assets/upenn.png";
import ruumzyPreview from "./assets/ruumzyPreview.png";
import srigmadeitPreview from "./assets/smiPreview.png";
import shreeSaiVoguePreview from "./assets/shreesaivoguePreview1.png";
import shreeSaiVoguePreview2 from "./assets/shreesaivoguePreview2.png";
import shreeSaiVoguePreview3 from "./assets/shreesaivoguePreview3.png";
import shreeSaiVoguePreview4 from "./assets/shreesaivoguePreview4.png";
import shreeSaiVoguePreview5 from "./assets/shreesaivoguePreview5.png";
import scrutinyFBPreview from "./assets/scrutinyfb.jpg";
import shreesaivogue from "./assets/shreesaivogue.png";
import srigmadeit from "./assets/srigmadeit.png";

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

Choose a record and check out the tracklist to learn more about me!`,
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
                details: ["Languages: C#, JS, TS, Python, Java, Ruby, C, Go", "Tools: Kafka, AWS, GCP, Docker, K8s, SQL, MongoDB, Redis, Bash, Vim, Git", "Frameworks: React, Asp.Net, Flask, FastAPI, MCP, LangGraph, Java Spring Boot, Ruby on Rails"],
                link: "https://github.com/shan-srini",
                content: `### Technical Toolbelt
In the past, I've used a variety of tools and languages, some of which are listed below.
**Languages**
- C#, Java, Python, Javascript, Typescript, Ruby, C, Go

**Frameworks**
- React, Asp.Net, Kafka, MCP, LangGraph, Flask, FastAPI, Java Spring Boot, Ruby on Rails, GraphQL, Angular, WebSockets Socket.io, NestJS

**Infrastructure & Tools**
- Git, AWS, GCP, Docker, Kubernetes, MySQL, MongoDB, PostgreSQL, CockroachDB, Redis, Bash, Vim, Git`
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
                duration: "2022-Present",
                description: "Focusing on high-throughput and distributed systems using Kafka based ETLs and REST API microservices.",
                details: ["C# Backend", "Kafka Streaming", "AI Tools"],
                content: `#### Key Achievements at DraftKings
    - Kafka: Operating as a backend developer focusing on high-throughput Kafka-based ETLs and microservices.
    - Scalability: Built scalable endpoints and cache access patterns adopted across the division to enable serving over 250k RPM in various microservices.
    - Observability: Lead initiatives to improve observability by building comprehensive SUT K8S E2E Test Environments with AI based regression testing capabilities and prod recording/replaying infrastructure to simulate production issues in an isolated environment.
    - AI Innovation: Architected an AI-assisted Kafka observability tool to debug complex data interactions in DraftKings ETLs by using MCP, LangGraph, and Atlas Vector DB.
    - Career Growth: Promoted from Software Engineer (2022-2024) to Senior Software Engineer in ~1 year.`
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
    - Developed and integrated SSO/SAML solutions for enterprise clients.
    - Developed mock SSO/SAML solutions to better e2e test the SSO solution created for enterprise clients.`
            },
            {
                id: "work-3",
                title: "Software Engineer Co-Op @ Veracode",
                duration: "2020",
                description: "Full-stack development for Dynamic Analysis tools.",
                details: ["Java/Angular", "Feature Ownership", "System Reliability"],
                content: `#### Highlights at Veracode
    - Operated as a Java and Angular full-stack engineer on the Dynamic Analysis team
    - Owned and developed multiple features such as configurable hostname to IP resolutions for analyses, ad-hoc analysis scan scheduling, and extended analysis lookup
`
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
            shreesaivogue,
            ruumzy,
            srigmadeit
        ],
        color: "#f59e0b",
        tracks: [
            {
                id: "proj-2",
                title: "Shree Sai Vogue",
                duration: "2022",
                description: "A full-stack ecommerce application for a boutique.",
                details: ["React", "Stripe", "CockroachDB", "ExpressJS", "GCP Cloud Run", "Cloudflare", "Google Maps API", "Auth - JWT, social login, etc."],
                link: "https://shreesaivogue.com",
                images: [shreeSaiVoguePreview, shreeSaiVoguePreview2, shreeSaiVoguePreview3, shreeSaiVoguePreview4, shreeSaiVoguePreview5],
                content: `Shree Sai Vogue (shreesaivogue.com) is a full-stack ecommerce application for my mother's small business boutique. It features:

    - Full product catalog and inventory management.
    - Secure payment integration with Stripe.
    - JWT authentication for secure user sessions with support for Google and Facebook login.
    - High availability using CockroachDB and Cloudflare.`
            },
            {
                id: "proj-1",
                title: "Ruumzy",
                duration: "2021",
                description: "A full-featured mobile app for subletting.",
                details: ["React Native", "Python Flask", "Socket.io", "Redis", "AWS", "Google Maps API", "PostgreSQL + PostGIS", "Auth - JWT, social login, etc."],
                link: "https://ruumzy.com",
                images: [ruumzyPreview],
                content: `#### Ruumzy - Lead Developer & Co-Founder
Built a comprehensive subletting platform including:

    - Comprehensive Auth with JWT, bcrypt hashing schemes, password reset and account recovery features, etc.
    - Location based subletting features with Google Maps API and PostGIS for geospatial data.
    - Real-time chat with Socket.io.
    - Fast data retrieval with Redis caching.
    - Scalable backend on AWS.
    - Cross-platform mobile app using React Native.

Raised $5k in funding for Ruumzy from the Jelly Fund at Northeastern University. The app was released to the iOS and Google Play stores. It received nearly 500 downloads, but has since been removed from the app store.`
            },
            {
                id: "proj-3",
                title: "srigmadeit.com",
                duration: "2020",
                description: "A photography and videography portfolio for my brother.",
                details: ["React", "Python", "Flask", "JWT", "Backblaze B2 Object Storage", "Oracle Cloud Object Storage", "Cloudflare ", "MongoDB", "GCP Cloud Run"],
                images: [srigmadeitPreview],
                link: "https://srigmadeit.com",
                content: `srigmadeit.com is a Photography and Videography Portfolio for my brother's work capturing special moments from Billerica town sports, NBA players, and more!

    - Media-heavy gallery optimized for performance with cached assets.
    - Headless CMS approach using MongoDB.
    - Containerized deployment on Google Cloud Run.
    - Backblaze B2 Object Storage for photos.
    - Oracle Cloud Object Storage for videos (because of an extremely high free tier egress bandwidth permitted per month).

This website has been visited by over 5000 unique users!`
            },
            {
                id: "proj-4",
                title: "Scrutiny FB",
                duration: "2019",
                description: "Scrutinize Football Statistics!",
                details: ["React Native", "MySQL", "Heroku", "Python Flask"],
                images: [scrutinyFBPreview],
                link: "",
                content: `## Scrutiny FB
ScrutinyFB is an iOS application to provide a simple, uncluttered solution to viewing and analyzing NFL statistics, including comparing player statistics side by side, viewing player statistics splits, etc.
ScrutinyFB was released on the iOS app store, but has since been removed. 

    - Developed an iOS application to provide a simple, uncluttered solution to viewing and analyzing NFL statistics, including comparing player statistics side by side, viewing player statistics splits, etc.
    - Designed and implemented Data Retrieval (Web scraping - Python: Requests, LXML, Pandas), Persistence (REST API - Python: Flask), and Data (MySQL) layers for application
    - Collaborated with a friend who assisted in front-end design and development`
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
                details: ["UPenn Candidate", "Data Science Focus"],
                content: `#### M.S. in Data Science @ UPenn
- Pursuing advanced studies in data science and machine learning while working full-time.`
            },
            {
                id: "edu-2",
                title: "B.S. in CS & Cog Psych @ Northeastern",
                duration: "2018 - 2022",
                description: "Combined major focusing on the intersection of human and machine intelligence.",
                details: ["GPA: 3.96 / 4.0", "Summa Cum Laude", "Khoury College", "Teaching Assistant"],
                content: `#### Academic Excellence
- GPA 3.96 / 4.00, Summa Cum Laude.
- Teaching Assistant: Assisted in various CS courses(CS1210, CS2500, CS2510) for over 3 years.
- Notable Projects: Numerous full-stack applications for various courses, data generation and scraping for psychology experiments, etc. Happy to share on request!`
            }
        ]
    }
];

