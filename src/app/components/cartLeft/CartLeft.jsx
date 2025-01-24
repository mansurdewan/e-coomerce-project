"use client";

import { removeFromCart } from "@/app/redux/features/cartSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
function CartLeft({ cartItem, setTotalPrice }) {
  const [itemPrice, setItemPrice] = useState(cartItem.price);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  // const priceHandler = (e) => {
  //   const { textContent: action } = e.target;
  //   setQuantity((prev) => {
  //     return action === "+"
  //       ? prev + 1
  //       : action === "-" && prev > 1
  //       ? prev - 1
  //       : prev;
  //   });
  // };
  // useEffect(() => {
  //   setItemPrice(itemPrice * quantity);
  // }, [quantity]);

  useEffect(() => {
    const local = localStorage.getItem("totalprice") || [];
    const localPrice =
      local.find((item) => item.id === cartItem.id)?.price || itemPrice;
  }, [quantity]);
  return (
    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image
          src={cartItem?.image}
          alt="Medjool Dates"
          width={80}
          height={80}
          className="rounded-lg object-cover"
        />

        <div>
          <h4 className="font-semibold text-gray-800">{cartItem?.name}</h4>
          <p className="text-green-500 my-2 font-bold">
            ৳ {itemPrice * quantity}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-lg hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-gray-800 font-semibold">{quantity}</span>
            <button
              onClick={() => {
                if (quantity > 0) {
                  setQuantity(quantity + 1);
                }
              }}
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-lg hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => dispatch(removeFromCart(cartItem.id))}
        className="text-red-500 hover:bg-red-100 p-2 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 13h6m2 9a2 2 0 002-2V7a2 2 0 00-2-2h-2l-.348-1.392A2 2 0 0012.683 2h-1.366a2 2 0 00-1.969 1.608L9 5H7a2 2 0 00-2 2v13a2 2 0 002 2h10z"
          />
        </svg>
      </button>
    </div>
  );
}

export default CartLeft;
