import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/navbars/Navbar";
import Footer from "@/components/footers/Footer";
import { ToastProvider } from "@/provider/ToastProvider";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Formora | Crafted Furniture for Modern Living",
  description:
    "Shop premium handcrafted furniture from Formora. Discover cozy sofas, elegant dining sets, and custom woodwork built by expert carpenters. Easy delivery, secure payment, and tailored comfort.",
  keywords: [
    "Formora",
    "furniture",
    "custom furniture",
    "wooden furniture",
    "living room furniture",
    "bedroom furniture",
    "home decor",
    "sofas",
    "dining table",
    "handcrafted",
    "furniture eCommerce",
    "Bangladesh furniture"
  ],
  openGraph: {
    title: "Formora | Crafted Furniture for Modern Living",
    description:
      "Explore handcrafted furniture tailored to your space and lifestyle. Direct from carpenters, with home delivery and secure payments.",
    siteName: "Formora",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Formora | Crafted Furniture for Modern Living",
    description:
      "Shop premium handcrafted furniture directly from skilled carpenters. Designed for comfort, built to last."
  }
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />

        {/* Apple Touch Icon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />

        {/* Web Manifest */}
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
