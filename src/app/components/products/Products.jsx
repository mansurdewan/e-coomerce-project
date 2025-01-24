"use client";

import { useState } from "react";

import FilterBar from "../filterbar/FilterBar";
import ProductCard from "../productcard/ProductCard";
import { useSelector } from "react-redux";

export default function Products() {
  const products = useSelector((state) => state?.products.value);
  const [catagoryName, setCatagoryName] = useState("Electronics");
  return (
    <div className="container mx-auto p-4">
      {products && (
        <FilterBar
          setCatagoryName={setCatagoryName}
          catagoryName={catagoryName}
        />
      )}
      <h1 className="text-2xl font-bold mt-4">{products && "All Product"}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
        {products && products.length > 0 ? (
          products
            ?.filter((product) => product.category === catagoryName)
            ?.slice(0, 10)
            ?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        ) : (
          <p className="text-center text-red-500">Products not Found</p>
        )}
      </div>
      <div className="">
        <button className="text-red-200">See More</button>
      </div>
    </div>
  );
}
