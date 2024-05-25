import React, { useEffect, useState } from "react";
import { AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { HiSave } from "react-icons/hi";
import { API_KEY_URL, viewsConverter } from "../data";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = () => {
  const {videoId} = useParams();
  const [apiData, setapiData] = useState(null);
  const [channelData, setchannelData] = useState(null);
  const [commentData, setcommentData] = useState([]);

  const fetchOtherData = async () => {
    const channelDetails_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY_URL}`;

    await fetch(channelDetails_URL)
      .then((response) => response.json())
      .then((data) => setchannelData(data.items[0]));

    const commentDetails_URL = `  https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=${videoId}&key=${API_KEY_URL}
    `; 

    await fetch(commentDetails_URL)
      .then((response) => response.json())
      .then((data) => setcommentData(data.items));
  };

  const fetchVideoData = async () => {
    const videodetails_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY_URL}`;

    await fetch(videodetails_URL)
      .then((response) => response.json())
      .then((data) => setapiData(data.items[0]));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className="mx-4 w-[73vw]">
      <div>
        <iframe
          className="h-[90vh] w-[100%] border-0 outline-0"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <div className="my-4">
          <p className="font-bold text-2xl mb-2">
            {apiData ? apiData.snippet.title : "Title"}
          </p>
          <div className="flex justify-between font-medium">
            <div>
              <span>
                {apiData
                  ? viewsConverter(apiData.statistics.viewCount)
                  : "views"}{" "}
                •{" "}
                {apiData
                  ? moment(apiData.snippet.publishedAt).fromNow()
                  : "Date & Time"}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <AiTwotoneLike className="mr-1 cursor-pointer text-2xl" />
              <span className="mr-4">
                {apiData
                  ? viewsConverter(apiData.statistics.likeCount)
                  : "Likes"}
              </span>
              <AiTwotoneDislike className="mr-5 cursor-pointer text-2xl" />
              <FaShareAlt className="mr-1 cursor-pointer text-2xl" />
              <span className="mr-4">Share</span>
              <HiSave className="mr-1 cursor-pointer text-2xl" />
              <span className="mr-4">Save</span>
            </div>
          </div>
        </div>
        <hr className="bg-black h-[1px]" />

        <div className="flex my-4">
          <img
            className="w-[55px] h-[55px] rounded-[50%]"
            src={channelData ? channelData.snippet.thumbnails.default.url : ""}
            alt="img"
          />

          <div className="ml-3">
            <div className="font-bold text-xl">
              {apiData ? apiData.snippet.channelTitle : "Channel"}
            </div>
            <div className="font-medium">
              {channelData
                ? viewsConverter(channelData.statistics.subscriberCount)
                : "?"}{" "}
              Subscribers
            </div>
            <p className="mt-4 leading-5">
              {apiData
                ? apiData.snippet.description.slice(0, 200) + "..."
                : "description"}
            </p>
          </div>

          <button className="bg-[#FF0000] h-8 px-8 rounded-lg text-xl">
            Subscribe
          </button>
        </div>
      </div>

      <div className="ml-10 text-gray-500">
        <hr className="bg-black h-[1.8px]  " />
        <h3 className="text-xl font-bold my-5 text-gray-600">
          {" "}
          {apiData
            ? viewsConverter(apiData.statistics.commentCount) + " " + "Comments"
            : "Comments"}
        </h3>
        {commentData.map((comment, index) => {
          return (
            <div
              key={index}
             className="flex flex-col items-start justify-center mb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  className="w-[40px] h-[40px] rounded-[50%]"
                  src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
                  alt=""
                />
                <h3 className="font-semibold text-xl text-black">{comment.snippet.topLevelComment.snippet.authorDisplayName}</h3>
                <span>{moment(comment.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span>
              </div>
              <p className="ml-16 mt-[-8px] text-[18px]">{comment.snippet.topLevelComment.snippet.textOriginal}</p>
              <div className="ml-16 flex items-center gap-4 mt-2">
                <span className="flex items-center">
                  <AiTwotoneLike className="text-2xl" />{viewsConverter(comment.snippet.topLevelComment.snippet.likeCount)}
                </span>
                <span className="flex items-center">
                  <AiTwotoneDislike className="text-2xl" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
