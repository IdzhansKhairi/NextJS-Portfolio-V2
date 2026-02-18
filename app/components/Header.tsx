"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layout, Tabs, Drawer } from "antd";
import {
    UserOutlined,
    ReadOutlined,
    LaptopOutlined,
    ToolOutlined,
    ProjectOutlined,
    HeartOutlined,
    MenuOutlined,
    CloseOutlined,
} from "@ant-design/icons";
import "./components.css";

import Theme from "@/app/components/Theme";

const { Header } = Layout;

export default function Navbar() {
    const pathname = usePathname();
    const activeKey = pathname.split("/")[1] || "about";
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const menuItems = [
        {
            key: "about",
            icon: <UserOutlined className="text-secondary" />,
            label: <Link href="/about" className="text-secondary text-decoration-none">About</Link>
        },
        {
            key: "education",
            icon: <ReadOutlined className="text-secondary" />,
            label: <Link href="/education" className="text-secondary text-decoration-none">Education</Link>
        },
        {
            key: "experience",
            icon: <LaptopOutlined className="text-secondary" />,
            label: <Link href="/experience" className="text-secondary text-decoration-none">Experience</Link>
        },
        {
            key: "skills",
            icon: <ToolOutlined className="text-secondary" />,
            label: <Link href="/skills" className="text-secondary text-decoration-none">Skills</Link>
        },
        {
            key: "projects",
            icon: <ProjectOutlined className="text-secondary" />,
            label: <Link href="/projects" className="text-secondary text-decoration-none">Projects</Link>
        },
        {
            key: "interests",
            icon: <HeartOutlined className="text-secondary" />,
            label: <Link href="/interests" className="text-secondary text-decoration-none">Interests</Link>
        },
    ];

    return (
        <>
            <Header className="px-3 py-2 border-bottom header-wrapper">
                <div className="d-flex align-items-center justify-content-between">
                    {/* Logo */}
                    <div className="d-flex align-items-center">
                        <img className="rounded-circle border border-2 me-2 p-1" style={{ height: "43px", objectFit: "cover" }} src="/images/portfolio-logo.png" alt="Idzhans Khairi" />
                        <h4 className="p-0 m-0 fw-bold">Idzhans<span className="fw-bold text-primary">.</span></h4>
                    </div>

                    {/* Desktop Tabs */}
                    <div className="d-none d-lg-flex align-items-center">
                        <div className="d-flex pe-3">
                            <Tabs activeKey={activeKey} items={menuItems} tabBarGutter={16} />
                        </div>
                        <div className="d-flex border-start ps-2">
                            <Theme />
                        </div>
                    </div>

                    {/* Mobile: Theme + Hamburger */}
                    <div className="d-flex d-lg-none align-items-center gap-2">
                        <Theme />
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setMobileMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <MenuOutlined style={{ fontSize: "20px" }} />
                        </button>
                    </div>
                </div>
            </Header>

            {/* Mobile Drawer */}
            <Drawer
                title={
                    <div className="d-flex align-items-center">
                        <img className="rounded-circle border border-2 me-2 p-1" style={{ height: "36px", objectFit: "cover" }} src="/images/portfolio-logo.png" alt="Idzhans Khairi" />
                        <span className="fw-bold">Idzhans<span className="text-primary">.</span></span>
                    </div>
                }
                placement="right"
                onClose={() => setMobileMenuOpen(false)}
                open={mobileMenuOpen}
                width={280}
                closeIcon={<CloseOutlined />}
            >
                <nav className="mobile-nav">
                    {menuItems.map((item) => (
                        <Link
                            key={item.key}
                            href={`/${item.key}`}
                            className={`mobile-nav-item ${activeKey === item.key ? "active" : ""}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="mobile-nav-icon">{item.icon}</span>
                            <span className="mobile-nav-label">
                                {item.key.charAt(0).toUpperCase() + item.key.slice(1)}
                            </span>
                        </Link>
                    ))}
                </nav>
            </Drawer>
        </>
    );
}