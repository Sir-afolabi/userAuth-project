import Navbar from "./components/dashboard/Sidebar.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Login from "./components/myLogin/Login.jsx";
import Main from "./components/dashboard/Main.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/Main"
        element={
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
