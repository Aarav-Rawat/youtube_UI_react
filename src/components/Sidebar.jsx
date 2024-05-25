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
            src="https://qph.cf2.quoracdn.net/main-qimg-0d28f748b98ef42f41a3d56731ec3e9b"
            alt=""
          />
          <span>{menuClicked?'Shiv':''}</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
