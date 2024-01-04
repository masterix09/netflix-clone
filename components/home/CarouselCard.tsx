import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import Link from "next/link";

const CarouselCard = ({
  image,
  title,
  vote,
  id,
}: {
  image: string;
  title: string;
  vote: string;
  id: number;
}) => {
  return (
    <div className="h-56 w-56 relative group hover:scale-150 transition-transform">
      <Image
        src={`https://image.tmdb.org/t/p/w185/${image}`}
        alt={title}
        className="w-full h-full rounded-lg object-cover"
        fill
      />
      <div className="block bg-black/40 w-full h-full absolute top-0 left-0 group-hover:hidden"></div>
      <div className="bg-[#141414] hidden group-hover:block z-60 absolute bottom-0 left-0 w-full p-3 rounded-b-lg">
        <span className="text-white">{id}</span>
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-x-4">
            <FaPlayCircle
              style={{
                color: "white",
                scale: "1.50",
              }}
              className="hover:cursor-pointer"
            />
            <GoPlus
              style={{
                color: "white",
                scale: "1.50",
                border: "1px solid white",
                borderRadius: "50%",
                padding: "1px",
              }}
              className="hover:cursor-pointer"
            />
          </div>
          <Link href={`/detail/${id}`}>
            <MdKeyboardArrowDown
              className="hover:cursor-pointer"
              style={{
                color: "white",
                width: "30px",
                height: "30px",
                scale: "0.8",
                border: "1px solid white",
                borderRadius: "50%",
                padding: "1px",
              }}
            />
          </Link>
        </div>
        <div className="w-full flex gap-x-4 mt-2 items-center">
          <div className="flex gap-x-1">
            <CiStar style={{ color: "#ffcd45" }} />
            <span className="text-white font-light text-xs">{vote}</span>
          </div>
          <span className="text-white font-light text-xs border-[1px] border-[#5f5f5f] px-2">
            16 +
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
