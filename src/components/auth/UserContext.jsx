import React, { useState, createContext, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setloggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, initializeUser);
    return unSubscribe;
  }, []);

  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      setloggedIn(true);
    } else {
      setCurrentUser(null);
      setloggedIn(false);
    }
    setLoading(false);
  }

  const value = {
    currentUser,
    loggedIn,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
