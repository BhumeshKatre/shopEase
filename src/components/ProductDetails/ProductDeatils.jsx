import React from "react";
import ElectronicProducts from "../../constants/product_data.json";
import { useParams } from "react-router-dom";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import DeliverySection from "./DeliverySection";
import RatingsReview from "./RatingsReview";


const ProductsDetails = () => {
  const { productId } = useParams();

  const clickedProduct = ElectronicProducts.find(
    (product) => product.id === productId
  );

  if (!clickedProduct) return <p>Product not found</p>;

  return (
    <div className="grid grid-cols-12 gap-4 p-4 bg-white">
      <div className="col-span-5 p-4">
        <ProductImages product={clickedProduct} />
      </div>
      <div className="col-span-7 h-screen  overflow-y-auto">
        <div className="flex">
          <div className="col-span-6 p-4">
            <ProductInfo product={clickedProduct} />
          </div>
          <div className="col-span-3 p-4">
            <DeliverySection />
          </div>
        </div>
        <RatingsReview product={clickedProduct} />
      </div>
    </div>
  );
};

export default ProductsDetails;
