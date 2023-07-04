import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      {/* Flickering occurs when you add this next/font `style` attribute. */}
      <body style={inter.style}>{children}</body>
    </html>
  )
}
