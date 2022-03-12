import React from "react";
import Product from "./Product";

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
  return (
    <div className="grid grid-cols-3">
      {freshProds.map((freshprod) => (
        <Product
          key={freshprod.id}
          src={freshprod.src}
          name={freshprod.name}
          category={freshprod.category}
        />
      ))}
    </div>
  );
}

export default FreshProd;
