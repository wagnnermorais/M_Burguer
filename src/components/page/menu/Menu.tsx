import { useState } from "react";
import { headings, burguers, sides, sauces, drinks } from "@/pages/api/db/Menu";
import MenuHeaders from "./MenuHeaders";

export default function Menu() {
  const [activeMenu, setActiveMenu] = useState<string>("burguers");
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const renderMenu = () => {
    switch (activeMenu) {
      case "burguers":
        return burguers;
      case "sides":
        return sides;
      case "sauces":
        return sauces;
      case "drinks":
        return drinks;
      default:
        return [];
    }
  };

  const handleMenuChange = (menu: string) => {
    if (menu !== activeMenu) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveMenu(menu);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <section className="mx-auto py-8 w-[80%] h-[75vh] relative">
      <h2 className="my-2 text-4xl text-center uppercase">Menu</h2>
      <div className="flex justify-around my-8 w-[65%] mx-auto">
        {headings.map((heading) => (
          <MenuHeaders
            key={heading.id}
            text={heading.title}
            onClick={() => handleMenuChange(heading.title.toLowerCase())}
            isActive={activeMenu === heading.title.toLowerCase()}
          />
        ))}
      </div>
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          {renderMenu().map((item) => (
            <div className="flex flex-col my-4" key={item.id}>
              <div className="flex items-center w-full">
                <h3 className="uppercase font-light mr-2">{item.name}</h3>
                <hr className="flex-grow border-gray-400" />
                <p className="ml-4">$ {item.price}</p>
              </div>
              <small className="text-sm font-light">
                {item.ingredients.join(", ")}
              </small>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="py-2 px-12 border ease-in-out duration-300 hover:bg-slate-600 absolute bottom-8">
          Order
        </button>
      </div>
    </section>
  );
}
