"use client";

import { useSelector } from "react-redux";

function CartRight() {
  const { items } = useSelector((state) => state?.cartItems);
  const totalPrice = items?.reduce(
    (acc, item) => acc + item.price * item.qut,
    0
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="font-semibold text-xl text-gray-800 mb-4">
        Checkout Summary
      </h3>
      <div className="space-y-2">
        <div className="flex justify-between text-gray-700">
          <span>Subtotal ({items?.length} items):</span>
          <span className="text-green-500 font-bold">৳ {totalPrice}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Shipping Charge:</span>
          <span className="text-green-500 font-bold">৳ 55</span>
        </div>
        <hr />
        <div className="flex justify-between font-semibold text-gray-800">
          <span>Total Price:</span>
          <span className="text-green-500 font-bold">৳ {totalPrice + 55}</span>
        </div>
      </div>
      <button className="w-full bg-green-500 text-white font-medium py-2 mt-4 rounded-lg hover:bg-green-600">
        Proceed to Checkout (1)
      </button>
    </div>
  );
}

export default CartRight;
