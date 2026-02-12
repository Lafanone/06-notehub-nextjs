import type { Metadata } from "next";
import "modern-normalize/modern-normalize.css";
import "./globals.css";
import Providers from "../components/Providers";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "NoteHub Next.js",
  description: "Manage your notes effectively",
};
export default function RootLayout({
  children,
}: Readonly<{
children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ flex: 1 }}>
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
