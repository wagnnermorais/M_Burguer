import { useState } from "react";
import Link from "next/link";
import { navigation } from "../../pages/api/db/Navigation";
import { CartIcon, SunIcon } from "../icons/Icons";
import NavItem from "./NavItem";
import Button from "../page/Button";
import CartModal from "./CartModal"; // Importa o CartModal

export default function Header() {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false); // Estado para controlar a abertura do modal

  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  return (
    <header className="sticky top-0 left-0 right-0 w-full py-8 px-8 shadow-lg z-50 bg-zinc-800">
      <div className="flex items-center justify-between mx-auto w-[80%]">
        <Link href={"/"}>
          <div className="flex gap-1">
            <h1 className="text-4xl font-bold tracking-tighter">
              Marque&apos;s
            </h1>
            <span className="text-lg self-end tracking-wider italic">
              burguer
            </span>
          </div>
        </Link>
        <menu className="flex items-center gap-8 mr-24">
          {navigation.map((item) =>
            /* prettier-ignore */
            <NavItem key={item.id} link={item.link} value={item.value} />
          )}
          <Button
            text="Order"
            onClick={() => console.log("function not ready yet")}
          />
        </menu>
        <div className="relative flex items-center gap-8">
          <div
            className="ease-in-out duration-300 cursor-pointer"
            onClick={toggleCartModal} // Adiciona o evento de clique
          >
            {CartIcon}
          </div>
          <div className="ease-in-out duration-300 cursor-pointer">
            {SunIcon}
          </div>

          {isCartModalOpen && (
            <div className="absolute -left-28 top-full mt-2 z-50">
              <CartModal item="Burger" quantity={2} onClick={toggleCartModal} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
