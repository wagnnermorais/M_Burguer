import { ReviewProps } from "@/types/ReviewsProps";
import Image from "next/image";

export default function Review({ user, avatar, review, stars }: ReviewProps) {
  return (
    <section>
      <div className="my-8 rounded-md bg-white">
        <div className="flex items-center justify-between pr-12">
          <div className="flex items-center gap-4">
            <Image
              src={avatar}
              width={256}
              height={256}
              alt="User avatar"
              className="rounded-r-full"
            />
            <h2 className="text-2xl font-bold tracking-tighter">{user}</h2>
          </div>
          {stars}
        </div>
        <p className="py-6 px-4 text-lg tracking-wide">{review}</p>
      </div>
    </section>
  );
}
