"use client";

import Image from "next/image";
import { useShopContext } from "@/app/contexts/ShopContext";

const StarsRating = ({ album }) => {
  if (!album) return null;

  const { userRatings, rateAlbum } = useShopContext();
  const userRating = userRatings?.[album._id] || 0;

  return (
    <div className="flex gap-1 sm:gap-2"> 
      {[1, 2, 3, 4, 5].map((num) => {
        const isActive = num <= userRating;

        return (
          <Image
            key={num}
            src={isActive ? "/rankedfull.svg" : "/rankedempty.svg"}
            alt="star"
            width={18} 
            height={18}
            className="
              cursor-pointer 
              transition-transform 
              duration-200 
              hover:scale-110
              sm:w-6 sm:h-6"
            onClick={() => rateAlbum(album._id, num)}
          />
        );
      })}
    </div>
  );
};

export default StarsRating;
