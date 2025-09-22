import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-[355px] h-[1385px] bg-white p-[20px] text-sm text-gray-800 ">
      {/* Hot Deals */}
      <div className="mb-[30px] bg-[#F6F7F8] p-10">
        <h2 className="text-[15px] font-semibold mb-[15px]">Hot Deals</h2>
        <ul className="space-y-[20px]">
          <li className="flex justify-between">
            <span>Nike</span>
            <span>2</span>
          </li>
          <li className="flex justify-between text-blue-500">
            <span>Airmax</span>
            <span>48</span>
          </li>
          <li className="flex justify-between">
            <span>Nike</span>
            <span>14</span>
          </li>
          <li className="flex justify-between">
            <span>Adidas</span>
            <span>15</span>
          </li>
          <li className="flex justify-between">
            <span>Vans</span>
            <span>23</span>
          </li>
          <li className="flex justify-between">
            <span>All Stars</span>
            <span>1</span>
          </li>
          <li className="flex justify-between">
            <span>Adidas</span>
            <span>95</span>
          </li>
        </ul>
      </div>

      {/* Prices */}
      <div className="py-[20px] mt-8 mb-8 bg-[#F6F7F8] p-10">
        <h2 className="text-[15px] font-semibold mb-[15px]">Prices</h2>
        <div className="flex justify-between text-xs mb-[10px]">
          <span>Range:</span>
          <span>$13.99 - $25.99</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          className="w-full accent-blue-500"
        />
      </div>

      {/* Colors */}
      <div className="py-[20px] bg-[#F6F7F8] p-10">
        <h2 className="text-[15px] font-semibold mb-[15px]">Color</h2>
        <div className="flex space-x-[15px]">
          <button className="w-[20px] h-[20px] rounded-full border-2 border-blue-500 bg-white"></button>
          <button className="w-[20px] h-[20px] rounded-full bg-red-500"></button>
          <button className="w-[20px] h-[20px] rounded-full bg-black"></button>
          <button className="w-[20px] h-[20px] rounded-full bg-yellow-400"></button>
          <button className="w-[20px] h-[20px] rounded-full bg-pink-300"></button>
        </div>
      </div>

      {/* Brands */}
      <div className="py-[20px] mt-8 mb-8 bg-[#F6F7F8] p-10">
        <h2 className="text-[15px] font-semibold mb-[15px]">Brand</h2>
        <ul className="space-y-[12px]">
          <li className="flex justify-between">
            <span>Nike</span>
            <span>99</span>
          </li>
          <li className="flex justify-between text-blue-500">
            <span>Nike</span>
            <span>99</span>
          </li>
          <li className="flex justify-between">
            <span>Adidas</span>
            <span>99</span>
          </li>
          <li className="flex justify-between">
            <span>Siemens</span>
            <span>99</span>
          </li>
        </ul>
      </div>

      {/* More Button */}
      <div className="py-[20px] text-center bg-[#F6F7F8] ">
        <button className=" text-[15px] font-semibold ">
          MORE
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
