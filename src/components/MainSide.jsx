import React from "react";
import { useState } from "react";

import channel from "../assets/svgs/channel.svg";

const MainSide = () => {
  const [myVideos, setMyVideos] = useState([
    {
      id: 1,
      video_url: "https://www.youtube.com/embed/Ke90Tje7VS0",
      ch_img: "https://yt3.ggpht.com/ytc/AAUvwngithub.jpg",
      ch_name: "Programming with Mosh",
      desc: "React Tutorial for Beginners",
      views: "3.5M views",
      time: "1 year ago",
    },
    {
      id: 2,
      video_url: "https://www.youtube.com/embed/PkZNo7MFNFg",
      ch_img: "https://yt3.ggpht.com/ytc/AAUvwnfreecodecamp.jpg",
      ch_name: "freeCodeCamp.org",
      desc: "JavaScript Full Course",
      views: "6.8M views",
      time: "2 years ago",
    },
    {
      id: 3,
      video_url: "https://www.youtube.com/embed/Oe421EPjeBE",
      ch_img: "https://yt3.ggpht.com/ytc/AAUvwnwebdevsimplified.jpg",
      ch_name: "Web Dev Simplified",
      desc: "Learn CSS Grid in 20 Minutes",
      views: "1.1M views",
      time: "6 months ago",
    },
    {
      id: 4,
      video_url: "https://www.youtube.com/embed/tN8LpjKfLkI",
      ch_img: "https://yt3.ggpht.com/ytc/AAUvwnfireship.jpg",
      ch_name: "Fireship",
      desc: "JavaScript in 100 Seconds",
      views: "2.3M views",
      time: "3 months ago",
    },
    {
      id: 5,
      video_url: "https://www.youtube.com/embed/9H2ZFxjJd7k",
      ch_img: "https://yt3.ggpht.com/ytc/AAUvwnacademind.jpg",
      ch_name: "Academind",
      desc: "React Router Tutorial",
      views: "1.4M views",
      time: "8 months ago",
    },
    {
      id: 6,
      video_url: "https://www.youtube.com/embed/W6NZfCO5SIk",
      ch_img: "https://yt3.ggpht.com/ytc/AAUvwnprogramminghero.jpg",
      ch_name: "Programming Hero",
      desc: "JavaScript Basics Explained",
      views: "2.8M views",
      time: "1 year ago",
    },
    {
      id: 7,
      video_url: "https://www.youtube.com/embed/kUMe1FH4CHE",
      ch_img: "https://yt3.ggpht.com/ytc/AAUvwnnetninja.jpg",
      ch_name: "The Net Ninja",
      desc: "HTML & CSS Crash Course",
      views: "950K views",
      time: "11 months ago",
    },
    {
      id: 8,
      video_url: "https://www.youtube.com/embed/rv2YjZ4hTG8",
      ch_img: "https://yt3.ggpht.com/ytc/AAUvwntraversymedia.jpg",
      ch_name: "Traversy Media",
      desc: "React Hooks Tutorial",
      views: "1.7M views",
      time: "4 months ago",
    },
    {
      id: 9,
      video_url: "https://www.youtube.com/embed/JfI5PISLr9g",
      ch_img: "https://yt3.ggpht.com/ytc/AAUvwncodevolution.jpg",
      ch_name: "Codevolution",
      desc: "Advanced React Concepts",
      views: "670K views",
      time: "5 months ago",
    },
    {
      id: 10,
      video_url: "https://www.youtube.com/embed/3PHXvlpOkf4",
      ch_img: "https://yt3.ggpht.com/ytc/AAUvwncodedamn.jpg",
      ch_name: "Codedamn",
      desc: "Complete Node.js Guide",
      views: "2.1M views",
      time: "9 months ago",
    },
    {
      id: 11,
      video_url: "https://www.youtube.com/embed/UB1O30fR-EE",
      ch_img: "https://yt3.ggpht.com/ytc/AAUvwndevtips.jpg",
      ch_name: "DevTips",
      desc: "Flexbox CSS Crash Course",
      views: "850K views",
      time: "1 year ago",
    },
    {
      id: 12,
      video_url: "https://www.youtube.com/embed/TfpDw68tQk4",
      ch_img: "https://yt3.ggpht.com/ytc/AAUvwnfunfunfunction.jpg",
      ch_name: "FunFunFunction",
      desc: "Higher-Order Functions in JS",
      views: "1.3M views",
      time: "10 months ago",
    },
    {
      id: 13,
      video_url: "https://www.youtube.com/embed/mqP3Q7-KZ-8",
      ch_img: "https://yt3.ggpht.com/ytc/AAUvwncsstricks.jpg",
      ch_name: "CSS Tricks",
      desc: "Master CSS Animations",
      views: "1M views",
      time: "6 months ago",
    },
    {
      id: 14,
      video_url: "https://www.youtube.com/embed/qz0aGYrrlhU",
      ch_img: "https://yt3.ggpht.com/ytc/AAUvwnlearncodeacademy.jpg",
      ch_name: "LearnCode.academy",
      desc: "JavaScript for Beginners",
      views: "3.1M views",
      time: "1 year ago",
    },
    {
      id: 15,
      video_url: "https://www.youtube.com/embed/2Ji-clqUYnA",
      ch_img: "https://yt3.ggpht.com/ytc/AAUvwntechsith.jpg",
      ch_name: "Techsith",
      desc: "Asynchronous JavaScript",
      views: "970K views",
      time: "7 months ago",
    },
    {
      id: 16,
      video_url: "https://www.youtube.com/embed/8dWL3wF_OMw",
      ch_img: "https://yt3.ggpht.com/ytc/AAUvwncleverprogrammer.jpg",
      ch_name: "Clever Programmer",
      desc: "Build a YouTube Clone with React",
      views: "4.2M views",
      time: "3 months ago",
    },
  ]);

  return (
    <>
      {/* main side started */}
      <section className="main_side w-[100%]">
        {/* search top ended */}
        <div className="grid grid-cols-4 gap-4 p-4 bg-black">
          {myVideos.map((video) => (
            <div
              key={video.id}
              className="shadow-lg rounded-md overflow-hidden bg-black"
            >
              <iframe
                width="100%"
                height="200"
                src={video.video_url}
                title={video.desc}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="flex items-center p-2">
                <img
                  src={channel}
                  alt={video.ch_name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-bold text-sm">{video.ch_name}</h4>
                  <p className="text-white text-xs">{video.desc}</p>
                  <p className="text-gray-400 text-xs">{`${video.views} • ${video.time}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default MainSide;
