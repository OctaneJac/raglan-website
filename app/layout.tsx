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
      <head />
      <body className={inter.className}>
        {/* ✅ Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-W7K6EBHZQ9"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-W7K6EBHZQ9', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* ✅ LiveFeed / LeadFeeder tracking script */}
        <Script
          id="leadfeeder-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(ss, ex) {
                window.ldfdr = window.ldfdr || function() {
                  (ldfdr._q = ldfdr._q || []).push([].slice.call(arguments));
                };
                (function(d, s) {
                  var fs = d.getElementsByTagName(s)[0];
                  function ce(src) {
                    var cs = d.createElement(s);
                    cs.src = src;
                    cs.async = 1;
                    fs.parentNode.insertBefore(cs, fs);
                  }
                  ce('https://sc.lfeeder.com/lftracker_v1_' + ss + (ex ? '_' + ex : '') + '.js');
                })(document, 'script');
              })('JMvZ8gnjv9da2pOd');
            `,
          }}
        />

        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
