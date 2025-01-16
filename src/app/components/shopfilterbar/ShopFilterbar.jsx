const ShopFilterBar = () => {
  return (
    <div className=" container mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 p-6 border rounded-md  bg-white">
      {/* Select Category */}
      <div className="w-full lg:w-auto">
        <select
          id="category"
          className="w-full lg:w-64 p-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="">Select Category</option>
          <option value="electronics">Electronics</option>
          <option value="books">Books</option>
          <option value="sunnah-products">Sunnah Products</option>
          <option value="groceries-foods">Groceries & Foods</option>
          <option value="clothing">Clothing</option>
          <option value="offer">Offer</option>
          <option value="others">Others</option>
        </select>
      </div>

      {/* Select Sorting Option */}
      <div className="w-full lg:w-auto">
        <select
          id="sorting"
          className="w-full lg:w-64 p-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="">Select Sorting Option</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="price-low-high">Rating</option>
          <option value="price-high-low">Top Sale</option>
        </select>
      </div>

      {/* Select Price Range */}
      <div className="w-full lg:w-auto">
        <label
          htmlFor="price-range"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Select Price Range
        </label>
        <div className="flex items-center gap-2">
          <input
            id="price-range"
            type="range"
            min="0"
            max="100000"
            step="1000"
            className="w-full lg:w-64 accent-green-500"
          />
          <span className="text-sm text-gray-500">Max: 100000</span>
        </div>
      </div>
    </div>
  );
};

export default ShopFilterBar;
