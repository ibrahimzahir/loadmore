import React from "react";
import FreshProd from "../components/FreshProd";

function shop() {
  return (
    <main className="container mx-auto px-8 sm:px-12">
      <section className="py-4">
        <div className="flex  items-center justify-between">
          <h2 className="text-md sm:text-2xl font-extrabold py-8">Shops</h2>
        </div>
        <FreshProd />
      </section>
    </main>
  );
}

export default shop;
