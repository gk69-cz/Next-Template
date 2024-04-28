import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/component/sidebar";
import NavigationMobile from "@/components/component/navigation";
import Document, { Html, Head, Main, NextScript } from 'next/document';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airwise",
  description: "Your destination for seamless travel experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
          {/* Add the Google AdSense meta tag */}
          <meta name="google-adsense-account" content="ca-pub-4485865253703650" />

          {/* Other meta tags and external scripts */}
        </Head>

      <body className={inter.className}>
        <div className='hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900'>
          <Sidebar />
        </div>
        <div className='md:pl-72'>
          <div className='flex items-center p-4 mt-9 md:mt-0'>
          <NavigationMobile />
          {children}
          </div>
        </div>
      </body>
    </html>
  );
}
