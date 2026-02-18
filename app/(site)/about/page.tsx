"use client";

import { Button } from "antd";
import { MailOutlined, GithubOutlined, LinkedinOutlined, EnvironmentOutlined } from "@ant-design/icons";
import "./about.css";

export default function About() {

    return (
        <div>
            <div className="row align-items-center g-5 y-axis-gap">

                {/* Left Content */}
                <div className="col-lg-7 order-2 order-lg-1 text-center text-lg-start">

                    {/* Name Heading */}
                    <h1 className="about-heading mb-2">
                        Hi, I&apos;m{" "}
                        <span className="accent">Idzhans Khairi</span>
                    </h1>

                    {/* Subtitle */}
                    <h4 className="about-subtitle mb-3">
                        Solution Engineer &amp; AI Enthusiast
                    </h4>

                    {/* Bio */}
                    <p className="about-bio text-secondary mb-4">
                        I&apos;m a Solution Engineer at Enfrasys Solution Sdn Bhd with a
                        passion for AI and Machine Learning. I enjoy building intelligent
                        solutions using Microsoft technologies like Copilot Studio, Azure AI
                        Foundry, and Power BI. I love turning complex problems into simple,
                        elegant solutions.
                    </p>

                    {/* Location */}
                    <div className="about-location d-flex align-items-center text-secondary mb-4">
                        <EnvironmentOutlined className="me-2" />
                        <span>Selangor, Malaysia</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex flex-wrap gap-3">
                        <Button type="primary" icon={<MailOutlined />} size="large" href="mailto:idzhans.khairi@gmail.com" className="about-btn-email text-decoration-none">
                            Email Me
                        </Button>

                        <Button icon={<GithubOutlined />} size="large" href="https://github.com/IdzhansKhairi" target="_blank" className="about-btn-outline text-decoration-none">
                            GitHub
                        </Button>

                        <Button icon={<LinkedinOutlined />} size="large" href="https://www.linkedin.com/in/idzhans-khairi" target="_blank" className="about-btn-outline text-decoration-none">
                            LinkedIn
                        </Button>
                    </div>
                </div>

                {/* Right Profile Image */}
                <div className="col-lg-5 text-center order-1 order-lg-2">
                    <div className="about-profile-wrapper">
                        <img src="/images/profile-pic.jpg" alt="Idzhans Khairi" />
                    </div>
                </div>
            </div>
        </div>
    );
}