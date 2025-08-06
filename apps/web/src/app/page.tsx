import HeroSection from "@/components/pages/home/HeroSection";
import TopPicksForYou from "@/components/pages/home/TopPicksForYou";
import { getAllProducts } from "@/utils/proudcts";

export default async function Home() {
  const data = await getAllProducts();
  console.log(data);
  return (
    <div>
      <HeroSection data={data.products} />
      <TopPicksForYou data={data.products.slice(0, 9)} />
    </div>
  );
}
