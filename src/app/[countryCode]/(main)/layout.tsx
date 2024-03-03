import { Metadata } from "next"

import Footer from "@modules/layout/templates/footer"
import Header from "@modules/layout/templates/header"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-118px)]">{props.children}</div>
      <Footer />
    </>
  )
}
