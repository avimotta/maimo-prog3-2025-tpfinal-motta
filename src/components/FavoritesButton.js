"use client";

import { useShopContext } from "@/app/contexts/ShopContext";
import Image from "next/image";

const FavoriteButton = ({ album }) => {
  const { favorites, handleAddToFavorites, removeFromFavorites } = useShopContext();

  if (!album?._id) return null;

  const isInFavorites = favorites.some((fav) => fav._id === album._id);

  return (
    <button
      className="
        text-white  
        ml-2 sm:ml-3   
        rounded-2xl 
        font-semibold 
        transition-colors
      "
    >
      <Image
        src={isInFavorites ? "/favsfull.svg" : "/favsempty.svg"}
        alt="heart"
        width={16}      
        height={16}
        className="
          cursor-pointer
          transition-transform 
          duration-200 
          hover:scale-110
          sm:w-6 sm:h-6
          mt-1
        "
        onClick={() => {
          if (isInFavorites) {
            removeFromFavorites(album);
          } else {
            handleAddToFavorites(album);
          }
        }}
      />
    </button>
  );
};

export default FavoriteButton;
