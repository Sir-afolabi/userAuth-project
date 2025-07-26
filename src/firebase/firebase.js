import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBp8XCgUw-6Up_fgWKmXoyjC090nFQIwdo",
  authDomain: "user-auth-project-d7066.firebaseapp.com",
  projectId: "user-auth-project-d7066",
  storageBucket: "user-auth-project-d7066.firebasestorage.app",
  messagingSenderId: "289810273402",
  appId: "1:289810273402:web:68801be8b1756df52057c3",
  measurementId: "G-Y40T9JKM55",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth, analytics };
