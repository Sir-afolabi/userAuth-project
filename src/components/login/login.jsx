import React, { useState } from "react";
import apple from "../images/Apple.png";
import google from "../images/Google.png";
import facebook from "../images/Facebook.png";

export default function Login() {
  const [activeTab, setActiveTab] = useState("Register");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);

  const handleTab = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPassword("");
    setEmail("");
    setChecked(false);
    setIsEmailValid("");
    setIsPasswordValid("");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center font-commissioner">
      <div className="w-full max-w-md bg-white bg-opacity-80 rounded-lg py-5 px-5">
        <div className="flex justify-between ">
          <div className="flex gap-x-4">
            <div className="relative">
              <button onClick={() => handleTab("Register")}>Register</button>
              {activeTab === "Register" && (
                <div className="absolute right-0 left-0 h-0.5 bg-orange-500 mt-2"></div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => handleTab("Login")}>Login</button>
              {activeTab === "Login" && (
                <div className="absolute right-0 left-0 h-0.5 bg-orange-500 mt-2"></div>
              )}
            </div>
          </div>
          <button>✖</button>
        </div>
        <div className="flex mt-8 ">
          <img src={apple} alt="apple-img" className="pr-2" />
          <img src={google} alt="google-img" />
          <img src={facebook} alt="microsoft-img" className="pl-2" />
        </div>
        <form action="" method="POST" className="mt-5" onSubmit={handleSubmit}>
          <p className="text-[#1A071066] text-[13px] ">
            or register with email
          </p>
          <div className="flex flex-col pt-4 gap-6">
            <div className="relative">
              <input
                type="email"
                required
                className="peer w-full px-3 pt-7 pb-2 placeholder-transparent border border-gray-300 rounded-lg h-[56px] focus:border-purple-500 focus:outline-none transition-colors duration-200"
                placeholder="Email address"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  const isValid =
                    event.target.value.includes("@") &&
                    event.target.value.includes(".com");
                  setIsEmailValid(isValid);
                }}
              />
              <span className="absolute left-3 top-2 text-xs  transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-500 pointer-events-none">
                Enter your email
              </span>
              {isEmailValid && (
                <span className="absolute right-3 top-1/2 -translate-y-1/5 text-green-500">
                  ✓
                </span>
              )}
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                className="peer w-full px-3 pt-7 pb-2 placeholder-transparent border border-gray-300 rounded-lg mb-4 h-[56px] focus:border-purple-500 focus:outline-none transition-colors duration-200"
                placeholder="Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  const validPassword = event.target.value.length >= 8;
                  setIsPasswordValid(validPassword);
                }}
              />
              <p className="-mt-3 text-[#1A0710] text-opacity-65 text-[13px]">
                8+ characters
              </p>
              <span className="absolute left-3 top-2 text-xs  transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-500 pointer-events-none">
                password
              </span>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-3"
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
              {isPasswordValid && (
                <span className="absolute right-8 top-1/2 -translate-y-1/2 text-green-500">
                  ✓
                </span>
              )}
            </div>
            <button
              type="submit"
              className="bg-[#5932EA] text-white font-bold rounded-lg mb-4 h-[56px]"
            >
              {activeTab === "Register"
                ? "Create account"
                : activeTab === "Login"
                ? "Login"
                : "Create account"}
            </button>
          </div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              checked={checked}
              onChange={(event) => setChecked(event.target.checked)}
              required
            />
            <span className="text-sm text-gray-700">
              send me news and promotions
            </span>
          </label>
          <p className="text-center text-xs pt-9 text-[#1A071066]">
            By continuing, i agree with the {""}
            <a href="#" className="text-sky-500 underline">
              Terms and Conditions
            </a>
          </p>
          <p className="text-center text-xs pt-1 text-[#1A071066]">
            <a href="#" className="text-sky-500 underline">
              Privacy Policy
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
