"use client";
import { useState } from "react";
import { ConfigProvider, theme, Button } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";

export default function ThemeProvider() {
    const [isDark, setIsDark] = useState(false);

    return (
        <ConfigProvider
            theme={{
                algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
            }}
        >
            <Button
                type="text"
                icon={isDark ? <MoonOutlined /> : <SunOutlined />}
                onClick={() => setIsDark(!isDark)}
            />
        </ConfigProvider>
    );
}