export default function Features() {
  return (
    <div className="container  mx-auto">
      {/* Features Section */}
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
        {/* Free Shipping */}
        <div className="flex items-center space-x-4">
          <div className="bg-red-500 text-white p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h11M9 21V3m4 0h5a2 2 0 012 2v4a2 2 0 01-2 2h-5M5 7h.01M5 13h.01M19 7h.01M19 13h.01"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">FREE SHIPPING!</h4>
            <p className="text-gray-600 text-sm">On Orders Over 10,000 Taka.</p>
          </div>
        </div>

        {/* Exchange Policy */}
        <div className="flex items-center space-x-4">
          <div className="bg-green-500 text-white p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">EXCHANGE POLICY</h4>
            <p className="text-gray-600 text-sm">Fast & Hassle Free</p>
          </div>
        </div>

        {/* Online Support */}
        <div className="flex items-center space-x-4">
          <div className="bg-purple-500 text-white p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 9h10M7 13h10m-5 4h.01M12 3a9 9 0 100 18 9 9 0 000-18z"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">ONLINE SUPPORT</h4>
            <p className="text-gray-600 text-sm">24/7 Everyday</p>
          </div>
        </div>

        {/* Reward Points */}
        <div className="flex items-center  space-x-4">
          <div className="  text-white p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v6m0 0l-3-3m3 3l3-3m-6-6V3l9 6m-9 6h9"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">REWARD POINTS</h4>
            <p className="text-gray-600 text-sm">Earn 1% Cashback</p>
          </div>
        </div>

        {/* Payment Method */}
        <div className="flex items-center  space-x-4 border ">
          <div className="bg-blue-500 text-white p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2 9h20M5 9V7a2 2 0 012-2h10a2 2 0 012 2v2m-5 7h5a2 2 0 002-2v-5a2 2 0 00-2-2h-5m0 7H7m0 0H2m7 0v-7"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">PAYMENT METHOD</h4>
            <p className="text-gray-600 text-sm">Credit Card, bKash & PayPal</p>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="bg-green-500 text-white p-6 text-center mt-4">
        <p className="font-semibold text-lg">
          🎉 Exclusive Offer! Use{" "}
          <span className="bg-orange-500 px-2 py-1 rounded">FIRST20</span> and
          save more!
        </p>
        <button className="mt-4 bg-gray-800 hover:bg-gray-900 text-white py-2 px-6 rounded">
          Shop Now
        </button>
      </div>
    </div>
  );
}
