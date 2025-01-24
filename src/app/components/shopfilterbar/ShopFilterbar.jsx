"use client";
const catagories = [
  "Electronics",
  "Books",
  "Sunnah Products",
  "Groceries & Foods",
  "Clothing",
  "Offer",
  "Others",
];
const priceCatagory = ["Low to High", " High to Low", "Rating", "Top Sale"];
const ShopFilterBar = ({ setCatagoryName }) => {
  const catagoryHandler = (e) => {
    setCatagoryName((categoryObj) => {
      return {
        ...categoryObj,
        name: e.target.value,
      };
    });
  };
  const priceCatagoryHandler = (e) => {
    setCatagoryName((categoryObj) => {
      return {
        ...categoryObj,
        price: e.target.value,
      };
    });
  };
  // const rangHanlder = (e) => {
  //   setRangValue((prevValue) => {
  //     return {
  //       ...prevValue,
  //       maxValue: e.target.value,
  //     };
  //   });
  // };
  return (
    <div className=" container mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 p-6 border rounded-md  bg-white">
      {/* Select Category */}
      <div className="w-full lg:w-auto">
        <select
          onChange={catagoryHandler}
          id="category"
          className="w-full lg:w-64 p-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option>Select a Catagory</option>
          {catagories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Select Sorting Option */}
      <div className="w-full lg:w-auto">
        <select
          onChange={priceCatagoryHandler}
          id="sorting"
          className="w-full lg:w-64 p-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option>Select Sorting Option</option>
          {priceCatagory.map((priceCatagory, index) => (
            <option key={index} value={priceCatagory}>
              {priceCatagory}
            </option>
          ))}
        </select>
      </div>

      {/* Select Price Range */}
      <div className="w-full lg:w-auto">
        <div className="">
          <label className="block text-center mb-4 text-gray-700 font-medium">
            Select Price Range
          </label>
          <div className="flex items-center justify-between mb-2 text-gray-600">
            <span>
              Min: <span id="minValue">0</span>
            </span>
            <span>
              Max: <span id="maxValue">100</span>
            </span>
          </div>
          <div className="relative">
            <input
              type="range"
              id="minSlider"
              className="absolute w-full h-1 bg-gray-300 rounded-lg appearance-none focus:outline-none slider-thumb"
              min="0"
              max="100000"
              value="100"
              step="1"
            />
            <input
              type="range"
              id="maxSlider"
              className="absolute w-full h-1 bg-gray-300 rounded-lg appearance-none focus:outline-none slider-thumb"
              min="0"
              max="100000"
              value="200"
              step="1"
            />
            <div className="absolute bg-green-500 h-1 top-1/2 transform -translate-y-1/2 rounded-full range-progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopFilterBar;
