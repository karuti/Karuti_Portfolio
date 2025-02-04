import type { Metadata } from "next";
import GlobalStyle from "../app/styles/GlobalStyles.js"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Karuti",
  description: "Product & Design Portfolio",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        {children}
        <Analytics/>
      </body>
  
    
    </html>
  );
}





