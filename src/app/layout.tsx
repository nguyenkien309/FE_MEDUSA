import { Metadata } from "next"
import "styles/globals.css"
import { Poppins, Volkhov } from "next/font/google"
import Script from "next/script"
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
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
      <head>
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></Script>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
          rel="stylesheet"
        />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></Script>
      </head>
      <body className={`${poppins.className} ${volkhov.className}`}>
        <main className="relative w-full">{props.children}</main>
      </body>
    </html>
  )
}
