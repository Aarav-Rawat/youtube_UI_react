import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";

const Home = ({ menuClicked }) => {
  const [category, setcategory] = useState(0);
  return (
    <>
      <Sidebar
        menuClicked={menuClicked}
        setcategory={setcategory}
        category={category}
      />
      <Feed menuClicked={menuClicked} category={category} />
    </>
  );
};

export default Home;
