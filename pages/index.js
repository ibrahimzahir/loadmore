import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import FreshProd from "../components/FreshProd";

export default function Home() {
  return (
    <main className="container mx-auto px-8 sm:px-12">
      <section className="py-4">
        <div className="flex  items-center justify-between">
          <h2 className="text-md sm:text-2xl font-extrabold py-8">
            Stock Up on Fresh Favorites
          </h2>

          <Link href="/shop">
            <a className="text-base py-8 cursor-pointer text-black">See All</a>
          </Link>
        </div>
        <FreshProd />
      </section>
      <section className="py-4">
        <h2 className="text-2xl font-extrabold py-8">Recommended Products</h2>
        <FreshProd />
      </section>
    </main>
  );
}
