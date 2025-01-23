import type { Metadata } from "next";
import GlobalStyle from "../app/styles/GlobalStyles.js"

export const metadata: Metadata = {
  title: "SOIE & SCALE",
  description: "Business by Design",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        {children}
      </body>
    </html>
  );
}





