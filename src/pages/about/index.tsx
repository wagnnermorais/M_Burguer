import Layout from "@/layout/Layout";
import Timeline from "./Timeline";

export default function About() {
  return (
    <section className="flex flex-col min-h-screen font-Graphie bg-zinc-800 text-white">
      <Layout>
        <div className="my-12 mx-auto w-[80%] text-justify">
          <div className="grid grid-cols-1 mb-12 md:grid-cols-2">
            <div className="bg-[url('/images/about/kitchen.jpg')] bg-cover bg-center min-h-[65vh] rounded-l-md rounded-b-none" />
            <div className="flex flex-col justify-center py-4 px-6 rounded-r-md rounded-b-none bg-white text-black">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg mb-4">
                Marques Burguer started as a small family business, inspired by
                our mothers passion for cooking and her legendary burger
                recipes. What began as a humble food truck quickly gained a
                loyal following, thanks to our commitment to quality and
                customer satisfaction.
              </p>
              <p className="text-lg mb-4">
                Over the years, we have grown into a beloved local burger joint,
                known for our delicious, handcrafted burgers and welcoming
                atmosphere. Our mission is to bring people together through
                great food and exceptional service.
              </p>
              <p className="text-lg">
                We value community, quality, and tradition, and we strive to
                uphold these values in everything we do.
              </p>
            </div>
          </div>
          <Timeline />
          <div className="grid grid-cols-1 mb-12 md:grid-cols-2">
            <div className="flex flex-col justify-center py-4 px-6 order-last rounded-l-md rounded-b-none md:order-first bg-white text-black">
              <h2 className="text-3xl font-bold mb-4">Our Future</h2>
              <p className="text-lg mb-2">
                Looking ahead, we are excited to expand our menu with more
                innovative and mouth-watering creations. We plan to introduce
                seasonal specials and collaborations with local farmers to bring
                the freshest ingredients to our customers.
              </p>
              <p className="text-lg mb-2">
                We are also committed to sustainability and are working towards
                eco-friendly packaging and reducing our carbon footprint. Our
                goal is to make a positive impact on the environment while
                continuing to serve the best burgers in town.
              </p>
              <p className="text-lg">
                As we grow, we will continue to prioritize our customers and
                community, ensuring that Marques Burguer remains a place where
                everyone feels welcome and valued.
              </p>
            </div>
            <div className="bg-[url('/images/about/burguer.jpg')] bg-cover bg-center min-h-[65vh] rounded-r-md rounded-b-none" />
          </div>
        </div>
      </Layout>
    </section>
  );
}
