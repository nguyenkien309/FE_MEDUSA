import AboutTemplate from "@modules/about/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "About page",
}

export default async function About() {
  return <AboutTemplate />
}
