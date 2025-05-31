import React from 'react';

const DeliverySection = () => {
  return (
    <div className="col-span-3 md:p-4 ">
      <div className="mt-6 space-y-4">
        <h2 className="text-lg font-semibold">Deliver to</h2>

        <div className="py-2 border-b border-green-300 flex items-center gap-2">
          <input
            type="text"
            placeholder="Enter your pin code"
            className="outline-none flex-1 px-2 py-1 border rounded-md"
          />
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-md">
            Check
          </button>
        </div>

        <div className="mt-2 text-sm text-gray-700">
          <p>
            Delivery by{" "}
            <span className="font-semibold">2 Jun, Monday</span> |{" "}
            <span className="text-green-600 font-semibold">Free</span>{" "}
            <span className="line-through text-gray-400 ml-1">₹40</span>
          </p>
        </div>

        <div className="flex gap-4 mt-4">
          <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-md">
            Add to Cart
          </button>
          <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded-md">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeliverySection;
