"use client";

import { useState } from "react";
import { Image, Modal } from "antd";
import "./interests.css";

export default function Interests() {

    const interestsData = [
        {
            title: "Gunpla Building",
            description: "Building and customizing Gundam plastic model kits. From snap-building to panel lining and decals — it's a meditative craft.",
            icon: "bi bi-tools",
            iconBg: "#fff7e6",
            iconColor: "#fa8c16",
            gallery: [
                { type: "image", src: "/gallery/hobbies/gunpla/gunpla-1.jpg", caption: "Gunpla building setup" },
                { type: "image", src: "/gallery/hobbies/gunpla/gunpla-2.jpg", caption: "[MG] Astray Red Frame Kai" },
                { type: "image", src: "/gallery/hobbies/gunpla/gunpla-3.jpg", caption: "[RG] Gundam Hi-Nu" },
                { type: "image", src: "/gallery/hobbies/gunpla/gunpla-4.jpg", caption: "[HG] Gundam GQuuuuuuX" },
                { type: "image", src: "/gallery/hobbies/gunpla/gunpla-5.jpg", caption: "[HG] Red Gundam" },
                { type: "image", src: "/gallery/hobbies/gunpla/gunpla-6.jpg", caption: "[RG] Gundam Epyon" },
                { type: "image", src: "/gallery/hobbies/gunpla/gunpla-7.jpg", caption: "[RG] Gundam RX-78-2" },
                { type: "image", src: "/gallery/hobbies/gunpla/gunpla-8.jpg", caption: "[HG] Gundam Aerial + Mirasoul Flight Unit" },
                { type: "image", src: "/gallery/hobbies/gunpla/gunpla-9.jpg", caption: "Some Gundam Collections" },
            ],
        },
        {
            title: "Rock Climbing",
            description: "Bouldering and top-rope climbing at indoor walls. Love the mental and physical challenge of solving routes.",
            icon: "bi bi-geo-alt",
            iconBg: "#f0fff4",
            iconColor: "#52c41a",
            gallery: [
                { type: "video", src: "/gallery/hobbies/rock-climbing/climb-video-1.mp4", caption: "V3 Dyno Video 1" },
                { type: "video", src: "/gallery/hobbies/rock-climbing/climb-video-2.mp4", caption: "V3 Dyno Video 2" },
                { type: "image", src: "/gallery/hobbies/rock-climbing/climb-1.jpg", caption: "Crank Lead Competition Livestream Setup" },
                { type: "image", src: "/gallery/hobbies/rock-climbing/climb-2.jpg", caption: "Crank Lead Competition" },
                { type: "image", src: "/gallery/hobbies/rock-climbing/climb-3.jpg", caption: "Top-Rope Climbing Session" },
                { type: "image", src: "/gallery/hobbies/rock-climbing/climb-4.jpg", caption: "Camp5 JUMPA" },
                { type: "image", src: "/gallery/hobbies/rock-climbing/climb-5.jpg", caption: "Bouldering Climbing Session" },
                { type: "image", src: "/gallery/hobbies/rock-climbing/climb-6.jpg", caption: "Crank Boulder Competitor 1" },
                { type: "image", src: "/gallery/hobbies/rock-climbing/climb-7.jpg", caption: "Crank Boulder Competitor 2" },
            ],
        },
        {
            title: "Music",
            description: "Playing guitar and experimenting with music production in Bandlab. From covers to original ideas — music is my creative outlet.",
            icon: "bi bi-music-note-beamed",
            iconBg: "#f5f0ff",
            iconColor: "#722ed1",
            gallery: [
                { type: "video", src: "/gallery/hobbies/music/music-video-1.mp4", caption: "Music Made from scratch using Bandlab" },
                { type: "video", src: "/gallery/hobbies/music/music-video-2.mp4", caption: "Talking to The Moon cover" },
                { type: "image", src: "/gallery/hobbies/music/music-1.png", caption: "Electric Guitar Learning" },
                { type: "image", src: "/gallery/hobbies/music/music-2.png", caption: "Band Performance Practice" },
                { type: "image", src: "/gallery/hobbies/music/music-3.jpg", caption: "Chinese Traditional Music Instrument Exposure" },
                { type: "image", src: "/gallery/hobbies/music/music-4.jpg", caption: "Music Maker Jam Music Making / Editing" },
                { type: "youtube", src: "bTvAuXfG68Y", caption: "EDM Ghost Freak - Music Maker Jam" },
                { type: "youtube", src: "sX1wVB1tAp8", caption: "Patron Neon - Music Maker Jam" },
                { type: "youtube", src: "Qfy_20f8bcw", caption: "Elextrolyte Vibe - Music Maker Jam" },
            ],
        },
        {
            title: "Photography & Videography",
            description: "Capturing moments through the lens. Street photography, events, and short-form video content creation.",
            icon: "bi bi-camera",
            iconBg: "#f0f5ff",
            iconColor: "#1677ff",
            gallery: [
                { type: "youtube", src: "j5XrSjQ3Ch4", caption: "Datok Gong - Malay Ethnicity Deity" },
                { type: "youtube", src: "E5Tx59e464c", caption: "Pelajar Lapok Video Making" },
                { type: "image", src: "/gallery/hobbies/photography-videography/photo-1.jpg", caption: "Sunflower" },
                { type: "image", src: "/gallery/hobbies/photography-videography/photo-2.jpg", caption: "CNY Vibes" },
                { type: "image", src: "/gallery/hobbies/photography-videography/photo-3.jpg", caption: "Aesthetic Sitting Area" },
                { type: "image", src: "/gallery/hobbies/photography-videography/photo-4.jpg", caption: "Burger Boy" },
                { type: "image", src: "/gallery/hobbies/photography-videography/photo-5.jpg", caption: "Sandakan City" },
                { type: "image", src: "/gallery/hobbies/photography-videography/photo-6.jpg", caption: "Sandakan Market" },
                { type: "image", src: "/gallery/hobbies/photography-videography/photo-7.jpg", caption: "Bukit Bintang" },
            ],
        },
    ];

    const [activeInterest, setActiveInterest] = useState(0);
    const [videoModal, setVideoModal] = useState<{ src: string; caption: string } | null>(null);

    const currentInterest = interestsData[activeInterest];

    return (
        <div>
            <div className="text-center mb-4">
                <h2 className="fw-bold text-dark">Interests & Hobbies</h2>
                <p className="text-secondary">What I do when I&apos;m not coding</p>
            </div>

            <div className="interests-container">

                {/* Interest Cards */}
                <div className="row g-3 mb-2">
                    {interestsData.map((interest, index) => (
                        <div key={index} className="col-lg-3 col-md-6">
                            <div
                                className={`interest-card ${activeInterest === index ? "active" : ""}`}
                                onClick={() => setActiveInterest(index)}
                            >
                                <div
                                    className="interest-icon-wrapper"
                                    style={{ backgroundColor: interest.iconBg }}
                                >
                                    <i className={interest.icon} style={{ color: interest.iconColor }}></i>
                                </div>
                                <div className="interest-card-title">{interest.title}</div>
                                <p className="interest-card-desc text-secondary">{interest.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Gallery Section */}
                <div className="gallery-section">
                    <div className="gallery-section-header">
                        <i className={currentInterest.icon} style={{ color: currentInterest.iconColor }}></i>
                        <span>{currentInterest.title} Gallery</span>
                    </div>

                    {currentInterest.gallery.length > 0 ? (
                        <Image.PreviewGroup>
                            <div className="gallery-grid">
                                {currentInterest.gallery.map((item, index) => (
                                    <div key={index} className="gallery-item">
                                        {item.type === "youtube" ? (
                                            <div className="gallery-youtube">
                                                <iframe
                                                    src={`https://www.youtube.com/embed/${item.src}`}
                                                    title={item.caption}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    style={{ width: "100%", height: "100%", border: "none", borderRadius: "12px" }}
                                                />
                                            </div>
                                        ) : item.type === "video" ? (
                                            <div className="gallery-video-wrapper" onClick={() => setVideoModal({ src: item.src, caption: item.caption })} style={{ cursor: "pointer" }}>
                                                <video
                                                    src={item.src}
                                                    muted
                                                    playsInline
                                                    preload="metadata"
                                                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
                                                />
                                                <div className="gallery-video-overlay">
                                                    <i className="bi bi-play-circle-fill"></i>
                                                    <span>{item.caption}</span>
                                                </div>
                                            </div>
                                        ) : (
                                            <Image
                                                src={item.src}
                                                alt={item.caption}
                                                width="100%"
                                                height="100%"
                                                style={{ objectFit: "cover", borderRadius: "12px" }}
                                                preview={{
                                                    mask: (
                                                        <div className="d-flex align-items-center gap-2">
                                                            <i className="bi bi-zoom-in"></i>
                                                            <span>{item.caption}</span>
                                                        </div>
                                                    ),
                                                }}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Image.PreviewGroup>
                    ) : (
                        <div className="gallery-placeholder">
                            <i className="bi bi-images"></i>
                            <p>No gallery items yet</p>
                        </div>
                    )}
                </div>

                {/* Video Modal */}
                <Modal
                    title={videoModal?.caption}
                    open={!!videoModal}
                    onCancel={() => setVideoModal(null)}
                    footer={null}
                    width={700}
                    centered
                    destroyOnClose
                >
                    {videoModal && (
                        <video
                            src={videoModal.src}
                            controls
                            autoPlay
                            playsInline
                            style={{ width: "100%", maxHeight: "70vh", borderRadius: "8px" }}
                        />
                    )}
                </Modal>

            </div>
        </div>
    );
}