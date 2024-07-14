import { menu } from "@/pages/api/db/Menu";

export default function Menu() {
  return (
    <section className="mx-auto py-8 w-[80%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        {menu.map((item) => (
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
    </section>
  );
}
