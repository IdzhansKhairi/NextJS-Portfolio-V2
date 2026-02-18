"use client";

import "./skills.css";

export default function Skills() {

    const technicalSkills = [
        {
            category: "Frontend",
            icon: "bi bi-window-stack",
            chipBg: "#f0f5ff",
            chipBorder: "#adc6ff",
            accent: "#1677ff",
            skills: [
                { name: "Next.js", icon: "bi bi-filetype-tsx" },
                { name: "Angular", icon: "bi bi-code-slash" },
                { name: "React", icon: "bi bi-filetype-tsx" },
                { name: "TypeScript", icon: "bi bi-typescript" },
                { name: "TSX", icon: "bi bi-filetype-tsx" },
                { name: "HTML", icon: "bi bi-filetype-html" },
                { name: "CSS", icon: "bi bi-filetype-css" },
                { name: "Bootstrap", icon: "bi bi-bootstrap" },
                { name: "Ant Design", icon: "bi bi-palette" },
                { name: "Ant Charts", icon: "bi bi-graph-up" },
                { name: "R Shiny", icon: "bi bi-display" },
            ],
        },
        {
            category: "Backend & Languages",
            icon: "bi bi-terminal",
            chipBg: "#f0fff4",
            chipBorder: "#95de64",
            accent: "#52c41a",
            skills: [
                { name: "Python", icon: "bi bi-filetype-py" },
                { name: "Flask", icon: "bi bi-server" },
                { name: "JavaScript", icon: "bi bi-filetype-js" },
                { name: "R Studio", icon: "bi bi-bar-chart-steps" },
            ],
        },
        {
            category: "Microsoft & Azure",
            icon: "bi bi-microsoft",
            chipBg: "#f5f0ff",
            chipBorder: "#b37feb",
            accent: "#722ed1",
            skills: [
                { name: "Azure AI Foundry", icon: "bi bi-cloud" },
                { name: "Azure AI Search", icon: "bi bi-search" },
                { name: "Azure Storage Account", icon: "bi bi-hdd-stack" },
                { name: "Azure Key Vault", icon: "bi bi-key" },
                { name: "Azure Logic App", icon: "bi bi-diagram-2" },
                { name: "Azure App Service", icon: "bi bi-globe" },
                { name: "Microsoft Fabric", icon: "bi bi-diagram-3" },
                { name: "Power BI", icon: "bi bi-bar-chart-line" },
                { name: "MS Office", icon: "bi bi-file-earmark-richtext" },
            ],
        },
        {
            category: "Tools & Platforms",
            icon: "bi bi-tools",
            chipBg: "#fff7e6",
            chipBorder: "#ffc069",
            accent: "#fa8c16",
            skills: [
                { name: "Git", icon: "bi bi-git" },
                { name: "Supabase", icon: "bi bi-database" },
                { name: "Postman", icon: "bi bi-send" },
                { name: "Trello", icon: "bi bi-kanban" },
                { name: "Keycloak", icon: "bi bi-shield-lock" },
                { name: "Antigravity", icon: "bi bi-robot" },
                { name: "Android Studio", icon: "bi bi-phone" },
            ],
        },
        {
            category: "Others",
            icon: "bi bi-stars",
            chipBg: "#fff0f6",
            chipBorder: "#ff85c0",
            accent: "#eb2f96",
            skills: [
                { name: "Bandlab (Music Editing)", icon: "bi bi-music-note-beamed" },
                { name: "CapCut (Video Editing)", icon: "bi bi-camera-reels" },
                { name: "Canva", icon: "bi bi-easel" },
            ],
        },
    ];

    const softSkills = [
        {
            title: "Problem Solving",
            description: "Breaking down complex problems into simple, elegant solutions.",
            icon: "bi bi-lightbulb",
        },
        {
            title: "Team Collaboration",
            description: "Working effectively with cross-functional teams and stakeholders.",
            icon: "bi bi-people",
        },
        {
            title: "Communication",
            description: "Clearly conveying technical concepts to both technical and non-technical audiences.",
            icon: "bi bi-chat-dots",
        },
        {
            title: "Adaptability",
            description: "Quickly learning new technologies and adapting to changing project requirements.",
            icon: "bi bi-arrow-repeat",
        },
        {
            title: "Time Management",
            description: "Prioritizing tasks effectively to meet deadlines and deliver quality work.",
            icon: "bi bi-clock-history",
        },
        {
            title: "Self-Driven Learning",
            description: "Continuously exploring new tools, technologies, and best practices independently.",
            icon: "bi bi-book",
        },
    ];

    const certifications = [
        {
            category: "Training",
            icon: "bi bi-mortarboard",
            items: [
                {
                    title: "Microsoft AI-102: Azure AI Engineer Associate",
                    issuer: "Training by Iverson Sdn Bhd",
                    date: "2025",
                    badgeImage: "/gallery/training-certification/training-ai102-badge.png",
                    icon: "bi bi-award",
                },
            ],
        },
        {
            category: "Passed Certification",
            icon: "bi bi-patch-check",
            items: [],
        },
    ];

    // Filter out categories with no items
    const activeCertifications = certifications.filter(group => group.items.length > 0);

    return (
        <div>
            <div className="text-center mb-4">
                <h2 className="fw-bold text-dark">Skills</h2>
                <p className="text-secondary">Technologies and tools I work with</p>
            </div>

            <div className="skills-container">

                {/* Technical Skills */}
                <div className="skills-section-card">
                    <div className="skills-section-title">
                        <i className="bi bi-code-square"></i>
                        Technical Skills / Experience
                    </div>
                    {technicalSkills.map((group, index) => (
                        <div key={index} className="skill-category-group" style={{ borderLeft: `4px solid ${group.accent}`, paddingLeft: "16px" }}>
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <i className={group.icon} style={{ color: group.accent }}></i>
                                <span className="fw-semibold text-dark">{group.category}</span>
                                <span className="skill-count-badge" style={{ backgroundColor: group.chipBg, color: group.accent }}>
                                    {group.skills.length}
                                </span>
                            </div>
                            <div className="d-flex flex-wrap gap-3">
                                {group.skills.map((skill, i) => (
                                    <div key={i} className="skill-item" style={{ backgroundColor: group.chipBg, borderColor: group.chipBorder }}>
                                        <i className={skill.icon} style={{ color: group.accent }}></i>
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Soft Skills */}
                <div className="skills-section-card">
                    <div className="skills-section-title">
                        <i className="bi bi-person-gear"></i>
                        Soft Skills
                    </div>
                    <div className="row g-3">
                        {softSkills.map((skill, index) => (
                            <div key={index} className="col-lg-6">
                                <div className="soft-skill-item">
                                    <div className="soft-skill-icon">
                                        <i className={skill.icon}></i>
                                    </div>
                                    <div>
                                        <div className="soft-skill-title">{skill.title}</div>
                                        <p className="soft-skill-desc text-secondary">{skill.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications & Training - only show if data exists */}
                {activeCertifications.length > 0 && (
                    <div className="skills-section-card">
                        <div className="skills-section-title">
                            <i className="bi bi-patch-check"></i>
                            Certifications & Training
                        </div>
                        {activeCertifications.map((group, index) => (
                            <div key={index} className="mb-4">
                                <div className="d-flex align-items-center gap-2 mb-3">
                                    <i className={`${group.icon} text-primary`}></i>
                                    <span className="fw-semibold text-dark">{group.category}</span>
                                    <span className="skill-count-badge" style={{ backgroundColor: "#f0f5ff", color: "var(--bs-primary)" }}>
                                        {group.items.length}
                                    </span>
                                </div>
                                <div className="row g-3">
                                    {group.items.map((cert, i) => (
                                        <div key={i} className="col-lg-6">
                                            <div className="cert-item">
                                                {cert.badgeImage ? (
                                                    <img
                                                        src={cert.badgeImage}
                                                        alt={cert.title}
                                                        className="cert-badge-image"
                                                        onError={(e) => {
                                                            const target = e.target as HTMLImageElement;
                                                            target.style.display = "none";
                                                            target.nextElementSibling?.classList.remove("d-none");
                                                        }}
                                                    />
                                                ) : null}
                                                <div className={`cert-icon ${cert.badgeImage ? "d-none" : ""}`}>
                                                    <i className={cert.icon}></i>
                                                </div>
                                                <div>
                                                    <div className="cert-title">{cert.title}</div>
                                                    <p className="cert-issuer text-secondary">{cert.issuer}</p>
                                                    <p className="cert-date text-muted">{cert.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}