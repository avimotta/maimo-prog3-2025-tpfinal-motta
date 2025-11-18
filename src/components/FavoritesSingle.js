"use client";
import Image from "next/image";
import { useShopContext } from "@/app/contexts/ShopContext";

const CartCard = ({ product }) => {
  const { removeFromFavorites } = useShopContext(); 

  return (
    <div
      className="
        flex flex-col justify-between 
        bg-[#fffeec] text-[#090808] 
        m-3 p-5 w-[250px]
        rounded-lg border-2 border-[#090808]
        shadow-[4px_4px_0px_0px_rgba(9,8,8,1)]
        hover:shadow-[6px_6px_0px_0px_rgba(9,8,8,1)]
        transition-shadow duration-300
      "
    >
      <p className="font-semibold text-lg truncate">{product.title}</p>

      <div
        className="
          relative overflow-hidden rounded-lg border-2 border-[#090808]
          w-full h-[200px]
          mt-3
          shadow-[4px_4px_0px_0px_rgba(9,8,8,1)]
          hover:shadow-none transition-shadow
        "
      >
        <Image
          src={`/assets/${product.cover}`}
          alt={product.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <button
        onClick={() => removeFromFavorites(product)}
        className="
          bg-[#0A0BF9] text-[#fffeec]
          mt-5 w-full py-3 rounded-lg
          border-2 border-[#090808]
          shadow-[3px_3px_0px_0px_rgba(9,8,8,1)]
          hover:shadow-[4px_4px_0px_0px_rgba(9,8,8,1)]
          transition-shadow duration-200
          cursor-pointer
        "
      >
        Remove from favs
      </button>
    </div>
  );
};

export default CartCard;
