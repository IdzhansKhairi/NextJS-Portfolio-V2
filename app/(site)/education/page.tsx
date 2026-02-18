"use client";

import { useState } from "react";
import { Timeline, Card, Tag, Modal, Carousel, Button } from "antd";
import { CalendarOutlined, TrophyOutlined, EnvironmentOutlined, PictureOutlined } from "@ant-design/icons";

export default function Education() {

    const [galleryOpen, setGalleryOpen] = useState(false);
    const [activeGallery, setActiveGallery] = useState<string[]>([]);
    const [activeGalleryTitle, setActiveGalleryTitle] = useState("");

    const openGallery = (images: string[], title: string) => {
        setActiveGallery(images);
        setActiveGalleryTitle(title);
        setGalleryOpen(true);
    };

    const educationData = [
        {
            year: "2021 - 2025",
            degree: "Bachelor Degree of Computer Science (Artificial Intelligence)",
            school: "University Malaya",
            location: "Kuala Lumpur, Malaysia",
            logo: "/images/um-logo.png",
            description: "Specialised in AI-related fields including computer vision, NLP, fuzzy logic, and machine learning. Led 5 group projects across different subjects as project manager, honing leadership and coordination skills. Actively involved in event management and clubs. Gained industry experience through internships at FusionEx and Camp5.",
            achievements: ["CGPA: 3.61", "FYP: Exploring LLM for Malay Text Normalization", "Director of UMGB Creative Arts Club"],
            gallery: [
                "/gallery/degree-days/degree-1.jpg",
                "/gallery/degree-days/degree-2.jpg",
                "/gallery/degree-days/degree-3.jpg",
                "/gallery/degree-days/degree-4.jpg",
                "/gallery/degree-days/degree-5.jpg",
                "/gallery/degree-days/degree-6.jpg",
                "/gallery/degree-days/degree-7.jpg",
            ],
        },
        {
            year: "2020 - 2021",
            degree: "Foundation in Physical Science",
            school: "Pusat Asasi Sains Universiti Malaya (PASUM)",
            location: "Kuala Lumpur, Malaysia",
            logo: "/images/um-logo.png",
            description: "Completed my foundation year during the COVID-19 pandemic. Discovered a passion for programming, which led me to pursue Computer Science. Developed discipline, teamwork, and hands-on lab experience.",
            achievements: ["CGPA: 3.70", "MUET Band 4"],
            gallery: [
                "/gallery/pasum-days/pasum-1.jpg",
                "/gallery/pasum-days/pasum-2.jpg",
                "/gallery/pasum-days/pasum-3.jpg",
                "/gallery/pasum-days/pasum-4.jpg",
                "/gallery/pasum-days/pasum-5.jpg",
                "/gallery/pasum-days/pasum-6.jpg",
            ],
        },
        {
            year: "2018 - 2019",
            degree: "Sijil Pelajaran Malaysia (SPM) - Physical Science",
            school: "Sekolah Menengah Sains Tengku Abdullah (SEMESTA)",
            location: "Raub, Pahang, Malaysia",
            logo: "/images/semesta-logo.png",
            description: "Studied at a fully residential school (SBP) with a focus on Physical Science. Actively involved in leadership roles, innovation competitions, and extracurricular activities.",
            achievements: ["Result: 4A+, 6A", "Head of Protocol Bureau (Prefect)", "Head of School Scout Association", "Best Student Award (Academic and Co-Curriculum)"],
            gallery: [
                "gallery/semesta-days/school-1.jpg",
                "gallery/semesta-days/school-2.jpg",
                "gallery/semesta-days/school-3.jpg",
                "gallery/semesta-days/school-4.jpg",
                "gallery/semesta-days/school-5.jpg",
            ],
        }
    ];

    return (
        <div>
            <div className="text-center mb-4">
                <h2 className="fw-bold text-dark">Education</h2>
                <p className="text-secondary">My academic journey and achievements</p>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <Timeline
                        items={educationData.map((item) => ({
                            dot: <i className="bi bi-mortarboard-fill text-primary"></i>,
                            children: (
                                <Card className="mb-3 shadow-sm" hoverable>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={item.logo}
                                            alt={item.school}
                                            className="rounded-3 me-3"
                                            style={{ width: "60px", height: "60px", objectFit: "contain", backgroundColor: "#f0f5ff", padding: "8px" }}
                                        />
                                        <div className="flex-grow-1">
                                            <h5 className="fw-bold mb-1">{item.degree}</h5>
                                            <p className="text-primary mb-1">{item.school}</p>
                                            <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-1 gap-sm-3 text-secondary mb-2" style={{ fontSize: "0.85rem" }}>
                                                <div className="d-flex align-items-center">
                                                    <EnvironmentOutlined className="me-1" />
                                                    <span>{item.location}</span>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <CalendarOutlined className="me-1" />
                                                    <span>{item.year}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-secondary mt-2 mb-3">{item.description}</p>

                                    <div>
                                        {item.achievements.length > 0 && (
                                            <div className="d-flex flex-wrap gap-2">
                                                {item.achievements.map((achievement, i) => (
                                                    <Tag key={i} icon={<TrophyOutlined />} color="default">
                                                        {achievement}
                                                    </Tag>
                                                ))}
                                            </div>
                                        )}

                                        {item.gallery.length > 0 && (
                                            <div className="mt-3 d-flex justify-content-end">
                                                <Button type="link" icon={<PictureOutlined />} onClick={() => openGallery(item.gallery, item.degree)}>
                                                    View Gallery
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </Card>
                            ),
                        }))}
                    />
                </div>
            </div>

            <Modal
                title={activeGalleryTitle}
                open={galleryOpen}
                onCancel={() => setGalleryOpen(false)}
                footer={null}
                width={700}
                centered
            >
                <Carousel arrows autoplay dotPosition="bottom">
                    {activeGallery.map((image, i) => (
                        <div key={i}>
                            <img
                                src={image}
                                alt={`Gallery ${i + 1}`}
                                style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "8px" }}
                            />
                        </div>
                    ))}
                </Carousel>
            </Modal>
        </div>
    );
}