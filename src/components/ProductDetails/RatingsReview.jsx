import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";

import ReviewItem from "./ReviewItem";
const RatingsReview = () => {
 
  return (
    <>
      <div className="grid grid-cols-12 border-t border-gray-200 p-4">
        <div className="col-span-3">
          <h2 className="font-bold text-xl">Ratings & Reviews </h2>
        </div>
        <div className="col-span-7">
          <div className="flex items-center gap-3 pb-4">
            <span className="px-3 bg-amber-500 text-white flex items-center justify-center rounded text-md font-semibold">
              4.5 <IoMdStar className="ml-1 text-white text-lg" />
            </span>
            <span className="text-gray-500 text-sm">
              24 ratings &middot; 0 reviews
            </span>
          </div>
        </div>

        <div className="col-span-2">
          <button className="bg-blue-500 text-white px-2 rounded-sm py-2 ">
            Rate Product
          </button>
        </div>
      </div>

      <ReviewItem />
    </>
  );
};

export default RatingsReview;
