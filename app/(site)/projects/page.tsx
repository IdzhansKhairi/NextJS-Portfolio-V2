"use client";

import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import "./projects.css";

export default function Projects() {

    const projectsData = [
        {
            title: "Tatabahasa V1.0",
            description: "Final Year Project exploring Large Language Models for Malay Text Normalization. Leverages JamAI Base as the LLM provider with an Angular frontend and Python Flask backend. Features include text normalization, breakdown analysis, and informal features percentage detection.",
            image: "/gallery/projects-list/tatabahasa-v1.png",
            tags: ["Angular", "Python", "Flask", "JamAI Base", "Bootstrap", "SweetAlert2"],
            bgColor: "#e8f4f8",
            featured: false,
            github: "https://github.com/IdzhansKhairi/Tatabahasa-LLM-Normalization-Angular-V1",
            demo: "https://llm-malay-text-normalization.onrender.com/",
        },
        {
            title: "Tatabahasa V2.0",
            description: "An upgraded version of Tatabahasa V1.0 rebuilt with Next.js for improved UI and performance. Retains the same LLM-powered Malay text normalization features with a modernized frontend stack.",
            image: "/gallery/projects-list/tatabahasa-v2.png",
            tags: ["Next.js", "JamAI Base", "Ant Design", "Ant Chart", "Bootstrap 5"],
            bgColor: "#f0e8ff",
            featured: false,
            github: "https://github.com/IdzhansKhairi/Tatabahasa-LLM-Normalization-NextJS-V2",
            demo: "https://tatabahasa.vercel.app/",
        },
        {
            title: "Rukovisuals",
            description: "A photographer portfolio website built for a friend. Leveraging Next.js, Ant Design, and Loveable.ai to design and develop the site. Initially deployed on Render before the photographer acquired their own domain.",
            image: "/gallery/projects-list/rukovisuals.png",
            tags: ["Next.js", "Ant Design", "Loveable.ai", "Render"],
            bgColor: "#fff3e0",
            featured: false,
            github: "https://github.com/IdzhansKhairi/rukovisuals",
            demo: "https://rukovisuals.vercel.app/home",
        },
        {
            title: "Personal Financial Tracker",
            description: "A personalized financial tracking web app built to replace spreadsheets. Uses Supabase (PostgreSQL) for cloud storage, enabling cross-device access with single-session authentication — logging in on one device automatically logs out others.",
            image: "/gallery/projects-list/finttrack.png",
            tags: ["Next.js", "Ant Design", "Ant Charts", "SweetAlert2", "Supabase"],
            bgColor: "#e8f5e9",
            featured: false,
            github: "https://github.com/IdzhansKhairi/Personal-Financial-Tracker",
            demo: "",
        },
    ];

    return (
        <div>
            <div className="text-center mb-4">
                <h2 className="fw-bold text-dark">Projects</h2>
                <p className="text-secondary">Some of my recent work and side projects</p>
            </div>

            <div className="projects-grid">
                <div className="row g-4">
                    {projectsData.map((project, index) => (
                        <div key={index} className="col-lg-6">
                            <div className="project-card">

                                {/* Image */}
                                <div className="project-image-wrapper" style={{ backgroundColor: project.bgColor }}>
                                    {project.featured && (
                                        <span className="project-featured-badge">
                                            ⭐ Featured
                                        </span>
                                    )}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-card-image"
                                    />
                                </div>

                                {/* Body */}
                                <div className="project-card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <h5 className="project-card-title mb-0">{project.title}</h5>
                                        <div className="project-links">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                    <GithubOutlined />
                                                </a>
                                            )}
                                            {project.demo && (
                                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                    <LinkOutlined />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <p className="project-card-desc text-secondary">{project.description}</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="project-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}