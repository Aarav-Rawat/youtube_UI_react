import React from "react";

const Items = ({ text, icon, menuClicked, setcategory, id, category }) => {
  return (
    <div
      onClick={() => setcategory(id)}
      className={` flex items-center gap-5 ml-5 mt-4 text-[1.8vw] cursor-pointer font-semibold
        ${category === id ? "text-red-600" : ""}
      `}
    >
      {icon}
      <h3 className={` ${category === id ? "text-[1.5vw]" : "text-[1.3vw]"}`}>{menuClicked ? text : ""}</h3>
    </div>
  );
};

export default Items;
