import React from "react";
import ProductCard from "./ProductCard";
import { productsArray } from "../data/storeProducts";

function Store() {
  return (
    <>
      <h1 className=" mx-9 flex justify-center text-xl font-bold my-8">Welcome to the store!!</h1>
      <div className="mx-9  flex flex-wrap justify-center">
      {productsArray.map(product => (
        <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
          <ProductCard
            id={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
          />
        </div>
      ))}
    </div>
    </>
  );
}

export default Store;


