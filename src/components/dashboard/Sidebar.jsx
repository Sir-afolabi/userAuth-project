import image1 from "../images/3d-square 1.png";
import image2 from "../images/key-square.png";
import image3 from "../images/user-square.png";
import image4 from "../images/wallet-money 2.png";
import image5 from "../images/discount-shape 1.png";
import image6 from "../images/message-question 1.png";
import logo from "../images/setting 1.png";
import lowImage from "../images/Ellipse 8.png";

export default function Navbar() {
  const sideBarItems = [
    {
      id: 1,
      image: image1,
      text: "Dashboard",
      symbol: ">",
    },
    { id: 2, image: image2, text: "Product", symbol: ">" },
    {
      id: 3,
      image: image3,
      text: "Customers",
      symbol: ">",
    },
    { id: 4, image: image4, text: "Income", symbol: ">" },
    {
      id: 5,
      image: image5,
      text: "Promote",
      symbol: ">",
    },
    {
      id: 6,
      image: image6,
      text: "Help",
      symbol: ">",
    },
  ];
  return (
    <div className="w-64 bg-[#FFFFFF] pt-7 px-4 h-screen flex flex-col justify-between box-border sticky top-0">
      <div className="flex flex-col">
        <div className="flex items-center pl-3">
          <img src={logo} alt="logo" />
          <h1 className="text-2xl font-poppins font-bold ml-1">Dashboard</h1>
        </div>
        <nav className="mt-6">
          {sideBarItems.map((item) => (
            <a
              key={item.id}
              className="flex items-center p-3 w-full font-poppins text-[#9197B3] rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
            >
              <span className="px-2">
                <img src={item.image} alt="images" />
              </span>
              <span>{item.text}</span>
              <span className="ml-auto">{item.symbol}</span>
            </a>
          ))}
        </nav>
      </div>
      <div className="font-poppins font-semibold text-white text-center p-2">
        <div className="bg-gradient-to-r from-[#EAABF0] to-[#4623E9] p-4 rounded-lg">
          <p>upgrade to PRO to get access to all features</p>
          <button className="py-1 px-5 mt-6 bg-white text-[#4925E9] rounded-2xl">
            Get Pro Now
          </button>
        </div>
        <div className="flex items-center rounded-lg p-3 mt-4">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
            <img
              src={lowImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-[#757575] font-poppins">Username</p>
            <p className="text-xs text-black font-poppins">Free Account</p>
          </div>
          {/* <span className="ml-auto text-[#9197B3] font-poppins">{">"}</span> */}
        </div>
      </div>
    </div>
  );
}
