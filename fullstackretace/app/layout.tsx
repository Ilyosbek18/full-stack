import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WebDev Pro - Zamonaviy Web Yechimlari",
  description:
    "Professional web development xizmatlari. React, Next.js, Node.js va zamonaviy texnologiyalar bilan mukammal web ilovalar yaratamiz.",
  keywords: "web development, full-stack, React, Next.js, Node.js, TypeScript, Uzbekistan",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
