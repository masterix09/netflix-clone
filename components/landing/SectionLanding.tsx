import Image, { StaticImageData } from "next/image";
import React from "react";

const SectionLanding = ({
  image,
  title,
  text,
  reverse = false,
}: {
  image: StaticImageData;
  title: string;
  text: string;
  reverse?: boolean;
}) => {
  return (
    <section className="border-b-8 border-b-[#232323] py-24 md:py-12 md:min-h-[75vh] items-center justify-center">
      <div className="w-full px-3 md:px-0 md:w-[60%] mx-auto h-full">
        <div
          className={
            reverse
              ? "w-full flex flex-col-reverse md:flex-row-reverse justify-between items-center h-full "
              : "w-full flex flex-col md:flex-row justify-between items-center h-full"
          }
        >
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Image src={image} alt="image" className="object-contain" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-white text-2xl md:text-5xl font-bold text-center lg:text-left mb-4">
              {title}
            </h2>
            <h3 className="text-white text-xl md:text-2xl font-normal text-center lg:text-left">
              {text}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionLanding;
