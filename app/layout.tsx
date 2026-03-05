import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammed Hashil — Full Stack Developer",
  description: "Full Stack Developer with 2+ years of experience building scalable web applications. Proficient in MERN stack, Next.js, NestJS, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/bootstrap-grid.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        <link rel="stylesheet" href="/css/swiper.min.css" />
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
