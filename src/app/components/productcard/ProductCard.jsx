const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-sm p-4 flex flex-col">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-md w-full h-40 object-cover"
        />
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
      <button className="mt-auto bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
        See Details
      </button>
    </div>
  );
};

export default ProductCard;
