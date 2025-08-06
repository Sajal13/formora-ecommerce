import Categories from "@/components/pages/home/Categories";
import HeroSection from "@/components/pages/home/HeroSection";
import NewArrivals from "@/components/pages/home/NewArrivals";
import TopPicksForYou from "@/components/pages/home/TopPicksForYou";
import WhyFormora from "@/components/pages/home/WhyFormora";
import { getAllProducts } from "@/utils/proudcts";

export default async function Home() {
  const data = await getAllProducts();
  console.log(data);
  return (
    <div>
      <HeroSection data={data.products} />
      <TopPicksForYou data={data.products.slice(0, 9)} />
      <NewArrivals data={data.products.slice(0, 4)} />
      <Categories data={data.products} />
      <WhyFormora />
    </div>
  );
}
