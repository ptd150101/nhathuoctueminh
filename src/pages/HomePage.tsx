import HeroBanner from "../components/HeroBanner"
import FeatureBoxes from "../components/FeatureBoxes"
import ProductCategories from "../components/ProductCategories"
import BestSellers from "../components/BestSellers"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <HeroBanner />
      <FeatureBoxes />
      <ProductCategories />
      <BestSellers />
    </div>
  )
}
