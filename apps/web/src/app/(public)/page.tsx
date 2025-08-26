import Banner from "@/components/pages/home/Banner";
import Categories from "@/components/pages/home/Categories";
import HeroSection from "@/components/pages/home/HeroSection";
import NewArrivals from "@/components/pages/home/NewArrivals";
import TopPicksForYou from "@/components/pages/home/TopPicksForYou";
import WhyFormora from "@/components/pages/home/WhyFormora";
import { getAllProducts } from "@/utils/products";

export default async function Home() {
  const data = await getAllProducts();
  return (
    <>
      <HeroSection data={data.products} />
      <TopPicksForYou data={data.products.slice(0, 9)} />
      <NewArrivals data={data.products.slice(0, 4)} />
      <Categories data={data.products} />
      <WhyFormora />
      <Banner />
    </>
  );
}
