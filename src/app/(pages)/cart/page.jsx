"use client";

import CartLeft from "@/app/components/cartLeft/CartLeft";
import CartRight from "@/app/components/cartRight/CartRight";
import ClearCart from "@/app/components/clearCart/ClearCart";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function CartPage() {
  const { items, total } = useSelector((state) => state.cartItems);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Go Back Button */}
      <button className="flex items-center gap-2 text-white bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        GO BACK
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Cart Items Section */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex border  justify-between items-center">
            {items.length > 0 && <ClearCart />}
          </div>

          {items && items.length > 0 ? (
            items.map((cartItem) => (
              <CartLeft
                key={cartItem.id}
                cartItem={cartItem}
                setTotalPrice={setTotalPrice}
                totalPrice={totalPrice}
              />
            ))
          ) : (
            <div className="flex justify-center items-center text-gray-700">
              No items in the cart.
            </div>
          )}
        </div>

        {/* Checkout Summary Section */}
        <CartRight totalPrice={totalPrice} />
      </div>
    </div>
  );
}
