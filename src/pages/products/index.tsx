import ProductModal from "@/components/page/ProductModal";
import Layout from "@/layout/Layout";
import { burguers } from "../api/db/Menu";

export default function Products() {
  return (
    <section className="flex flex-col font-Graphie bg-zinc-800 text-white">
      <Layout>
        <div className="flex items-center justify-center my-8 min-h-screen">
          <div className="grid grid-cols-3 gap-4 w-[80%]">
            {burguers.map((burguer) => (
              <ProductModal
                title={burguer.name}
                background={burguer.background}
                key={burguer.id}
              />
            ))}
          </div>
        </div>
      </Layout>
    </section>
  );
}
