import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <Sidebar />
      <Dashboard />
    </div>
  );
};
export default Main;
