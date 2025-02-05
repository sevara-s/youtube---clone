import { NavLink } from "react-router-dom";
import { useState } from "react";
// icons are beinging imported
import catalog from "../assets/svgs/catalogs.svg";
import main from "../assets/svgs/main_logo.svg";
import {
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
  icon10,
  icon11,
  icon12,
  icon13,
  icon14,
  icon15,
  icon16,
  sub1,
  sub2,
  sub3,
  sub4,
} from "../assets/svgs/index.js";

const SideBar = () => {
  // links1
  const [links1, setLinks] = useState([
    {
      id: 1,
      img: icon1,
      name: "Home",
    },
    {
      id: 2,
      img: icon2,
      name: "Trending",
    },
    {
      id: 3,
      img: icon3,
      name: "Subscriptions",
    },
  ]);
  //   links2
  const [links2, setLinks2] = useState([
    {
      id: 1,
      img: icon4,
      name: "Library",
    },
    {
      id: 2,
      img: icon5,
      name: "History",
    },
    {
      id: 3,
      img: icon6,
      name: "Your videos",
    },
    {
      id: 4,
      img: icon7,
      name: "Watch later",
    },
    {
      id: 5,
      img: icon8,
      name: "Liked videos",
    },
  ]);
  //   subs
  const [subs, setSubs] = useState([
    {
      id: 1,
      img: sub1,
      name: "Oktay Candan",
    },
    {
      id: 2,
      img: sub2,
      name: "Arnold Morrison",
    },
    {
      id: 3,
      img: sub3,
      name: "Hudson Snyder",
    },
    {
      id: 4,
      img: sub4,
      name: "Thomas Burns",
    },
  ]);
  //   links3
  const [links3, setLinks3] = useState([
    {
      id: 1,
      img: icon9,
      name: "YouTube Premium",
    },
    {
      id: 2,
      img: icon10,
      name: "Gaming",
    },
    {
      id: 3,
      img: icon11,
      name: "Live",
    },
  ]);

  return (
    <>
      {/* sidebar started */}
      <div className="side_bar w-[240px]   bg-[#212121]">
        {/* main logo */}
        <div className="main_logo flex items-center justify-between p-[15px]">
          <img src={catalog} alt="" />
          <img src={main} alt="" />
        </div>

        {/* links1 */}
        <div className="links1 flex flex-col gap-[20px] p-[15px] border-b border-[#bcbaba]">
          {links1.map((l) => {
            return (
              <NavLink key={l.id} className="flex items-center gap-[10px]">
                <img src={l.img} alt="" />
                <p className="font-[500] text-[14px] text-[#fff]">{l.name}</p>
              </NavLink>
            );
          })}
        </div>
        {/* links2 */}
        <div className="links1 flex flex-col gap-[20px] p-[15px] border-b border-[#bcbaba]">
          {links2.map((l2) => {
            return (
              <NavLink key={l2.id} className="flex items-center gap-[10px]">
                <img src={l2.img} alt="" />
                <p className="font-[500] text-[14px] text-[#fff]">{l2.name}</p>
              </NavLink>
            );
          })}
        </div>
        {/* subscription */}
        <div className="subscription">
          <h1 className="font-[500] text-[14px] text-white/10  p-[15px]">
            SUBSCRIPTION
          </h1>
          <div className="subs border-b border-[#bcbaba] flex flex-col gap-[20px] p-[15px] ">
            {subs.map((sub1) => {
              return (
                <div
                  key={sub1.id}
                  className="sub1 flex items-center gap-[10px]"
                >
                  <img src={sub1.img} alt="" />
                  <p className="font-[400] text-[14px] text-[#fff]">
                    {sub1.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* links3 */}
        <div className="links1 flex flex-col gap-[20px] p-[15px] border-b border-[#bcbaba]">
          {links3.map((l3) => {
            return (
              <NavLink key={l3.id} className="flex items-center gap-[10px]">
                <img src={l3.img} alt="" />
                <p className="font-[500] text-[14px] text-[#fff]">{l3.name}</p>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default SideBar;
