import Link from "next/link"
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nhà Thuốc Tuệ Minh</h3>
            <p className="mb-4">Thương hiệu uy tín hàng đầu Việt Nam từ năm 1988</p>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-5 w-5 flex-shrink-0" />
              <p>123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Phone className="h-5 w-5 flex-shrink-0" />
              <p>1900 1234</p>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-5 w-5 flex-shrink-0" />
              <p>info@nhathuoctueminh.vn</p>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-blue-200">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-blue-200">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-blue-200">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Danh Mục Sản Phẩm</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/thuc-pham-chuc-nang" className="hover:text-blue-200">
                  Thực Phẩm Chức Năng
                </Link>
              </li>
              <li>
                <Link href="/me-va-be" className="hover:text-blue-200">
                  Mẹ Và Bé
                </Link>
              </li>
              <li>
                <Link href="/sua-bot" className="hover:text-blue-200">
                  Sữa Bột
                </Link>
              </li>
              <li>
                <Link href="/cham-soc-ca-nhan" className="hover:text-blue-200">
                  Chăm Sóc Cá Nhân
                </Link>
              </li>
              <li>
                <Link href="/duoc-my-pham" className="hover:text-blue-200">
                  Dược Mỹ Phẩm
                </Link>
              </li>
              <li>
                <Link href="/goc-suc-khoe" className="hover:text-blue-200">
                  Góc Sức Khỏe
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hỗ Trợ Khách Hàng</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/huong-dan-mua-hang" className="hover:text-blue-200">
                  Hướng Dẫn Mua Hàng
                </Link>
              </li>
              <li>
                <Link href="/chinh-sach-doi-tra" className="hover:text-blue-200">
                  Chính Sách Đổi Trả
                </Link>
              </li>
              <li>
                <Link href="/chinh-sach-van-chuyen" className="hover:text-blue-200">
                  Chính Sách Vận Chuyển
                </Link>
              </li>
              <li>
                <Link href="/chinh-sach-bao-mat" className="hover:text-blue-200">
                  Chính Sách Bảo Mật
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="hover:text-blue-200">
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Đăng Ký Nhận Tin</h3>
            <p className="mb-4">Nhận thông tin khuyến mãi và cập nhật mới nhất từ Nhà Thuốc Tuệ Minh</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email của bạn"
                className="px-4 py-2 w-full text-gray-800 rounded-l-md focus:outline-none"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-r-md">Đăng Ký</button>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-600 mt-8 pt-6 text-center">
          <p>© {new Date().getFullYear()} Nhà Thuốc Tuệ Minh. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
