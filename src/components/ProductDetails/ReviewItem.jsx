import React, { useState } from "react";
import { SlLike, SlDislike } from "react-icons/sl";
import { CiMenuKebab } from "react-icons/ci";
import moniterImg from "../../assets/Electronics/moniter.png";
import { IoMdStar } from "react-icons/io";

const ReviewItem = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  return (
    <div className="border-b border-gray-300">
      <div>
        <span className=" px-3 bg-amber-500 text-white flex items-center w-14 rounded-sm text-md">
          4.5 <IoMdStar className="inline text-2xl" />
        </span>
        <span>Very beautiful product</span>
      </div>
      <div>
        <img src={moniterImg} alt="" className="w-24 h-24 " />
      </div>
      <div className="flex justify-between p-2 ">
        <div>
          <h2>
            Akilesh yadav | <span>Jan , 2025</span>
          </h2>
          <p>address</p>
        </div>
        <div className="flex gap-4 items-center">
          <button
            className="flex items-center gap-1"
            onClick={() => setLikeCount(likeCount + 1)}
            aria-label="Like"
          >
            <SlLike />
            <span>{likeCount}</span>
          </button>
          <button
            className="flex items-center gap-1"
            onClick={() => setDislikeCount(dislikeCount + 1)}
            aria-label="Dislike"
          >
            <SlDislike />
            <span>{dislikeCount}</span>
          </button>
          <CiMenuKebab />
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
