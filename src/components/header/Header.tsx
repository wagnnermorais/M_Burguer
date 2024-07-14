import Link from "next/link";
import { navigation } from "../../pages/api/db/Navigation";
import { CartIcon, SunIcon } from "../icons/Icons";
import NavItem from "./NavItem";

export default function Header() {
  return (
    <header className="flex items-center justify-between mx-auto py-8 px-8 w-[80%]">
      <Link href={"/"}>
        <div className="flex gap-1">
          <h1 className="text-4xl font-bold tracking-tighter">Marque&apos;s</h1>
          <span className="text-lg self-end tracking-wider italic">
            burguer
          </span>
        </div>
      </Link>
      <menu className="flex items-center gap-8 mr-24">
        {navigation.map((item) =>
          /* prettier-ignore */
          <NavItem 
            key={item.id} 
            link={item.link} 
            value={item.value} 
          />
        )}
        <button className="py-2 px-8 border ease-in-out duration-300 hover:bg-slate-600">
          Order
        </button>
      </menu>
      <div className="flex items-center gap-8">
        <div className="ease-in-out duration-300 cursor-pointer">
          {CartIcon}
        </div>
        <div className="ease-in-out duration-300 cursor-pointer">{SunIcon}</div>
      </div>
    </header>
  );
}
