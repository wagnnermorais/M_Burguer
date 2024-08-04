"use client";
import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { reviews } from "@/pages/api/db/Reviews";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Testimonial() {
  const sliderRef = useRef<Slider>(null);
  const settings = {
    fade: true,
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3750,
    speed: 500,
  };

  return (
    <section className="mx-auto w-full rounded-sm relative overflow-hidden">
      <Slider {...settings} ref={sliderRef}>
        {reviews.map((review) => (
          <article
            className="grid grid-cols-1 items-center gap-5 mx-auto p-5 overflow-hidden sm:grid-cols-[1fr_3fr] md:grid-cols-[1fr_4fr] sm:py-12 sm:px-24 md:gap-8"
            key={review.id}
          >
            <div className="flex items-center">
              <Image
                src={review.avatar}
                alt={`Avatar of ${review.user}`}
                width={186}
                height={186}
                className="border-4 border-black rounded-full object-cover shadow-2xl"
              />
              <div className="space-y-3 text-base sm:text-[1.125rem]">
                <div className="flex flex-col w-[85%] mx-auto">
                  <h3 className="mb-4 text-3xl font-bold text-shadow-sm tracking-tighter text-black">
                    {review.user}
                  </h3>
                  <div className="text-4xl text-orange-500">
                    <FaQuoteLeft />
                  </div>
                  <p className="w-[90%] mx-auto text-lg text-justify tracking-wide text-black">
                    {review.review}
                  </p>
                  <div className="mr-8 text-4xl self-end text-orange-500">
                    <FaQuoteRight />
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </Slider>
      <button
        className="absolute top-[50%] left-[10px] z-10 text-4xl text-black"
        onClick={() => sliderRef?.current?.slickPrev()}
      >
        <MdOutlineArrowBackIos />
      </button>
      <button
        className="absolute top-[50%] right-[10px] z-10 text-4xl text-black"
        onClick={() => sliderRef?.current?.slickNext()}
      >
        <MdOutlineArrowForwardIos />
      </button>
    </section>
  );
}
