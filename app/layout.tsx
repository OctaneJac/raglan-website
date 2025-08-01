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
{/*         <Script id="custom-tracker" strategy="afterInteractive">
          {`(function() {
            var s = document.createElement('script');
            s.src = "https://aa257b55d88c.ngrok-free.app/static/tracker.js?funnel_id=e49262ca-ed87-47bb-ade6-545a020f9b86";
            s.async = true;
            document.head.appendChild(s);
          })();`}
        </Script> */}
          <Script
            id="custom-tracker"
            src="https://aa257b55d88c.ngrok-free.app/static/tracker.js?funnel_id=e49262ca-ed87-47bb-ade6-545a020f9b86"
            strategy="afterInteractive"
            type="application/javascript"
            onError={(e) => {
              console.error('Failed to load tracker.js:', e);
              console.log('Error details:', e.message, e.target.src);
            }}
            onLoad={() => {
              console.log('tracker.js loaded successfully');
            }}
          />
      </head>
      <body className={inter.className}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
