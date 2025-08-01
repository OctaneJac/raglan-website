import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";


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
      <head>
      </head>
      <Script
        src="https://4f4b7a416b1b.ngrok-free.app/static/tracker.js?funnel_id=e49262ca-ed87-47bb-ade6-545a020f9b86"
        strategy="afterInteractive" // or "lazyOnload" or "afterInteractive"
      />
      <body className={inter.className}>
{/*         <Script id="custom-tracker" strategy="afterInteractive">
          {`(function() {
            var s = document.createElement('script');
            s.src = "https://950234af2700.ngrok-free.app/static/tracker.js?funnel_id=e49262ca-ed87-47bb-ade6-545a020f9b86";
            s.async = true;
            document.head.appendChild(s);
          })();`}
        </Script> */}
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
