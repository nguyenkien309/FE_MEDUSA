import Footer from "@modules/layout/templates/footer"
import Header from "@modules/layout/templates/header"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <div className="relative">{children}</div>
      <Footer />
    </>
  )
}
