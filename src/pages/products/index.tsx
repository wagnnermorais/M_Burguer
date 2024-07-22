import ProductModal from "@/components/page/ProductModal";
import Layout from "@/layout/Layout";
import { burguers } from "../api/db/Menu";

export default function Products() {
  return (
    <section className="flex flex-col min-h-screen font-Graphie bg-zinc-800 text-white">
      <Layout>
        <div className="min-h-screen flex items-center justify-center w-full">
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
