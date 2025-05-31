import React from 'react';
import { Link } from 'react-router-dom';
import moniterImg from "../assets/Electronics/moniter.png";

const ProductCard = ({ Products }) => {
  return (
    <div className="p-4 grid md:grid-cols-2 gap-4 justify-center  bg-white ">
      {Products &&
        Products.slice(0, 4).map((product, index) => (
          <Link
            key={index}
            to={`/product/${product.id}`}
            className="p-2 block border-gray-200 border-1">
            <div>
              <img
                className="h-full object-contain hover:scale-105  transition-transform"
                width={140}
                src={moniterImg}
                alt={product.brand}
              />
            </div>
            <p className=" ">{product.brand} </p>
            <p className=" text-green-600 font-semibold ">
             Up to  {(product.price.discount_percent)} %Off
            </p>
          </Link>
        ))}

    </div>
  );
}

export default ProductCard;
