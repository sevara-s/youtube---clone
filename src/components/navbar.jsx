import React from "react";
import search from "../assets/svgs/search.svg";
import top1 from "../assets/svgs/top1.svg";
import top2 from "../assets/svgs/top2.svg";
import top3 from "../assets/svgs/top3.svg";
import profile from "../assets/svgs/profile.svg";
import channel from "../assets/svgs/channel.svg";

const Navbar = () => {
  return (
    <>
      {/* search top started */}
      <div className="search_top bg-[#212121] flex items-center justify-between pl-[40px] pt-[10px] pr-[20px]  border-b border-[#a3a2a2] w-[100%] ">
        {/* search started  */}
        <div className="search flex items-center p-[25px] ">
          <input
            placeholder="search..."
            className="outline-none border rounded-[2px] bg-[#000] placeholder:text-[grey] p-[3px] text-[white]"
            type="search "
          />
          <div className="search_btn p-[3px] bg-[#6d6c6c]">
            <img src={search} alt="" />
          </div>
        </div>
        {/* icons and profile */}
        <div className="icons_profile flex items-center gap-[25px]">
          <img src={top1} alt="" />
          <img src={top2} alt="" />
          <img src={top3} alt="" />
          <img src={profile} alt="" />
        </div>
      </div>
    </>
  );
};
export default Navbar;
