import React from "react";
import Product from "./Product";
import { useEffect, useState } from "react";

const freshProds = [
  {
    id: "1",
    src: "/images/100p.jpeg",
    name: "100 Plus",
    category: "Groceries",
  },
  {
    id: "2",
    src: "/images/Ajinomoto.jpeg",
    name: "Ajinomoto",
    category: "Groceries",
  },
  {
    id: "3",
    src: "/images/Almondnuts.jpg",
    name: "Almondnuts",
    category: "Groceries",
  },
  {
    id: "4",
    src: "/images/almudis.jpeg",
    name: "Almudish",
    category: "Groceries",
  },
  { id: "5", src: "/images/apollo.jpg", name: "Apollo", category: "Groceries" },
  {
    id: "6",
    src: "/images/blueberryjuice.jpg",
    name: "BlueBerry Juice",
    category: "Groceries",
  },
  {
    id: "7",
    src: "/images/cheeseball.jpg",
    name: "Cheeseball",
    category: "Groceries",
  },
  {
    id: "8",
    src: "/images/cococnut.png",
    name: "Cococnut",
    category: "Groceries",
  },
  {
    id: "9",
    src: "/images/coffeemate.jpg",
    name: "Coffeemate",
    category: "Groceries",
  },
  {
    id: "10",
    src: "/images/cordialblackcurrent.jpg",
    name: "Cordialblackcurrent",
    category: "Groceries",
  },
  {
    id: "11",
    src: "/images/datessaad.jpg",
    name: "Datessaad",
    category: "Groceries",
  },
  { id: "12", src: "/images/dixy.webp", name: "Dixy", category: "Groceries" },
  {
    id: "13",
    src: "/images/fruitcoc.jpeg",
    name: "fruitcoc",
    category: "Groceries",
  },
  {
    id: "14",
    src: "/images/fruitcocktale.jpeg",
    name: "fruitcocktale",
    category: "Groceries",
  },
  {
    id: "15",
    src: "/images/indocafe.jpg",
    name: "indocafe",
    category: "Groceries",
  },
  {
    id: "16",
    src: "/images/indocreamer.jpeg",
    name: "Indocreamer",
    category: "Groceries",
  },
  {
    id: "17",
    src: "/images/milo400.webp",
    name: "Milo",
    category: "Groceries",
  },
  {
    id: "18",
    src: "/images/milodrinkk.png",
    name: "Milodrinkk",
    category: "Groceries",
  },
  {
    id: "19",
    src: "/images/nutella.jpeg",
    name: "Nutella",
    category: "Groceries",
  },
  {
    id: "20",
    src: "/images/Pasta-Sauce-Traditional.jpeg",
    name: "Pasta-Sauce",
    category: "Groceries",
  },
  {
    id: "21",
    src: "/images/safabs.jpeg",
    name: "Safabs",
    category: "Groceries",
  },
];

function FreshProd() {
  const [visible, setVisible] = useState(6);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 6);
  };
  return (
    <div>
      <div className="grid grid-cols-3">
        {freshProds?.slice(0, visible).map((freshprod) => (
          <Product
            key={freshprod.id}
            src={freshprod.src}
            name={freshprod.name}
            category={freshprod.category}
          />
        ))}
      </div>
      <div className=" flex flex-col  pt-12	">
        <button
          className=" content-between bg-transparent hover:bg-green-800 text-green-800 font-semibold hover:text-white py-2 px-4 border border-green-800 hover:border-transparent rounded"
          onClick={showMoreItems}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default FreshProd;
