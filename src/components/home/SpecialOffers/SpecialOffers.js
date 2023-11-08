import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";

import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../../redux/productsSlice";
import { useEffect } from "react";

const SpecialOffers = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const shortName = (name) => {
    const words = name.split(" ");
    const firstTwoWords = words.slice(0, 3).join(" ");
    return firstTwoWords;
  };
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {products.slice(0, 4).map((product) => {
          return (
            <Product
              key={product.title}
              _id={product.id}
              img={product.image}
              productName={shortName(product.title)}
              price={product.price}
              color="Blank and White"
              badge={true}
              des={product.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SpecialOffers;
