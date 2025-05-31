import React from 'react';
import moniterImg from "../../assets/Electronics/moniter.png";


const ProductImages = ({ product }) => {
  return (
    <div className="col-span-5 p-4 ">
      <div>
        <img className="w-92" src={moniterImg} alt="" />
        <div className="flex gap-6">
          {product.images?.map((img, index) => (
            <img
              key={index}
              src={moniterImg}
              className="w-16 h-16 border"
              alt=""
            />
          ))}
        </div>
      </div>
    </div>

  );
}

export default ProductImages;
