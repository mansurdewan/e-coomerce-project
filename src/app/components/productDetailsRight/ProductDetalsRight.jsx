import objConvertor from "@/uttils/dynamicObjValue";

function ProductDetalsRight({ product }) {
  const { key, value } = objConvertor(product.keyFeatures);
  console.log(keyvalu, "hi");
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <span className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded">
          In stock
        </span>
      </div>
      <p className="text-gray-600 mb-4">
        High-quality extra virgin olive oil, recommended in Sunnah.
      </p>
      <h2 className="font-semibold text-lg mb-2">Key Features:</h2>
      <ul className="text-gray-700 space-y-1 mb-4">
        <li>
          <span className="font-semibold">Origin:</span> Palestine
        </li>
        <li>
          <span className="font-semibold">{key}:</span> {value}
        </li>
        <li>
          <span className="font-semibold">Category:</span> {product.category}
        </li>
        <li>
          <span className="font-semibold">Individual Rating:</span>{" "}
          {product.individualRating}
        </li>
        <li>
          <span className="font-semibold">Average Rating:</span>{" "}
          {product.averageRating}
        </li>
      </ul>
      <div className="text-xl font-semibold text-green-600 mb-4">
        Price: <span className="text-black">৳ {product.price || 1}</span>
      </div>
      <p className="text-gray-500 text-sm mb-4">*Shipping and taxes extra</p>
      <div className="flex space-x-4">
        <button className="flex-1 bg-green-100 text-green-600 font-medium py-2 px-4 rounded-lg hover:bg-green-200">
          Add to Wishlist
        </button>
        <button className="flex-1 bg-green-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetalsRight;
