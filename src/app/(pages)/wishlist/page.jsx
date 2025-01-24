export default function WishlistPage() {
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

      <div className="mt-6 bg-white p-6 rounded-lg shadow">
        {/* Wishlist Title */}
        <h3 className="font-semibold text-xl text-gray-800 mb-4">Wishlist</h3>

        {/* Wishlist Item */}
        <div className="bg-gray-50 p-4 rounded-lg shadow flex justify-between items-center">
          {/* Item Details */}
          <div className="flex items-center gap-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Extra Virgin Olive Oil"
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div>
              <h4 className="font-semibold text-gray-800">
                Extra Virgin Olive Oil (500ml)
              </h4>
              <p className="flex items-center gap-2 text-sm text-green-500">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  In stock
                </span>
              </p>
              <p className="text-green-500 font-bold text-lg">৳ 400</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2">
            <button className="flex items-center justify-center bg-green-500 text-white p-2 rounded-lg hover:bg-green-600">
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
                  d="M3 3h18M9 7h6m-6 4h6m-6 4h6"
                />
              </svg>
            </button>
            <button className="flex items-center justify-center bg-red-500 text-white p-2 rounded-lg hover:bg-red-600">
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
                  d="M9 13h6m2 9a2 2 0 002-2V7a2 2 0 00-2-2h-2l-.348-1.392A2 2 0 0012.683 2h-1.366a2 2 0 00-1.969 1.608L9 5H7a2 2 0 00-2 2v13a2 2 0 002 2h10z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
