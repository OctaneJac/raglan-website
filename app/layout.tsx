import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
// import ScriptInjector from "@/components/ScriptInjector";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raglan - Automation Agency",
  description: "Automation and custom dashboards agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <Script
          src="https://backend-fastapi-production-8800.up.railway.app/static/tracker.js?funnel_id=277d5bb9-a2cb-4833-bd51-434ef76eece9&step_id=node-3"
          strategy="beforeInteractive"
        />
        {/* <ScriptInjector /> */}
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
