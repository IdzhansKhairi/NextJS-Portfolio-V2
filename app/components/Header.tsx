"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layout, Menu, Tabs } from "antd";
import {
    UserOutlined,
    ReadOutlined,
    LaptopOutlined,
    ToolOutlined,
    ProjectOutlined,
    HeartOutlined,
    MailOutlined,
} from "@ant-design/icons";
import "./components.css";

import Theme from "@/app/components/Theme";

const { Header } = Layout;

export default function Navbar() {
    const pathname = usePathname();
    const activeKey = pathname.split("/")[1] || "about";

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
        {
            key: "contact",
            icon: <MailOutlined className="text-secondary" />,
            label: <Link href="/contact" className="text-secondary text-decoration-none">Contact</Link>
        },
    ];

    return (
        <Header className="px-3 py-2 border-bottom">
            <div className="row d-flex align-items-center">
                <div className="col-4 d-flex align-items-center">
                    <img className="rounded-circle border border-2 me-2 p-1" style={{ height: "43px", objectFit: "cover" }} src="/images/portfolio-logo.png" alt="Idzhans Khairi" />
                    <h4 className="p-0 m-0 fw-bold">Idzhans<span className="fw-bold text-primary">.</span></h4>
                </div>

                <div className="col-8 d-flex align-items-center justify-content-end">
                    <div className="d-flex pe-3">
                        <Tabs className="" activeKey={activeKey} items={menuItems} tabBarGutter={16} />
                    </div>
                    <div className="d-flex border-start ps-2">
                        <Theme />
                    </div>
                </div>

            </div>
        </Header>
    );
}