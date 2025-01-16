import Features from "@/app/components/features/Features";
import { Loading } from "@/app/components/products/loading";
import Products from "@/app/components/products/Products";
import Banner from "@/app/components/shred/header/banner/Banner";
import { Suspense } from "react";

function Home() {
  return (
    <>
      <Banner />
      <Features />
      <Suspense fallback={<h5>Loading....</h5>}>
        <Products />
      </Suspense>

      {/* <ProductCard/> */}
    </>
  );
}

export default Home;
