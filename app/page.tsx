import HeroBanner from "@/components/hero-banner"
import FeatureBoxes from "@/components/feature-boxes"
import ProductCategories from "@/components/product-categories"
import BestSellers from "@/components/best-sellers"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HeroBanner />
      <FeatureBoxes />
      <ProductCategories />
      <BestSellers />
    </div>
  )
}
