import type React from "react"
import { Helmet } from "react-helmet"
import Header from "./Header"
import Footer from "./Footer"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Helmet>
        <title>Nhà Thuốc Tuệ Minh</title>
        <meta name="description" content="Nhà thuốc uy tín hàng đầu Việt Nam" />
      </Helmet>
      <div className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
