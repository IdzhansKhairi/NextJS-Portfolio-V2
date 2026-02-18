import type { Metadata, Viewport } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "antd/dist/reset.css";
import "./globals.css";

import { Plus_Jakarta_Sans } from "next/font/google";

// Configure the font
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Select weights you need
  variable: "--font-jakarta", // Optional: Define a CSS variable
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Idzhans Khairi",
  description: "Idzhans Khairi Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <main className={jakarta.className}>{children}</main>
      </body>
    </html>
  );
}
