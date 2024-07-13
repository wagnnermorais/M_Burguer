import Link from "next/link";
import { NavItemProps } from "../../types/NavItemProps";

export default function NavItem({ link, value }: NavItemProps) {
  return (
    <div>
      <Link
        className="py-4 px-4 text-md font-medium ease-in-out duration-500 hover:bg-slate-400"
        href={`${link}`}
      >
        {value}
      </Link>
    </div>
  );
}
