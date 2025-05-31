import React from "react";
import { CiCircleInfo } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";
const ProductInfo = ({ product }) => {
  const { brand, title, description, price, highlights } = product;

  const mrp = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: price.currency,
    maximumFractionDigits: 0,
  }).format(price.mrp);

  const sellingPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: price.currency,
    maximumFractionDigits: 0,
  }).format(price.discounted_price);

  return (
    <div className="col-span-7 h-screen overflow-y-auto">
      <div className="flex">
        <div className="col-span-6 p-4 ">
          <h2 className="font-blod text-lg text-gray-400 ">{brand}</h2>
          <h2 className="text-xl font-semibold">{product?.title}</h2>

          <p className="text-ms text-gray-500 mb-2">{product?.description}</p>
          <h6 className="rounded-md py-1 px-4 text-sm bg-green-500 text-white font-bold inline ">
            Special Price{" "}
          </h6>
          <div className="space-x-2 p-2 ">
            <span className="text-3xl font-bold text-green-600">
              {sellingPrice}
            </span>

            <span className="font-semibold text-gray-400 line-through">
              {mrp}
            </span>
            <span className="text-green-600 font-semibold">
              {product?.price.discount_percent}% Off
              <span className="relative group">
                <CiCircleInfo className="ml-2 inline text-black  " />
                <div
                  style={{zIndex:1000}}
                  className=" hidden text-black p-2 text-sm  absolute top-6 -bg-conic-90left-10 border border-gray-200 group-hover:block w-60   bg-white">
                  <h2>Price Details</h2>
                  <div className="mt-2 text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">
                        Maximum Retail Price
                      </span>
                      <span className="line-through text-gray-500">₹{mrp}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-700">Selling Price</span>
                      <span className="text-green-600 font-semibold">
                        ₹{sellingPrice}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-700">Discount Percent</span>
                      <span className="text-blue-600">
                        {product?.price.discount_percent}% Off
                      </span>
                    </div>

                    <div className="flex justify-between border-t pt-2 font-semibold">
                      <span>Total Amount</span>
                      <span>₹{sellingPrice}</span>
                    </div>

                    <div>
                      <p className="text-green-600">
                        You saved {product?.price.discount_percent}% on this
                        product!
                      </p>
                    </div>
                  </div>
                </div>
              </span>
            </span>
          </div>
          <div className="flex gap-3 pb-4 border-b  border-gray-300">
            <span className=" px-3 bg-amber-500 text-white flex items-center w-14 rounded-sm text-md">
              4.5 <IoMdStar className="inline text-2xl" />
            </span>
            <span className="text-gray-400">24 ratings and 0 reviews</span>
          </div>

          <div className="py-2 border-b border-gray-200">
            {product?.highlights.map((highlight, index) => (
              <p key={index} className="">
                {highlight}
              </p>
            ))}
          </div>

          <div className="mt-4 space-y-2">
            <div>
              <span className="font-semibold text-gray-700">Warranty: </span>
              <span className="text-gray-600">{product?.warranty}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">
                Return Policy:{" "}
              </span>
              <span className="text-gray-600">{product?.return_policy}</span>
            </div>
            <div className="">
              <span className="font-semibold text-gray-700">Seller: </span>
              <span className="text-gray-800">{product?.seller?.name}</span>
              <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 rounded text-sm font-medium">
                {product?.seller?.rating}{" "}
                <IoMdStar className="inline text-yellow-500" />
              </span>
              <span className="ml-2 text-gray-500 text-sm">
                ({product?.seller?.total_ratings} ratings)
              </span>
            </div>
          </div>
        </div>
      </div>
     </div>
  );
};

export default ProductInfo;
