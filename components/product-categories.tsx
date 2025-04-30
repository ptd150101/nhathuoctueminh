import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Hỗ Trợ Tình Dục",
    image: "/placeholder.svg?height=200&width=200",
    productCount: "5 PRODUCTS",
    href: "/ho-tro-tinh-duc",
  },
  {
    id: 2,
    name: "Mẹ Và Bé",
    image: "/placeholder.svg?height=200&width=200",
    productCount: "81 PRODUCTS",
    href: "/me-va-be",
  },
  {
    id: 3,
    name: "Thực Phẩm Chức Năng",
    image: "/placeholder.svg?height=200&width=200",
    productCount: "423 PRODUCTS",
    href: "/thuc-pham-chuc-nang",
  },
  {
    id: 4,
    name: "Sữa Bột",
    image: "/placeholder.svg?height=200&width=200",
    productCount: "47 PRODUCTS",
    href: "/sua-bot",
  },
  {
    id: 5,
    name: "Sinh Lý - Nội Tiết Tố",
    image: "/placeholder.svg?height=200&width=200",
    productCount: "6 PRODUCTS",
    href: "/sinh-ly-noi-tiet-to",
  },
  {
    id: 6,
    name: "Hỗ Trợ Làm Đẹp",
    image: "/placeholder.svg?height=200&width=200",
    productCount: "34 PRODUCTS",
    href: "/ho-tro-lam-dep",
  },
]

export default function ProductCategories() {
  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold text-center mb-8">DANH MỤC SẢN PHẨM</h2>

      <div className="relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              href={category.href}
              key={category.id}
              className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
            >
              <div className="aspect-square relative mb-4 mx-auto max-w-[150px]">
                <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-contain" />
              </div>
              <h3 className="font-medium text-sm mb-1">{category.name}</h3>
              <p className="text-xs text-gray-500">{category.productCount}</p>
            </Link>
          ))}
        </div>

        {/* Navigation buttons - for mobile scrolling */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full md:hidden"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full md:hidden"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
