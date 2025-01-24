"use client";
import Pagination from "@/app/components/pagination/Pagination";
import ProductCard from "@/app/components/productcard/ProductCard";
import ShopFilterBar from "@/app/components/shopfilterbar/ShopFilterbar";
import { useSession } from "next-auth/react";
import { useState } from "react";

import { useSelector } from "react-redux";

export default function Shop() {
  const { data: session, status } = useSession();
  // if (status === "loading") return <div>Loading...</div>;
  // if (!session) {
  //   redirect("/signin");
  // }

  // If the user is not authenticated, redirect to the login page
  const products = useSelector((state) => state.products?.value);
  const [itemNums, setItemNum] = useState({
    firstValue: 0,
    lastValue: 10,
    totalPage: Math.ceil(products.length / 10),
  });
  const [categoryName, setCatagoryName] = useState({
    name: "",
    price: "",
  });
  const [rangeValue, setRangValue] = useState({
    minValue: 0,
    maxValue: 0,
  });
  const { firstValue, lastValue } = itemNums;
  return (
    <div className="container mx-auto p-4">
      {products && (
        <ShopFilterBar
          setCatagoryName={setCatagoryName}
          setRangValue={setRangValue}
        />
      )}
      <h1 className="text-2xl font-bold mt-4">
        {products && products.length > 0 && "All Products"}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
        {products && products.length > 0 ? (
          products
            ?.filter((product) => {
              return (
                !categoryName.name ||
                product.category === categoryName.name ||
                product.price < rangeValue.maxValue
              );
            })
            ?.sort((firstObj, lastObj) =>
              categoryName.price === "Low to High"
                ? firstObj.price - lastObj.price
                : categoryName.price === "High to Low"
                ? lastObj.price - firstObj.price
                : 0
            )
            ?.slice(firstValue, lastValue)
            ?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        ) : (
          <p className="text-center text-red-500">Products not Found</p>
        )}
      </div>
      <div className="">
        {products && products.length > 0 && (
          <Pagination itemNums={itemNums} setItemNum={setItemNum} />
        )}
      </div>
    </div>
  );
}
