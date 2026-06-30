import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ajay Shaganti | IT Support & Infrastructure Professional",
  description:
    "IT professional with expertise in desktop support, service desk operations, cloud platforms (AWS), and software engineering. Based in Melbourne, Australia.",
  keywords: "Ajay Shaganti, portfolio, IT support, desktop support, AWS, cloud, MERN stack, Flutter",
  authors: [{ name: "Ajay Shaganti" }],
  openGraph: {
    title: "Ajay Shaganti | IT Support & Infrastructure Professional",
    description:
      "IT professional with expertise in desktop support, service desk operations, cloud platforms, and software engineering.",
    url: "https://ajayshaganti.com",
    siteName: "Ajay Shaganti Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakartaSans.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-[family-name:var(--font-inter)] bg-white text-gray-800 antialiased">
        {children}
      </body>
    </html>
  );
}
