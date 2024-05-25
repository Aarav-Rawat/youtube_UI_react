import React, { useEffect, useState } from "react";
import PlayVideo from "../../components/PlayVideo";
import { Link, useParams } from "react-router-dom";
import { API_KEY_URL, viewsConverter } from "../../data";

const Video = () => {
  const { videoId, categoryId } = useParams();
  const [relativeVideos, setrelativeVideos] = useState([]);

  const fetchRelativeVideo = async () => {
    const relativeVideo_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY_URL}`;

    await fetch(relativeVideo_URL)
      .then((response) => response.json())
      .then((data) => setrelativeVideos(data.items));
  };

  useEffect(() => {
    fetchRelativeVideo();
  }, []);

  return (
    <div className="flex items-start my-3">
      <PlayVideo videoId={videoId} />

      <div className="grid gap-5 max-w-[28vw]">
        {relativeVideos.map((video, index) => {
          return (
            <Link to={`/video/${video.snippet.categoryId}/${video.id}`} key={index} className="flex justify-between gap-2">
              <img
                className="w-[15vw] h-[20vh]"
                src={video.snippet.thumbnails.medium.url}
                alt=""
              />
              <div>
                <h3 className="font-semibold">{video.snippet.title.slice(0,25)}...</h3>
              <div className="flex flex-col mt-2">
                {video.snippet.channelTitle}
                <span>{viewsConverter(video.statistics.viewCount)} views</span>
              </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Video;
