import React from "react";
import search from "../assets/svgs/search.svg";

const MainSide = () => {
  return (
    <>
      {/* main side started */}
      <section className="main_side w-full">
        {/* header started */}
        <div className="search_top bg-[#212121]">
          <div className="search">
            <input type="search" />
            <div className="search_btn">
              <img src={search} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default MainSide;
