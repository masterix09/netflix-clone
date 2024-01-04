import Image from "next/image";
import React from "react";
import PlayIcon from "@/public/assets/home/play-button.png";
import InfoIcon from "@/public/assets/home/info.png";

const HeroVideo = () => {
  return (
    <div className="w-full bg-red-500 min-h-[40vh] max-h-[40vh] md:min-h-screen md:max-h-screen overflow-hidden relative">
      <div className="bg-black/70 w-full h-full absolute top-0 left-0 z-20"></div>
      <video
        src="/assets/home/video-hero/the_family_plan_video.mp4"
        loop
        autoPlay
        muted
        className=" w-full h-full z-10 absolute top-0 left-0 object-cover"
      ></video>
      <div className="z-20 w-full px-6 flex flex-col gap-6 md:gap-10 absolute top-1/2 md:top-2/3">
        <h1 className="text-white text-2xl md:text-7xl font-bold uppercase">
          The family plan
        </h1>
        <div className="flex gap-4">
          <button className="text-sm md:text-4xl font-bold text-black px-5 md:px-8 py-2 md:py-3 bg-white rounded flex items-center gap-1 md:gap-3">
            <Image src={PlayIcon} alt="play button" width={30} />
            Riproduci
          </button>
          <button className="text-sm md:text-4xl font-bold text-white px-5 md:px-8 py-2 md:py-3 bg-gray-600/80 rounded flex items-center gap-1 md:gap-3">
            <Image src={InfoIcon} alt="info icon" width={30} />
            Altre Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
