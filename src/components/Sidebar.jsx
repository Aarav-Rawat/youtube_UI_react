import React from "react";
import Items from "./Items";
import { MdHome, MdSportsVolleyball } from "react-icons/md";
import { SiDcentertainment, SiYoutubegaming } from "react-icons/si";
import { FaCarSide, FaRegNewspaper } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { CiMusicNote1 } from "react-icons/ci";
import { LiaBlogSolid } from "react-icons/lia";

const Sidebar = ({menuClicked,setcategory,category}) => {
  const menuItems = [
    {
      item: "Home",
      icon: <MdHome />,
      id: 0,
    },
    {
      item: "Gaming",
      icon: <SiYoutubegaming />,
      id: 20,
    },
    {
      item: "Automobiles",
      icon: <FaCarSide />,
      id: 2,
    },
    {
      item: "Sports",
      icon: <MdSportsVolleyball />,
      id: 17,
    },
    {
      item: "Entertainment",
      icon: <SiDcentertainment />,
      id: 24,
    },
    {
      item: "Technology",
      icon: <GrTechnology />,
      id: 28,
    },
    {
      item: "Music",
      icon: <CiMusicNote1 />,
      id: 10,
    },
    {
      item: "Blogs",
      icon: <LiaBlogSolid />,
      id: 22,
    },
    {
      item: "News",
      icon: <FaRegNewspaper />,
      id: 25,
    },
  ];

  return (
    <div className={`bg-gray-100 flex flex-col gap-5 fixed left-0 z-[5] h-[90vh] shadow-xl shadow-gray-300 ${menuClicked ?'w-[15vw]':'w-[5vw]'}` } >
      <div>
        {menuItems.map((value,index) => (
        <Items id={value.id} setcategory={setcategory} category={category} menuClicked={menuClicked} key={index} icon={value.icon} text={value.item} />
        ))}
      </div>

      <hr className="mx-4 border-2 border-gray-500"/>

      <div className="mt-[-1vw] ml-4">
        <span className="text-xl text-gray-600 font-semibold">
        {menuClicked?'SUBSCRIBED':''}</span>
        <div className="flex items-center gap-3 text-xl mt-2">
          <img
            className="w-7 h-7 rounded-[50%]"
            src="https://static.wixstatic.com/media/4ac546_4d08c9bb530248d7b2f2d64e79303ff1~mv2.png/v1/fill/w_560,h_540,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Full%20Color%20Logo.png"
            alt=""
          />
          <span>{menuClicked?'MrBeast':''}</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
