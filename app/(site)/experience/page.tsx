"use client";

import { Timeline, Card } from "antd";
import { CalendarOutlined, EnvironmentOutlined, CheckCircleOutlined } from "@ant-design/icons";

export default function Experience() {

    const experienceData = [
        {
            period: "August 2025 - Present",
            role: "Solution Engineer",
            company: "Enfrasys Solution Sdn Bhd",
            location: "Persiaran Tropicana, Selangor, Malaysia",
            logo: "/images/enfrasys-logo.jpg",
            description: "Handling AI-related projects primarily utilizing Microsoft Copilot Studio, while independently developing Machine Learning solutions with collaborative input from colleagues.",
            highlights: [
                "Handled AI-related projects scoped within Microsoft Copilot Studio.",
                "Worked on Machine Learning projects independently with input from colleagues.",
                "Explored and evaluated outsource tools and technologies during free time.",
                "Attended Microsoft AI-102: Azure AI Engineer Associate training by Iverson Sdn Bhd.",
                "Explored and learned Microsoft products such as Azure Microsoft AI Foundry, Microsoft Fabric, and Power BI.",
            ],
        },
        {
            period: "April 2023 - August 2025",
            role: "Part-Time Staff",
            company: "Camp Five Sdn Bhd",
            location: "Kuala Lumpur, Malaysia",
            logo: "/images/camp5-logo.png",
            description: "Assisted and guided customers and managed daily front desk operations. Supported team with facility setup and customer management.",
            highlights: [
                "Assisted and guided customers and managed daily front desk operations.",
                "Supported team with facility setup and customer management.",
                "Joined bouldering/lead climbing competitions (eg: Crank Boulder and Crank Lead competition) as part of the live stream team.",
                "Built connections with climbing industry stakeholders.",
                "Aspiring Instructor for Basic Bouldering Course (BBC) and Basic Movement Course (BMC).",
                "Attended Asian Climbing Summit (ACS) as part of livestream team.",
            ],
        },
        {
            period: "July 2023 - January 2024",
            role: "Internship Trainee",
            company: "FusionEx Group",
            location: "Kuala Lumpur, Malaysia",
            logo: "/images/fusionex.jpg",
            description: "Collaborated with a development team to deliver UI improvements and assisted in implementing UI changes and feature enhancements.",
            highlights: [
                "Collaborated with a development team to deliver UI improvements.",
                "Worked on bug identification and resolution.",
                "Assisted in implementing UI changes and feature enhancements.",
                "Utilized Trello to enhance task coordination and collaboration.",
                "Gained exposure to agile development practices and issue tracking.",
            ],
        },
        {
            period: "July 2022 - December 2022",
            role: "Security Personnel",
            company: "Admiral Secure Guard Sdn Bhd",
            location: "Ampang, Selangor, Malaysia",
            logo: "/images/admiral-logo.jpg",
            description: "Handled high-pressure situations and managed visitor access while maintaining alertness during emergencies and ensuring protocol compliance.",
            highlights: [
                "Handled high-pressure situations and managed visitor access.",
                "Maintained alertness during emergencies and ensured protocol compliance.",
            ],
        },
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
                                            <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-1 gap-sm-3 text-secondary mb-2" style={{ fontSize: "0.85rem" }}>
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