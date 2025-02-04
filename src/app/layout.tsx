import type { Metadata } from "next";
import GlobalStyle from "../app/styles/GlobalStyles.js"
import { Analytics } from "@vercel/analytics/react"
import Head from 'next/head';

export const metadata: Metadata = {
  title: "Karuti",
  description: "Product & Design Portfolio",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        {/* Preload your custom font */}
        <link
          rel="preload"
          href="/fonts/GeneralSans-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <GlobalStyle />
        {children}
        <Analytics/>
      </body>
  
    
    </html>
  );
}





