import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EmpowerEd | Financial Education & Digital Wallet for Youth",
  description:
    "EmpowerEd - Revolutionizing financial education for youth with digital wallets and curated learning courses.",
  keywords: "digital wallet, youth finance, financial literacy, edtech, learning courses, savings platform",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${inter.className} font-sans antialiased text-gray-800`}>
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
