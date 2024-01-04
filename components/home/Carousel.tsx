"use client";
import { IMovie } from "@/lib/type/movies";
import { IoIosArrowForward } from "react-icons/io";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import CarouselCard from "./CarouselCard";
import { useCallback, useRef } from "react";

const Carousel = ({
  titleCategorie,
  movies,
}: {
  titleCategorie: string;
  movies: IMovie[];
}) => {
  const sliderRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    // @ts-ignore
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    // @ts-ignore
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="w-full h-full ml-6 relative">
      <h1 className="font-bold text-4xl text-white my-6">{titleCategorie}</h1>
      <div
        ref={navigationPrevRef}
        className="text-white text-4xl  w-fit absolute top-1/2 left-0 z-50 hover:cursor-pointer"
        onClick={handlePrev}
      >
        <IoIosArrowForward
          className="text-white rotate-180"
          style={{ width: "30px", height: "30px" }}
        />
      </div>
      <div
        ref={navigationNextRef}
        className="text-white text-4xl  w-fit absolute top-1/2 right-10 z-50 hover:cursor-pointer"
        onClick={handleNext}
      >
        <IoIosArrowForward
          className="text-white"
          style={{ width: "30px", height: "30px" }}
        />
      </div>
      <Swiper
        slidesPerView={8}
        spaceBetween={30}
        className="mySwiper h-full"
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          //@ts-ignore
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          //@ts-ignore
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        loop={true}
        ref={sliderRef}
        style={{ overflow: "visible !important" }}
      >
        {movies.map((item) => {
          return (
            <SwiperSlide
              className="hover:mx-20 hover:!mr-28 z-10"
              key={item.id}
            >
              <CarouselCard
                image={item.poster_path}
                title={item.title}
                vote={item.vote_average}
                id={item.id}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
