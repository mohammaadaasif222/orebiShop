import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {fetchProducts} from '../../../redux/productsSlice'
import {useDispatch, useSelector} from 'react-redux'
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";
import { useEffect } from "react";

const BestSellers = () => {
  const dispatch = useDispatch()
  const {products} = useSelector((state)=>state.products)
  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch])
  const shortName = (name) => {
    const words = name.split(" ");
    const firstTwoWords = words.slice(0, 3).join(" ");
    return firstTwoWords;
  };
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {products?.slice(0, 4).map((product) =>( <Product
          key={product.title}
          _id={product.id}
          img={product.image}
          productName={shortName(product.title)}
          price={product.price}
          color="Blank and White"
          badge={true}  
          des={product.description}
        />))}
       
        {/* <Product
          _id="1012"
          img={bestSellerTwo}
          productName="New Backpack"
          price="180.00"
          color="Gray"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Household materials"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Travel Bag"
          price="220.00"
          color="Black"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        /> */}
      </div>
    </div>
  );
};

export default BestSellers;
