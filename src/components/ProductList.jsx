import React from "react";
import moniterImg from "../assets/Electronics/moniter.png";
import { Link } from "react-router-dom";
const ProductList = ({head , Products}) => {
  return (
    <section className="p-4 ">
      <div className="bg-white p-4 rounded-md  ">
        <h1 className="text-2xl font-semibold">{head}</h1>

        <div className="p-4 grid md:grid-cols-6 gap-4 justify-center ">
          {Products &&
            Products.slice(0, 6).map((product, index) => (
              <Link
                key={index}
                to={`/product/${product.id}`}
                className="p-2 block ">
                <div>
                  <img
                    className="h-full object-contain hover:scale-105  transition-transform"
                    width={140}
                    src={moniterImg}
                    alt={product.title}
                  />
                </div>
                <p className="text-center ">{product.brand} </p>
                <p className="text-center font-semibold ">
                  {new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: product.price.currency
                  }).format(product.price.mrp)}
                </p>
              </Link>
            ))}
          
        </div>
      </div>
    </section>
  );
};

export default ProductList;
