"use client";

import getProducts from "@/app/getData/products";
import { useState } from "react";
import Button from "../button/Button";
import FilterBar from "../filterbar/FilterBar";
import ProductCard from "../productcard/ProductCard";

const products = await getProducts();

export default function Products() {
  const [catagoryName, setCatagoryName] = useState("Electronics");
  return (
    <div className="container mx-auto p-4">
      {products && <FilterBar setCatagoryName={setCatagoryName} catagoryName={catagoryName} />}
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
        <Button data={{ text: "See More" }} />
      </div>
    </div>
  );
}
