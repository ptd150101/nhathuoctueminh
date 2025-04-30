import { Award, Shield, UserCheck, Truck } from "lucide-react"

const features = [
  {
    icon: <Award className="h-10 w-10 text-green-600" />,
    title: "THƯƠNG HIỆU UY TÍN 30 NĂM",
    subtitle: "(SINCE 1988)",
    color: "bg-green-50",
  },
  {
    icon: <Shield className="h-10 w-10 text-orange-600" />,
    title: "SẢN PHẨM CHÍNH HÃNG & CHẤT LƯỢNG",
    subtitle: "",
    color: "bg-orange-50",
  },
  {
    icon: <UserCheck className="h-10 w-10 text-blue-600" />,
    title: "TƯ VẤN TẬN TÂM & CHUẨN XÁC",
    subtitle: "",
    color: "bg-blue-50",
  },
  {
    icon: <Truck className="h-10 w-10 text-orange-600" />,
    title: "MIỄN PHÍ VẬN CHUYỂN TẬN NHÀ",
    subtitle: "",
    color: "bg-orange-50",
  },
]

export default function FeatureBoxes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
      {features.map((feature, index) => (
        <div key={index} className={`${feature.color} p-4 rounded-lg flex items-center gap-4`}>
          {feature.icon}
          <div>
            <h3 className="font-bold text-sm text-gray-800">{feature.title}</h3>
            {feature.subtitle && <p className="text-xs text-gray-600">{feature.subtitle}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}
