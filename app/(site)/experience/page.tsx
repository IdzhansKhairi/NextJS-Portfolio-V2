"use client";

import { Timeline, Card } from "antd";
import { CalendarOutlined, EnvironmentOutlined, CheckCircleOutlined } from "@ant-design/icons";

export default function Experience() {

    const experienceData = [
        {
            period: "Jun 2024 - Aug 2024",
            role: "Software Engineer Intern",
            company: "FusionEx Sdn Bhd",
            location: "Kuala Lumpur, Malaysia",
            logo: "/images/fusionex-logo.png",
            description: "Developed and maintained responsive web applications using React and Node.js. Collaborated with the design team to implement pixel-perfect UI components.",
            highlights: [
                "Built a customer dashboard that improved user engagement by 40%",
                "Implemented automated testing, reducing bugs by 30%",
                "Participated in Agile sprints and code reviews",
            ],
        },
        {
            period: "Jan 2024 - May 2024",
            role: "Part-Time Staff",
            company: "Camp5 Sdn Bhd",
            location: "Kuala Lumpur, Malaysia",
            logo: "/images/camp5-logo.png",
            description: "Assisted in day-to-day operations and customer service at the climbing facility.",
            highlights: [
                "Managed customer registrations and inquiries",
                "Maintained safety standards and equipment checks",
            ],
        },
        // Add more experience entries here
    ];

    return (
        <div>
            <div className="text-center mb-4">
                <h2 className="fw-bold text-dark">Work Experience</h2>
                <p className="text-secondary">My professional journey and work history</p>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <Timeline
                        items={experienceData.map((item) => ({
                            dot: <i className="bi bi-briefcase-fill text-primary"></i>,
                            children: (
                                <Card className="mb-3 shadow-sm" hoverable>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={item.logo}
                                            alt={item.company}
                                            className="rounded-3 me-3"
                                            style={{ width: "60px", height: "60px", objectFit: "contain", backgroundColor: "#f0f5ff", padding: "8px" }}
                                        />
                                        <div className="flex-grow-1">
                                            <h5 className="fw-bold mb-1">{item.role}</h5>
                                            <p className="text-primary mb-1">{item.company}</p>
                                            <div className="d-flex align-items-center gap-3 text-secondary mb-2" style={{ fontSize: "0.85rem" }}>
                                                <div className="d-flex align-items-center">
                                                    <EnvironmentOutlined className="me-1" />
                                                    <span>{item.location}</span>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <CalendarOutlined className="me-1" />
                                                    <span>{item.period}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-secondary mt-2 mb-3">{item.description}</p>

                                    {item.highlights.length > 0 && (
                                        <div className="d-flex flex-column gap-2">
                                            {item.highlights.map((highlight, i) => (
                                                <div key={i} className="d-flex align-items-start">
                                                    <CheckCircleOutlined className="text-primary me-2 mt-1" />
                                                    <span className="text-secondary">{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </Card>
                            ),
                        }))}
                    />
                </div>
            </div>
        </div>
    );
}