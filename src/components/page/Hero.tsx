export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full h-[90vh] bg-[url('/images/hero_burguer.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      <div className="relative flex gap-2 z-10">
        <h1 className="text-8xl tracking-tighter">Marque&apos;s</h1>
        <span className="text-2xl self-end tracking-wider italic">burguer</span>
      </div>
      <h2 className="relative my-8 text-[8rem] font-bold tracking-widest z-10">
        Taste the Difference
      </h2>
    </section>
  );
}
