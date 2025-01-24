"use client";

import { addToCart } from "@/app/redux/features/cartSlice";
import Link from "next/link";
import { useDispatch } from "react-redux";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartHandler = (productId) => {
    dispatch(addToCart(productId));
  };

  return (
    <div className="border rounded-lg shadow-sm p-4 flex flex-col">
      <div className="relative">
        <Link href={`/shop/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="rounded-md w-full h-40 object-cover"
          />
        </Link>

        <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm">
          ৳ {product.price}
        </div>
      </div>
      <div className="mt-2">
        <p className="text-yellow-500 text-sm">{product.individualRating} ★</p>
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p
          className={`text-sm ${
            product.stock ? "text-green-500" : "text-red-500"
          }`}
        >
          {product.stock ? "In stock" : "Out of stock"}
        </p>
      </div>
      <button
        onClick={() => cartHandler(product.id)}
        className="mt-auto bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
