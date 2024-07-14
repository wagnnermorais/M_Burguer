import Hero from "@/components/page/Hero";
import Menu from "@/components/page/Menu";
import Layout from "@/layout/Layout";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen font-Graphie bg-zinc-800 text-white">
      <Layout>
        <Hero />
        <Menu />
      </Layout>
    </main>
  );
}
