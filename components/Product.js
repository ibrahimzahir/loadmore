import React from "react";
import Image from "next/image";
function Product({ id, name, src, category }) {
  return (
    <div className="py-8">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image
          className="rounded-md"
          objectFit="fill"
          src={src}
          width={150}
          height={150}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{category}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
