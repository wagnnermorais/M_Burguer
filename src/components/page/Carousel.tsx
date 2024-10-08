import { useEffect, useState, useCallback } from "react";
import { CarouselProps } from "@/types/CarouselProps";

export default function Carousel({
  children,
  autoslide,
  interval,
}: CarouselProps) {
  const [current, setCurrent] = useState<number>(0);

  const previousSlide = useCallback(() => {
    setCurrent((current) =>
      current === 0 ? children.length - 1 : current - 1
    );
  }, [children.length]);

  const nextSlide = useCallback(() => {
    setCurrent((current) =>
      current === children.length - 1 ? 0 : current + 1
    );
  }, [children.length]);

  useEffect(() => {
    if (!autoslide) return;
    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);
  }, [autoslide, interval, nextSlide]);

  return (
    <div className="overflow-hidden relative h-[80vh]">
      <div
        className="flex duration-1000 transition-transform ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <button
          className="mx-8 p-4 text-2xl shadow ease duration-300 bg-white text-gray-800 hover:bg-zinc-600 hover:text-white"
          onClick={previousSlide}
        >
          <p className="font-bold">&lt;</p>
        </button>
        <button
          className="mx-8 p-4 text-2xl shadow ease duration-300 bg-white text-gray-800 hover:bg-zinc-600 hover:text-white"
          onClick={nextSlide}
        >
          <p className="font-bold">&gt;</p>
        </button>
      </div>
    </div>
  );
}
