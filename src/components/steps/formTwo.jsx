// import React, { useState } from "react";

export default function PersonalInfo() {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3 w-full">
            <h2 className="text-lg font-semibold">Personal Information</h2>
            <span className="text-green-500 text-sm font-bold">2 of 3</span>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="fullName" className="sr-only">
            Full name
          </label>
          <input
            id="fullName"
            type="text"
            required
            placeholder="Full name"
            className="w-full px-3 py-4 placeholder-gray-400 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200"
          />
        </div>

        <fieldset className="mb-4 w-full">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <p className="text-sm text-gray-700">Gender: </p>
              <input
                type="radio"
                name="gender"
                value="male"
                className="h-4 w-full text-purple-600 focus:ring-purple-500 border-gray-300 "
                required
              />
              <span className="text-sm text-gray-700">Male</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="female"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                required
              />
              <span className="text-sm text-gray-700">Female</span>
            </label>
          </div>
        </fieldset>

        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2 font-bold">
            The phone number and birthday are only visible to you
          </p>
          <div className="flex gap-2">
            <select
              className="w-1/4 px-3 py-4 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
              aria-label="Country code"
            >
              <option value="+234">+234</option>
            </select>
            <input
              type="tel"
              required
              placeholder="Phone number"
              className="flex-1 px-3 py-4 placeholder-gray-400 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="birthday" className="sr-only">
            Birthday
          </label>
          <input
            id="birthday"
            type="text"
            placeholder="Birthday"
            required
            className="w-full px-3 py-4 placeholder-gray-400 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
          />
          <p className="text-xs text-gray-500 mt-2">
            Let us know about your birthday so as not to miss a gift
          </p>
        </div>
      </div>
    </div>
  );
}
