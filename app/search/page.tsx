"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react"

// Sample data - would normally come from an API
const products = [
  {
    id: 1,
    name: "Viên uống bổ sung Vitamin tổng hợp",
    brand: "NUTRI-HMO",
    price: 350000,
    originalPrice: 420000,
    discount: 17,
    image: "/placeholder.svg?height=200&width=200",
    category: "Thực phẩm chức năng",
  },
  {
    id: 2,
    name: "Sữa bột dinh dưỡng Ensure Gold",
    brand: "ENSURE",
    price: 420000,
    originalPrice: null,
    discount: null,
    image: "/placeholder.svg?height=200&width=200",
    category: "Sữa bột",
  },
  {
    id: 3,
    name: "Viên uống Blackmores Cholesterol Health",
    brand: "BLACKMORES",
    price: 580000,
    originalPrice: 650000,
    discount: 11,
    image: "/placeholder.svg?height=200&width=200",
    category: "Thực phẩm chức năng",
  },
  {
    id: 4,
    name: "Viên uống hỗ trợ sinh lý nam",
    brand: "NUTRI-HMO",
    price: 480000,
    originalPrice: null,
    discount: null,
    image: "/placeholder.svg?height=200&width=200",
    category: "Sinh lý - Nội tiết tố",
  },
  {
    id: 5,
    name: "Viên uống Collagen",
    brand: "NUTRI-HMO",
    price: 450000,
    originalPrice: 520000,
    discount: 13,
    image: "/placeholder.svg?height=200&width=200",
    category: "Hỗ trợ làm đẹp",
  },
  {
    id: 6,
    name: "Sữa rửa mặt dưỡng ẩm",
    brand: "LA ROCHE-POSAY",
    price: 320000,
    originalPrice: null,
    discount: null,
    image: "/placeholder.svg?height=200&width=200",
    category: "Dược mỹ phẩm",
  },
]

const categories = [
  { id: 1, name: "Thực phẩm chức năng", count: 423 },
  { id: 2, name: "Mẹ và bé", count: 81 },
  { id: 3, name: "Sữa bột", count: 47 },
  { id: 4, name: "Dược mỹ phẩm", count: 156 },
  { id: 5, name: "Chăm sóc cá nhân", count: 92 },
  { id: 6, name: "Sinh lý - Nội tiết tố", count: 6 },
  { id: 7, name: "Hỗ trợ làm đẹp", count: 34 },
]

const brands = [
  { id: 1, name: "NUTRI-HMO", count: 45 },
  { id: 2, name: "BLACKMORES", count: 32 },
  { id: 3, name: "ENSURE", count: 12 },
  { id: 4, name: "LA ROCHE-POSAY", count: 28 },
  { id: 5, name: "DUREX", count: 15 },
]

export default function SearchPage() {
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 1000000])

  // Format currency in VND
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(amount)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <div className="flex-1 relative">
          <Input type="text" placeholder="Tìm kiếm sản phẩm..." className="pl-10" defaultValue="vitamin" />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
        <Button className="ml-2 bg-blue-700 hover:bg-blue-800">Tìm kiếm</Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters - Mobile */}
        <div className="lg:hidden mb-4">
          <Button
            variant="outline"
            className="w-full flex items-center justify-between"
            onClick={() => setShowFilters(!showFilters)}
          >
            <div className="flex items-center">
              <SlidersHorizontal className="mr-2 h-5 w-5" />
              Bộ lọc
            </div>
            <ChevronDown className={`h-5 w-5 transition-transform ${showFilters ? "rotate-180" : ""}`} />
          </Button>

          {showFilters && (
            <div className="mt-4 border rounded-lg p-4 bg-white">
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-4">Khoảng giá</h3>
                <Slider
                  defaultValue={[0, 1000000]}
                  max={2000000}
                  step={50000}
                  onValueChange={(value) => setPriceRange(value as number[])}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm">
                  <span>{formatCurrency(priceRange[0])}</span>
                  <span>{formatCurrency(priceRange[1])}</span>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-medium mb-4">Danh mục</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                      <Checkbox id={`category-${category.id}`} />
                      <label htmlFor={`category-${category.id}`} className="ml-2 text-sm cursor-pointer flex-1">
                        {category.name}
                      </label>
                      <span className="text-xs text-gray-500">({category.count})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div>
                <h3 className="font-medium mb-4">Thương hiệu</h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand.id} className="flex items-center">
                      <Checkbox id={`brand-${brand.id}`} />
                      <label htmlFor={`brand-${brand.id}`} className="ml-2 text-sm cursor-pointer flex-1">
                        {brand.name}
                      </label>
                      <span className="text-xs text-gray-500">({brand.count})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Filters - Desktop */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="border rounded-lg p-4 bg-white sticky top-4">
            <h2 className="font-bold text-lg mb-4">Bộ lọc</h2>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-medium mb-4">Khoảng giá</h3>
              <Slider
                defaultValue={[0, 1000000]}
                max={2000000}
                step={50000}
                onValueChange={(value) => setPriceRange(value as number[])}
                className="mb-2"
              />
              <div className="flex justify-between text-sm">
                <span>{formatCurrency(priceRange[0])}</span>
                <span>{formatCurrency(priceRange[1])}</span>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-medium mb-4">Danh mục</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center">
                    <Checkbox id={`category-desktop-${category.id}`} />
                    <label htmlFor={`category-desktop-${category.id}`} className="ml-2 text-sm cursor-pointer flex-1">
                      {category.name}
                    </label>
                    <span className="text-xs text-gray-500">({category.count})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div>
              <h3 className="font-medium mb-4">Thương hiệu</h3>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <div key={brand.id} className="flex items-center">
                    <Checkbox id={`brand-desktop-${brand.id}`} />
                    <label htmlFor={`brand-desktop-${brand.id}`} className="ml-2 text-sm cursor-pointer flex-1">
                      {brand.name}
                    </label>
                    <span className="text-xs text-gray-500">({brand.count})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Results */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold">Kết quả tìm kiếm: "vitamin"</h1>
            <div className="flex items-center">
              <span className="text-sm mr-2">Sắp xếp theo:</span>
              <select className="border rounded p-2 text-sm">
                <option>Phổ biến nhất</option>
                <option>Giá: Thấp đến cao</option>
                <option>Giá: Cao đến thấp</option>
                <option>Mới nhất</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product) => (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white"
              >
                <div className="aspect-square relative mb-4">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
                  {product.discount && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-medium px-2 py-1 rounded">
                      -{product.discount}%
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase mb-1">{product.brand}</p>
                  <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center">
                    <span className="font-bold text-red-600 mr-2">{formatCurrency(product.price)}</span>
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through text-xs">
                        {formatCurrency(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <nav className="flex items-center gap-1">
              <Button variant="outline" size="icon" disabled>
                &lt;
              </Button>
              <Button variant="outline" size="sm" className="bg-blue-700 text-white">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="icon">
                &gt;
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
