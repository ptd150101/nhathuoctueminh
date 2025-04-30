"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart, ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categories = [
    { name: "THỰC PHẨM CHỨC NĂNG", href: "/thuc-pham-chuc-nang", hasSubmenu: true },
    { name: "MẸ VÀ BÉ", href: "/me-va-be", hasSubmenu: false },
    { name: "SỮA BỘT", href: "/sua-bot", hasSubmenu: false },
    { name: "CHĂM SÓC CÁ NHÂN", href: "/cham-soc-ca-nhan", hasSubmenu: true },
    { name: "DƯỢC MỸ PHẨM", href: "/duoc-my-pham", hasSubmenu: true },
    { name: "GÓC SỨC KHỎE", href: "/goc-suc-khoe", hasSubmenu: false },
  ]

  return (
    <header className="w-full">
      {/* Top header */}
      <div className="bg-blue-700 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-white text-2xl font-bold mb-4 md:mb-0">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-3xl">NHÀ THUỐC</span>
              <span className="text-4xl font-bold">TUỆ MINH</span>
            </div>
          </Link>

          {/* Search bar */}
          <div className="flex w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
            <Input
              type="text"
              placeholder="Tìm tên thuốc, TPCN, Bệnh lý..."
              className="rounded-r-none border-r-0 h-10"
            />
            <Button className="rounded-l-none bg-yellow-500 hover:bg-yellow-600 h-10 px-3">
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Right buttons */}
          <div className="flex items-center gap-4">
            <Button variant="outline" className="bg-white text-blue-700 border-white hover:bg-blue-50">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Chụp Hình Đơn Thuốc"
                width={24}
                height={24}
                className="mr-2"
              />
              Chụp Hình
              <br />
              Đơn Thuốc
            </Button>
            <Button variant="outline" className="bg-white text-blue-700 border-white hover:bg-blue-50">
              <ShoppingCart className="mr-2 h-5 w-5" />
              CART
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          {/* Mobile menu */}
          <div className="md:hidden flex justify-between items-center py-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="text-lg font-medium hover:text-blue-700 flex items-center justify-between"
                    >
                      {category.name}
                      {category.hasSubmenu && <ChevronDown className="h-4 w-4" />}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex">
            <ul className="flex flex-wrap">
              {categories.map((category) => (
                <li key={category.name} className="relative group">
                  <Link
                    href={category.href}
                    className="block px-4 py-3 text-sm font-medium hover:text-blue-700 flex items-center"
                  >
                    {category.name}
                    {category.hasSubmenu && <ChevronDown className="h-4 w-4 ml-1" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
