import React, { useState } from "react";
import image1 from "../../assets/images/Group 10.png";
import image2 from "../../assets/images/Group 11.png";
import image3 from "../../assets/images/Group 12.png";
import round1 from "../../assets/images/Ellipse 58.png";
import round2 from "../../assets/images/Ellipse 58.png";
import round3 from "../../assets/images/Ellipse 58.png";
import round4 from "../../assets/images/Ellipse 58.png";
import round5 from "../../assets/images/Ellipse 58.png";

export default function Dashboard() {
  const [customers] = useState([
    {
      id: 1,
      customerName: "Jane Cooper",
      company: "Microsoft",
      phoneNum: "+1-555-0123",
      email: "john.doe@techcorp.com",
      country: "USA",
      status: "active",
    },
    {
      id: 2,
      customerName: "Floyd Miles",
      company: "Yahoo",
      phoneNum: "+1-555-0456",
      email: "jane.smith@designstudio.com",
      country: "Canada",
      status: "inactive",
    },
    {
      id: 3,
      customerName: "Ahmed Hassan",
      company: "Global Solutions",
      phoneNum: "+234-801-234-5678",
      email: "ahmed.hassan@globalsolutions.com",
      country: "Nigeria",
      status: "active",
    },
    {
      id: 4,
      customerName: "Maria Rodriguez",
      company: "Innovation Labs",
      phoneNum: "+1-555-0789",
      email: "maria.rodriguez@innovationlabs.com",
      country: "Mexico",
      status: "inactive",
    },
    {
      id: 5,
      customerName: "Ronald Richards",
      company: "Innovation Labs",
      phoneNum: "+1-555-0789",
      email: "maria.rodriguez@innovationlabs.com",
      country: "Mexico",
      status: "active",
    },
    {
      id: 6,
      customerName: "Marvin McKinney",
      company: "Innovation Labs",
      phoneNum: "+1-555-0789",
      email: "maria.rodriguez@innovationlabs.com",
      country: "Mexico",
      status: "active",
    },
  ]);

  const getStatusButtonStyle = (status) => {
    return status === "active"
      ? "bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium"
      : "bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium";
  };

  const memberInfo = [
    {
      infoImage: image1,
      text: "Total Customers",
      number: 5423,
      period: (
        <span>
          <span className="text-red-500">&uarr; 10%</span> this month
        </span>
      ),
    },
    {
      infoImage: image2,
      text: "Members",
      number: 1893,
      period: (
        <span>
          <span className="text-blue-500"> &darr; 1%</span> this month
        </span>
      ),
    },
    {
      infoImage: image3,
      text: "Active Now",
      number: 189,
      roundedImages: [round1, round2, round3, round4, round5],
    },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-20 py-6 w-full bg-[#FAFBFF] min-h-screen lg:h-dvh overflow-y-scroll [&::-webkit-scrollbar]:hidden scrollbar">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold font-poppins">Hello User ,</h1>
        <input
          type="text"
          placeholder="search..."
          className="border border-gray-300 rounded-md px-2 h-8 text-sm font-poppins ml-auto w-32 md:w-auto"
        />
      </div>

      <div className="rounded-xl flex flex-col md:flex-row justify-between w-full bg-[#FFFFFF] mt-9 p-4 md:p-7 gap-4 md:gap-0">
        {memberInfo.map((item, index) => (
          <div className="flex items-center" key={index}>
            <div className="flex gap-x-4 items-center">
              <img src={item.infoImage} alt="img" />
              <div>
                <p className="font-poppins text-xs text-[#ACACAC]">
                  {item.text}
                </p>
                <p className="font-poppins text-[#333333] text-xl font-semibold">
                  {item.number}
                </p>
                {item.period ? (
                  <p className="font-poppins text-[#333333]">{item.period}</p>
                ) : (
                  <div className="flex items-center">
                    {item.roundedImages.slice(0, 4).map((img, i) => (
                      <img
                        src={img}
                        key={i}
                        className={`${i > 0 ? "-ml-3" : ""} relative ${
                          i === 0 ? "z-30" : i === 1 ? "z-20" : "z-10"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
            {index < memberInfo.length - 1 && (
              <div className="h-16 w-px bg-gray-300 mx-20"></div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-semibold font-poppins">
              All Customers
            </h2>
            <p className="text-[#16C098] font-poppins">Active Members</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="search"
              className="border border-gray-300 rounded-md px-2 h-8 text-sm font-poppins"
            />
            <input
              type="text"
              placeholder="short by: Newest"
              className="border border-gray-300 rounded-md px-2 h-8 text-sm font-poppins"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-4">
          <div className=" border-b border-gray-200">
            <div className="grid gap-6 p-4 font-semibold text-gray-700 font-poppins grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
              <div>Customer Name</div>
              <div>Company</div>
              <div>Phone Number</div>
              <div>Email</div>
              <div>Country</div>
              <div>Status</div>
            </div>
          </div>

          <div className="divide-y ">
            {customers.map((customer) => (
              <div
                key={customer.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <div
                  className="grid gap-6 p-4 items-center font-poppins"
                  style={{
                    gridTemplateColumns: "2fr 1.5fr 1.5fr 2.5fr 1fr 1fr",
                  }}
                >
                  <div className="font-medium text-gray-900 truncate">
                    {customer.customerName}
                  </div>
                  <div className="text-gray-600 truncate">
                    {customer.company}
                  </div>
                  <div className="text-gray-600 truncate">
                    {customer.phoneNum}
                  </div>
                  <div
                    className="text-gray-600 truncate"
                    title={customer.email}
                  >
                    {customer.email}
                  </div>
                  <div className="text-gray-600 truncate">
                    {customer.country}
                  </div>
                  <div>
                    <button className={getStatusButtonStyle(customer.status)}>
                      {customer.status}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
