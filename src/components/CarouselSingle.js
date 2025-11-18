"use client";

import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "@/components/FavoritesButton";
import StarsRating from "@/components/StarsRating";

const CarouselSingle = ({ title, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="mb-5 ml-5">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 mx-0 sm:mx-4"> 
        {title}
      </h2>

      <div className="
        flex overflow-x-scroll gap-4 sm:gap-6 sm:px-4 pb-4 scrollbar-hide
      ">
        {items.map((album) => (
          <div key={album._id} className="flex-shrink-0">
            <Link href={`/product/${album._id}`}>
              <div
                className="
                  cursor-pointer hover:scale-105 transition-transform
                  min-w-[130px] sm:min-w-[180px]
                "
              >
                <div
                  className="
                    relative overflow-hidden rounded-lg border-2 border-[#090808]
                    w-[130px] h-[130px]
                    sm:w-[180px] sm:h-[180px]
                    shadow-[4px_4px_0px_0px_rgba(9,8,8,1)]
                    hover:shadow-[6px_6px_0px_0px_rgba(9,8,8,1)]
                    transition-shadow duration-300
                  "
                >
                  <Image
                    src={`/assets/${album.cover}`}
                    width={300}
                    height={300}
                    alt={album.title}
                    className="object-cover"
                  />
                </div>

                <p className="mt-2 text-base sm:text-lg font-semibold text-[#090808] truncate">
                  {album.title}
                </p>
                <p className="text-xs sm:text-sm text-[#090808] truncate">
                  {album.artist}
                </p>
              </div>
            </Link>
            <div className="flex items-center gap-2 mt-1">
              <div>
                <StarsRating album={album} />
              </div>
              <div>
                <FavoriteButton album={album} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselSingle;
