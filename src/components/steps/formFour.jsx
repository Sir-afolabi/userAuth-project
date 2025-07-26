import { useEffect } from "react";

export default function AddressThree(props) {
  useEffect(() => {
    // add the states you will be creating together setAddress(contactInfo) contactInfo = state + zip + city
  }, []);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 mb-9">
        <button
          onClick={props.handleClick}
          className="absolute left-5 top-[65px]"
        >
          ⬅
        </button>
        <div className="relative">
          <input
            id="streetAddress"
            type="text"
            required
            className="peer w-full px-3 py-4 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200 placeholder-transparent"
            placeholder="Street address"
          />
          <label
            htmlFor="streetAddress"
            className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-500"
          >
            Street address
          </label>
        </div>

        <div className="relative">
          <input
            id="apartment"
            type="text"
            className="peer w-full px-3 pt-5 pb-2 pr-20 border border-gray-300 rounded-lg 
              focus:border-purple-500 focus:outline-none transition-all duration-200 
              placeholder-transparent"
            placeholder=" "
          />

          <label
            htmlFor="apartment"
            className="absolute left-3 top-2 text-xs text-gray-500 bg-white px-1
              transition-all duration-200
              peer-placeholder-shown:text-base 
              peer-placeholder-shown:text-gray-400 
              peer-placeholder-shown:top-4
              peer-focus:top-2
              peer-focus:text-xs
              peer-focus:text-purple-500"
          >
            Apartment
          </label>

          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400">
            Optional
          </span>
        </div>

        <div className="relative">
          <input
            id="city"
            type="text"
            required
            className="peer w-full px-3 py-4 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200 placeholder-transparent"
            placeholder="City"
          />
          <label
            htmlFor="city"
            className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-500"
          >
            City
          </label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <input
              id="state"
              type="text"
              required
              className="peer w-full px-3 py-4 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200 placeholder-transparent"
              placeholder="State"
            />
            <label
              htmlFor="state"
              className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-500"
            >
              State
            </label>
          </div>
          <div className="relative">
            <input
              id="zipCode"
              type="text"
              required
              className="peer w-full px-3 py-4 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200 placeholder-transparent"
              placeholder="Zip code"
            />
            <label
              htmlFor="zipCode"
              className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-500"
            >
              Zip code
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
