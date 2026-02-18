"use client";

import { Button } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <Button
            type="text"
            icon={isDark ? <MoonOutlined /> : <SunOutlined />}
            onClick={toggleTheme}
        />
    );
}