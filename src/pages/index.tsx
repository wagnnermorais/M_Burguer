import Carousel from "@/components/page/Carousel";
import Hero from "@/components/page/Hero";
import Menu from "@/components/page/menu/Menu";
import Layout from "@/layout/Layout";
import Image from "next/image";
import { carousel } from "./api/db/Carousel";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen font-Graphie bg-zinc-800 text-white">
      <Layout>
        <Hero />
        <Menu />
        <Carousel autoslide={true} interval={3500}>
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
      </Layout>
    </main>
  );
}
