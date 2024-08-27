import { burguers, sides, sauces, drinks } from "../api/db/Menu";
import Image from "next/image";
import Layout from "@/layout/Layout";

type CartItem = {
  quantity: number;
  id: number;
  name: string;
  price: number;
  background?: string;
};

const groupByCategory = (items: CartItem[]) => {
  const findCategoryByName = (name: string): string | undefined => {
    if (burguers.some((burger) => burger.name === name)) return "Burgers";
    if (drinks.some((drink) => drink.name === name)) return "Drinks";
    if (sides.some((side) => side.name === name)) return "Sides";
    if (sauces.some((sauce) => sauce.name === name)) return "Sauces";
    return undefined;
  };

  return items.reduce((acc: { [key: string]: CartItem[] }, item) => {
    const category = findCategoryByName(item.name);
    if (category) {
      if (!acc[category]) acc[category] = [];
      acc[category]?.push(item);
    }
    return acc;
  }, {});
};

export default function Cart() {
  const cartItems: CartItem[] = [
    {
      quantity: 2,
      id: 1,
      name: "Classic Cheeseburger",
      price: 28.99,
      background: "/images/products/cheeseburguer.jpg",
    },
    {
      quantity: 1,
      id: 2,
      name: "Bacon Delight",
      price: 30.99,
      background: "/images/products/bacon_delight.jpg",
    },
    {
      quantity: 2,
      id: 1,
      name: "Coca-Cola",
      price: 1.99,
      background: "/images/products/coca_cola.jpg",
    },
    {
      quantity: 1,
      id: 4,
      name: "French Fries",
      price: 2.99,
      background: "/images/products/french_fries.jpg",
    },
    {
      quantity: 1,
      id: 5,
      name: "Vanilla Ice Cream",
      price: 3.49,
    },
    {
      quantity: 1,
      id: 1,
      name: "Ketchup",
      price: 0.5,
      background: "/images/products/ketchup.jpg",
    },
  ];

  const categorizedItems = groupByCategory(cartItems);
  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <section className="flex flex-col min-h-screen font-Graphie bg-zinc-800 text-white">
      <Layout>
        <div className="flex my-12 mx-auto w-[90%] lg:w-[80%] space-x-4">
          <div className="flex-1 bg-white rounded-md p-4">
            {["Burgers", "Sides", "Sauces", "Drinks"].map((category) => (
              <div key={category} className="border-b-2">
                <h2 className="text-2xl font-bold mb-4 pt-4 text-black">
                  {category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {categorizedItems[category]?.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col items-center mb-4 rounded-md text-white bg-zinc-800"
                    >
                      {item.background && (
                        <div className="relative w-full h-40 overflow-hidden">
                          <Image
                            src={item.background}
                            alt={item.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                          />
                        </div>
                      )}
                      <div className="flex-1 text-center my-2">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <p className="text-lg">
                          Price: ${item.price.toFixed(2)}
                        </p>
                        <p className="text-lg">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col flex-1 rounded-md p-4 text-black bg-white">
            <h2 className="text-3xl font-bold mb-4">Order Summary</h2>
            <div className="flex-grow">
              <div className="flex justify-between mb-4">
                <p className="text-lg font-semibold">Total Price:</p>
                <p className="text-lg">${totalPrice}</p>
              </div>
            </div>
            <button
              className="w-full py-2 px-4 bg-zinc-800 text-white rounded-md hover:bg-zinc-700"
              onClick={() => alert("Order placed successfully!")}
            >
              Complete Order
            </button>
          </div>
        </div>
      </Layout>
    </section>
  );
}
