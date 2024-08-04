import Layout from "@/layout/Layout";
import Carousel from "@/components/page/Carousel";
import Banner from "@/components/page/Banner";
import Menu from "@/components/page/menu/Menu";
import Image from "next/image";
import { carousel } from "./api/db/Carousel";
import ReviewCarousel from "@/components/page/review/ReviewCarousel";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen font-Graphie bg-zinc-800 text-white">
      <Layout>
        <Carousel autoslide={true} interval={4500}>
          {carousel.map((item) => (
            <div
              key={item.src}
              className="relative w-full h-[80vh] flex-shrink-0"
            >
              <Image
                src={item.src}
                alt="Carousel image"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </Carousel>
        <Menu />
        <Banner />
        <ReviewCarousel />
      </Layout>
    </main>
  );
}
