import { Metadata } from "next"
import "styles/globals.css"
import { Poppins, Volkhov } from "next/font/google"
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  // variable:
  variable: "--font-poppins",
})

const volkhov = Volkhov({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-volkhov",
})

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body className={`${poppins.className} ${volkhov.className}`}>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
