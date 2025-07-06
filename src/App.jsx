import Navbar from "../src/components/Sidebar.jsx";
import Dashboard from "./components/Dashboard.jsx";

export default function App() {
  return (
    <div className="flex h-screen">
      <Navbar />
      <Dashboard />
    </div>
  );
}
