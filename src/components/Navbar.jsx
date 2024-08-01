import React from "react";
import { CgMenuRound } from "react-icons/cg";
import { ImYoutube2 } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { MdVideoCall } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = ({ setmenuClicked }) => {
  return (
    <div className="md: flex gap-[14vw] justify-center items-center sticky top-0 shadow-2xl shadow-gray-200 z-10 h-[10vh] bg-white">
      <div className="flex gap-5 justify-center items-center">
        <CgMenuRound
          onClick={
            () => setmenuClicked((prev) => !prev)
          }
          className="text-4xl text-gray-600 cursor-pointer"
        />
        <Link to='/'>
        <ImYoutube2 className="text-8xl text-red-700 cursor-pointer" />
        </Link>
      </div>

      <div className="flex justify-center items-center gap-4  w-[45vw] h-[6vh] p-1 border-grey-10 border-2 rounded-2xl">
        <input
          type="text"
          placeholder="What Type Of Shit Today?"
          className=" w-[90%] h-full border-none outline-none text-lg"
        />
        <FaSearch className="text-xl cursor-pointer" />
      </div>

      <div className="flex justify-center items-center gap-6">
        <MdVideoCall className="text-red-700 cursor-pointer text-[30px]" />
        <IoNotifications className="cursor-pointer text-[30px]" />
        <img
          className="w-10 h-10 rounded-[50%] cursor-pointer"
          src="https://static.wixstatic.com/media/4ac546_4d08c9bb530248d7b2f2d64e79303ff1~mv2.png/v1/fill/w_560,h_540,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Full%20Color%20Logo.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
