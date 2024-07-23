import Layout from "@/layout/Layout";
import { ReviewProps } from "@/types/ReviewsProps";
import Image from "next/image";
import Review from "./Review";
import { reviews } from "../api/db/Reviews";

export default function Reviews() {
  return (
    <section className="flex flex-col min-h-screen font-Graphie bg-zinc-800 text-white">
      <Layout>
        <div className="grid grid-cols-2 gap-8 w-[80%] mx-auto min-h-screen text-black">
          {reviews.map((review) => (
            <Review
              key={review.id}
              user={review.user}
              avatar={review.avatar}
              review={review.review}
              stars={review.stars}
            />
          ))}
        </div>
      </Layout>
    </section>
  );
}
