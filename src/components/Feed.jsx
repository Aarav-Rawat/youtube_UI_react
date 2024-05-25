import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { viewsConverter } from "../data";
import moment from 'moment';


const Feed = ({ menuClicked, category }) => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=AIzaSyAch7F7bldGTgFu2GV9Y-rEEk4sZi5VqKI`
    )
      .then((response) => response.json())
      .then((data) => setdata(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [category]);
  

  return (
    <div
      className={`grid ml-[15vw] gap-x-5 gap-y-8 px-5 py-3
     ${menuClicked ? "grid-cols-3" : "grid-cols-4 ml-[5vw] "}`}
    >
      {data.map((item) => (
           <Link key={item.id}  to={`video/${item.snippet.categoryId}/${item.id}`} className='flex flex-col'>
           <img className='rounded-lg cursor-pointer' src={item.snippet.thumbnails.medium.url}alt="" />
           <p className='mt-2 font-bold text-md cursor-pointer'>{item.snippet.title}</p>
           <span className='font-semibold text-gray-600 cursor-pointer' >{item.snippet.channelTitle}</span>
           <span>{viewsConverter(item.statistics.viewCount)} • {moment(item.snippet.publishedAt).fromNow()}</span>
       </Link>
      ))}
    </div>
  );
};

export default Feed;
