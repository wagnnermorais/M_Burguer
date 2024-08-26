import Button from "../page/Button";
import { CartModalProps } from "@/types/CartModalProps";
import { CloseIcon } from "../icons/Icons";
import { useEffect, useState } from "react";

export default function CartModal({ item, quantity, onClick }: CartModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className={`relative  transform transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } p-4 w-[300px] rounded-sm shadow-2xl bg-white z-50`}
    >
      <div
        className="flex justify-end mb-4"
        onClick={() => {
          setIsVisible(false);
          setTimeout(onClick, 300);
        }}
      >
        <CloseIcon fill="black" />
      </div>
      <div className="px-1">
        <div className="flex justify-between items-center gap-4">
          <p className="tracking-wide text-sm text-black uppercase">
            Bacon Delight
          </p>
          <p className="text-black uppercase">2</p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="tracking-wide text-sm text-black uppercase">
            Vegan Paradise
          </p>
          <p className="text-black uppercase">2</p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="tracking-wide text-sm text-black uppercase">
            Classic Cheeseburguer
          </p>
          <p className="text-black uppercase">2</p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="tracking-wide text-sm text-black uppercase">
            Blue Cheese Bliss
          </p>
          <p className="text-black uppercase">2</p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="tracking-wide text-sm text-black uppercase">
            Mediterranean Veggie
          </p>
          <p className="text-black uppercase">2</p>
        </div>
        <div className="flex justify-center my-4 bg-blue-300">
          <Button
            text="Go to cart"
            width="full"
            background="zinc-800"
            onClick={() => console.log("test")}
          />
        </div>
      </div>
    </section>
  );
}
