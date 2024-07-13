import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { LayoutProps } from "@/types/LayoutProps";

export default function Layout({ children }: LayoutProps) {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </section>
  );
}
