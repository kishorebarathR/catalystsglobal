import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import Header from "../components/SharedComponents/Header"
import Footer from "../components/SharedComponents/Footer"

// const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
