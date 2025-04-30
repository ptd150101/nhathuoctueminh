import Link from "next/link"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Viên uống bổ sung Vitamin",
    image: "/placeholder.svg?height=200&width=200",
    href: "/product/1",
    brand: "NUTRI-HMO",
  },
  {
    id: 2,
    name: "Sữa bột dinh dưỡng",
    image: "/placeholder.svg?height=200&width=200",
    href: "/product/2",
    brand: "ENSURE",
  },
  {
    id: 3,
    name: "Viên uống hỗ trợ tim mạch",
    image: "/placeholder.svg?height=200&width=200",
    href: "/product/3",
    brand: "BLACKMORES",
  },
  {
    id: 4,
    name: "Thực phẩm bổ sung Omega-3",
    image: "/placeholder.svg?height=200&width=200",
    href: "/product/4",
    brand: "NUTRI-HMO",
  },
]

export default function BestSellers() {
  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-8">Sản phẩm bán chạy</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            href={product.href}
            key={product.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="aspect-square relative mb-4">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500 uppercase mb-1">{product.brand}</p>
              <h3 className="font-medium text-sm">{product.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
