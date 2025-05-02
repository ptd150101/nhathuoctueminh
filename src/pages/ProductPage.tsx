"use client"

import { useParams, Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Star, ShoppingCart, Heart, Share2 } from "lucide-react"

// This would normally come from a database or API
const getProductById = (id: string) => {
  return {
    id,
    name: "Viên uống bổ sung Vitamin tổng hợp",
    brand: "NUTRI-HMO",
    price: 350000,
    originalPrice: 420000,
    discount: 17,
    rating: 4.8,
    reviewCount: 124,
    stock: 50,
    description:
      "Viên uống bổ sung Vitamin tổng hợp giúp tăng cường sức khỏe, nâng cao sức đề kháng và bổ sung các dưỡng chất thiết yếu cho cơ thể.",
    features: [
      "Bổ sung vitamin và khoáng chất thiết yếu",
      "Tăng cường hệ miễn dịch",
      "Giảm mệt mỏi và căng thẳng",
      "Cải thiện sức khỏe tổng thể",
    ],
    usage: "Uống 1 viên mỗi ngày sau bữa ăn sáng với nhiều nước.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Thành phần chính": "Vitamin A, B, C, D, E, Kẽm, Sắt, Magie",
      "Xuất xứ": "Việt Nam",
      "Quy cách đóng gói": "Hộp 60 viên",
      "Hạn sử dụng": "36 tháng kể từ ngày sản xuất",
      "Bảo quản": "Nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp",
    },
    relatedProducts: [
      {
        id: "2",
        name: "Viên uống Omega-3",
        image: "/placeholder.svg",
        price: 280000,
      },
      {
        id: "3",
        name: "Viên uống Canxi",
        image: "/placeholder.svg",
        price: 320000,
      },
      {
        id: "4",
        name: "Viên uống Collagen",
        image: "/placeholder.svg",
        price: 450000,
      },
    ],
  }
}

export default function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const product = getProductById(id || "1")

  // Format currency in VND
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(amount)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link to="/" className="text-blue-700 hover:underline">
          Trang chủ
        </Link>{" "}
        /{" "}
        <Link to="/thuc-pham-chuc-nang" className="text-blue-700 hover:underline">
          Thực phẩm chức năng
        </Link>{" "}
        / <span className="text-gray-500">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product images */}
        <div>
          <div className="relative aspect-square mb-4 border rounded-lg overflow-hidden">
            <img
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {product.images.map((image, index) => (
              <div key={index} className="relative aspect-square border rounded-lg overflow-hidden">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Hình ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product info */}
        <div>
          <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>

          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              {product.rating} ({product.reviewCount} đánh giá)
            </span>
          </div>

          <div className="mb-6">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-red-600 mr-2">{formatCurrency(product.price)}</span>
              {product.originalPrice && (
                <span className="text-gray-500 line-through text-sm">{formatCurrency(product.originalPrice)}</span>
              )}
              {product.discount && (
                <span className="ml-2 bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded">
                  -{product.discount}%
                </span>
              )}
            </div>
            <p className="text-green-600 text-sm mt-1">Còn {product.stock} sản phẩm</p>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 mb-4">{product.description}</p>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex items-center border rounded-md">
              <button className="w-10 h-10 flex items-center justify-center border-r">-</button>
              <input type="number" min="1" defaultValue="1" className="w-16 h-10 text-center" />
              <button className="w-10 h-10 flex items-center justify-center border-l">+</button>
            </div>
            <Button className="flex-1 bg-blue-700 hover:bg-blue-800">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Thêm vào giỏ hàng
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Product details tabs */}
      <Tabs defaultValue="details" className="mb-12">
        <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
          <TabsTrigger
            value="details"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-700 data-[state=active]:bg-transparent px-6 py-3"
          >
            Chi tiết sản phẩm
          </TabsTrigger>
          <TabsTrigger
            value="usage"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-700 data-[state=active]:bg-transparent px-6 py-3"
          >
            Hướng dẫn sử dụng
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-700 data-[state=active]:bg-transparent px-6 py-3"
          >
            Đánh giá
          </TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Mô tả sản phẩm</h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt,
                nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
                tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Thông số kỹ thuật</h3>
              <table className="w-full">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key} className="border-b">
                      <td className="py-2 font-medium">{key}</td>
                      <td className="py-2 text-gray-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="usage" className="pt-6">
          <h3 className="text-lg font-medium mb-4">Hướng dẫn sử dụng</h3>
          <p className="text-gray-700 mb-4">{product.usage}</p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Lưu ý:</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Thực phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh.</li>
              <li>Không dùng cho người mẫn cảm với bất kỳ thành phần nào của sản phẩm.</li>
              <li>Không dùng vượt quá liều lượng được khuyến cáo.</li>
              <li>
                Tham khảo ý kiến bác sĩ trước khi sử dụng nếu bạn đang mang thai, cho con bú hoặc đang điều trị bệnh.
              </li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="pt-6">
          <div className="flex items-center mb-6">
            <div className="mr-4">
              <div className="text-5xl font-bold text-center">{product.rating}</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-500 text-center mt-1">{product.reviewCount} đánh giá</div>
            </div>
            <div className="flex-1">
              {[5, 4, 3, 2, 1].map((star) => {
                const percentage = star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 5 : star === 2 ? 3 : 2
                return (
                  <div key={star} className="flex items-center mb-1">
                    <span className="text-sm text-gray-600 w-6">{star}</span>
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-2" />
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${percentage}%` }}></div>
                    </div>
                    <span className="text-sm text-gray-600 ml-2">{percentage}%</span>
                  </div>
                )
              })}
            </div>
          </div>

          <Button className="mb-8">Viết đánh giá</Button>

          <div className="space-y-6">
            {/* Sample reviews */}
            <div className="border-b pb-6">
              <div className="flex items-center mb-2">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="font-medium">Nguyễn Văn A</span>
                <span className="mx-2">•</span>
                <span className="text-gray-500 text-sm">12/04/2023</span>
              </div>
              <p className="text-gray-700">
                Sản phẩm rất tốt, tôi đã sử dụng được 1 tháng và thấy sức khỏe cải thiện rõ rệt. Giao hàng nhanh, đóng
                gói cẩn thận. Sẽ mua lại!
              </p>
            </div>

            <div className="border-b pb-6">
              <div className="flex items-center mb-2">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="font-medium">Trần Thị B</span>
                <span className="mx-2">•</span>
                <span className="text-gray-500 text-sm">28/03/2023</span>
              </div>
              <p className="text-gray-700">
                Sản phẩm khá tốt, giá cả hợp lý. Tôi cảm thấy có nhiều năng lượng hơn sau khi sử dụng. Chỉ tiếc là viên
                hơi to, hơi khó nuốt.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Related products */}
      <div>
        <h2 className="text-xl font-bold mb-6">Sản phẩm liên quan</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {product.relatedProducts.map((relatedProduct) => (
            <Link
              to={`/product/${relatedProduct.id}`}
              key={relatedProduct.id}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="aspect-square relative mb-4">
                <img
                  src={relatedProduct.image || "/placeholder.svg"}
                  alt={relatedProduct.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="font-medium text-sm mb-2">{relatedProduct.name}</h3>
                <p className="text-red-600 font-medium">{formatCurrency(relatedProduct.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
