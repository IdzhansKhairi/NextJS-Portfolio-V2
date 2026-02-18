"use client";

import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ThemeProvider from "@/app/components/ThemeProvider";

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider>
            <div className="d-flex flex-column vh-100 site-wrapper">
                <Header />

                <main className="p-3 flex-grow-1" style={{ paddingTop: "5rem !important", paddingBottom: "5rem !important" }}>
                    {children}
                </main>

                <Footer />
            </div>
        </ThemeProvider>
    );
}
