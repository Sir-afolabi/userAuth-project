import React, { useState } from "react";
import AddressThree from "./formFour";

export default function AddressTwo() {
  const [showManual, setShowManual] = useState(false);
  const handleManual = () => {
    setShowManual((prev) => !prev);
  };
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Personal Information</h2>
          <span className="text-green-500 text-sm font-bold">3 of 3</span>
        </div>
      </div>

      {!showManual && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <input
              id="fullName"
              type="text"
              required
              placeholder="Search for address"
              className="w-full px-3 py-4 placeholder-gray-400 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200"
            />
            <p className="text-xs text-gray-500 mb-4">
              Your address is not visible to the others users
            </p>
          </div>

          <div className="flex gap-2 text-[13px] mb-10 text-blue-700 font-bold">
            <button className="border border-[#EF498F47] rounded pl-1 pr-2 py-1 flex items-center gap-1 hover:bg-purple-50 transition-colors">
              <span className=" text-blue-500">📍</span>
              Use coordinated location
            </button>
            <button
              onClick={handleManual}
              className="border border-[#EF498F47]  rounded px-3 py-1 hover:bg-purple-50 transition-colors"
            >
              Add manually
            </button>
          </div>
        </div>
      )}
      {showManual && <AddressThree handleClick={handleManual} />}
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-[20px] mb-2">
          Sharing your address shows:
        </h2>

        <div className="flex items-center gap-2">
          <span className="text-black text-lg" role="img" aria-label="people">
            👥
          </span>
          <p className="text-[15px]"> People near you</p>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-black text-lg" role="img" aria-label="time">
            ⏱
          </span>
          <p className="text-[15px]"> Estimated delivery time</p>
        </div>

        <div className="flex items-center gap-5">
          <span className="text-black text-lg" role="img" aria-label="cost">
            $
          </span>
          <p className="text-[15px]">Estimated shipping cost</p>
        </div>
      </div>
    </div>
  );
}
