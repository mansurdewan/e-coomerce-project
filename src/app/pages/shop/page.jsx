import Button from "@/app/components/button/Button";
import ProductCard from "@/app/components/productcard/ProductCard";
import ShopFilterBar from "@/app/components/shopfilterbar/ShopFilterbar";
import getProducts from "@/app/getData/products";

// const products = [
//   {
//     id: 1,
//     name: "Dried Figs (500g)",
//     price: 400,
//     stock: true,
//     rating: 4.8,
//     image: "/path/to/image1.jpg",
//   },
//   {
//     id: 2,
//     name: "Sandalwood Oil (50ml)",
//     price: 500,
//     stock: false,
//     rating: 4.8,
//     image: "/path/to/image2.jpg",
//   },
//   // Add other products
// ];
const products = await getProducts();

export default function Shop() {
  return (
    <div className="container mx-auto p-4">
      {products && <ShopFilterBar />}
      <h1 className="text-2xl font-bold mt-4">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
        {products && products.length > 0 ? (
          products
            ?.slice(0, 10)
            ?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        ) : (
          <p className="text-center text-red-500">Products not Found</p>
        )}
      </div>
      <div className="">
        <Button data={{ text: "See More" }} />
      </div>
    </div>
  );
}
