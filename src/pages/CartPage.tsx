import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Trash2 } from "lucide-react"

export default function CartPage() {
  // This would normally come from a state management solution or API
  const cartItems = [
    {
      id: 1,
      name: "Viên uống bổ sung Vitamin",
      image: "/placeholder.svg",
      price: 350000,
      quantity: 2,
    },
    {
      id: 2,
      name: "Sữa bột dinh dưỡng",
      image: "/placeholder.svg",
      price: 420000,
      quantity: 1,
    },
  ]

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 30000
  const total = subtotal + shipping

  // Format currency in VND
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(amount)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Giỏ Hàng</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg mb-4">Giỏ hàng của bạn đang trống</p>
          <Link to="/">
            <Button>Tiếp tục mua sắm</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Sản phẩm</th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-500">Số lượng</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">Thành tiền</th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-500">Xóa</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-4">
                        <div className="flex items-center">
                          <div className="h-16 w-16 relative flex-shrink-0">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-500">{formatCurrency(item.price)}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center justify-center">
                          <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                            -
                          </button>
                          <span className="mx-2 w-8 text-center">{item.quantity}</span>
                          <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-right text-sm font-medium text-gray-900">
                        {formatCurrency(item.price * item.quantity)}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button className="text-red-500 hover:text-red-700">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium mb-4">Tóm tắt đơn hàng</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tạm tính</span>
                  <span className="font-medium">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Phí vận chuyển</span>
                  <span className="font-medium">{formatCurrency(shipping)}</span>
                </div>
                <div className="border-t pt-4 flex justify-between">
                  <span className="font-medium">Tổng cộng</span>
                  <span className="font-bold text-lg">{formatCurrency(total)}</span>
                </div>
              </div>
              <Button className="w-full mt-6 bg-blue-700 hover:bg-blue-800">Tiến hành thanh toán</Button>
              <Link to="/" className="block text-center mt-4 text-blue-700 hover:underline">
                Tiếp tục mua sắm
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
