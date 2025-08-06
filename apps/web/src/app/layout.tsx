import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/navbars/TopNavbar";
import Footer from "@/components/footers/Footer";

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
      <body className={`${poppins.className} antialiased`}>
        <TopNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
