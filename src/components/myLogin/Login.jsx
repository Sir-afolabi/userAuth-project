import React, { useState } from "react";
import apple from "../../assets/images/Apple.png";
import google from "../../assets/images/Google.png";
import facebook from "../../assets/images/Facebook.png";
import PersonalInfo from "../steps/formTwo.jsx";
import AddressTwo from "../steps/formThree.jsx";
import Success from "../steps/formFive.jsx";
import {
  doSignInWithEmailAndPassword,
  doCreateUserWithEmailAndPassword,
} from "../../firebase/auth.js";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [activeTab, setActiveTab] = useState("Register");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [step, setStep] = useState(1);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleTab = (tabName) => {
    setActiveTab(tabName);
  };
  const getCustomErrorMessage = (error) => {
    switch (error.code) {
      case "auth/user-not-found":
        return "No account found with this email address.";
      case "auth/wrong-password":
        return "Incorrect password. Please try again.";
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/email-already-in-use":
        return "An account with this email already exists.";
      case "auth/weak-password":
        return "Password should be at least 6 characters long.";
      case "auth/too-many-requests":
        return "Too many failed attempts. Please try again later.";
      case "auth/network-request-failed":
        return "Network error. Please check your connection.";
      default:
        return "password/username incorrect. Please try again.";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (activeTab === "Register") {
      if (step === 1) {
        setStep(2);
        return;
      }
      if (step === 2) {
        setStep(3);
        return;
      }
      if (step === 3) {
        if (!isSigningIn) {
          setIsSigningIn(true);
          try {
            await doCreateUserWithEmailAndPassword(email, password);
            setStep(4);
          } catch (error) {
            console.error("Registration failed: ", error);
            setError(getCustomErrorMessage(error));
          } finally {
            setIsSigningIn(false);
          }
        }
        return;
      }
      if (step === 4) {
        await setStep(1);
        setActiveTab("Login");
      }
    } else {
      if (!isSigningIn) {
        setIsSigningIn(true);
        try {
          await doSignInWithEmailAndPassword(email, password);
          navigate("/Main");
        } catch (error) {
          console.error("Login failed: ", error);
          setError(getCustomErrorMessage(error));
        } finally {
          setIsSigningIn(false);
        }
      }
    }
  };

  return (
    <div className="bg-[#5C636B14] min-h-screen flex items-center justify-center font-commissioner ">
      <div
        className={`w-full max-w-md mx-4 sm:mx-0 bg-opacity-80 rounded-lg relative overflow-hidden shadow bg-[#FFFFFF] ${
          step === 4 ? "p-0" : "p-4 sm:p-5 h-full"
        }`}
      >
        <div className="flex justify-between ">
          {step === 1 && (
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
          )}
          {step > 1 && <div></div>}

          <button
            className="absolute right-4 top-5"
            onClick={() => setStep((prev) => prev - 1)}
          >
            ✖
          </button>
        </div>
        {step === 1 && (
          <div className="flex mt-8 mb-2">
            <img src={apple} alt="apple-img" className="pr-2" />
            <img src={google} alt="google-img" />
            <img src={facebook} alt="microsoft-img" className="pl-2" />
          </div>
        )}
        <form
          action=""
          method="POST"
          className={`w-full flex flex-col gap-5 items-start  ${
            step !== 1 && "justify-between h-full "
          }  ${
            activeTab === "register" ? "justify-between" : "justify-between"
          } `}
          onSubmit={handleSubmit}
        >
          {step === 1 && (
            <div className="w-full flex flex-col gap-1">
              <p className="text-[#1A071066] text-xs sm:text-[13px] ">
                or register with email
              </p>
              <div className="flex flex-col pt-3 gap-6 w-full">
                <div className="relative w-full">
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
                <div className="relative w-full">
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
                  <p className="-mt-3  text-[#1A0710] text-opacity-65 text-[13px]">
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
              </div>
            </div>
          )}
          {step === 2 && <PersonalInfo />}
          {step === 3 && <AddressTwo />}
          {step === 4 && <Success />}
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className={`bg-[#5932EA] text-white font-bold rounded-lg mt-5 mb-4 h-[56px]  ${
              step === 4 ? "w-[90%] ml-5" : "w-full"
            }`}
          >
            {isSigningIn
              ? "Signing in..."
              : activeTab === "Register"
              ? step === 2 || step === 3
                ? "Save information"
                : step === 4
                ? "Go to Login"
                : "Create account"
              : "Login"}
          </button>
          {step === 1 && (
            <label className="flex items-center gap-1">
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
          )}
          {step === 1 && (
            <p className="text-center text-xs pt-2 text-[#1A071066] w-full">
              By continuing, i agree with the {""}
              <a href="#" className="text-sky-500 underline">
                Terms and Conditions
                <br /> Privacy Policy
              </a>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
