export default function Banner() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full h-[70vh] bg-[url('/images/hero_burguer_md.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="relative flex flex-col items-center z-10 gap-4">
        <h2 className="text-8xl font-extrabold text-white tracking-tight text-shadow-lg">
          Taste the Difference
        </h2>
        <p className="text-2xl font-medium text-white text-shadow lowercase">
          Where Every Bite is a Delight.
        </p>
      </div>
    </section>
  );
}
