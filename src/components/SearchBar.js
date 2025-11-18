'use client';
import { useShopContext } from "@/app/contexts/ShopContext";

export default function SearchBar() {
  const { handleSearch, searchTerm } = useShopContext();

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Search album, artist or genre..."
      className="
        w-[350px] md:w-96
        p-3
        mt-30 ml-3 md:mt-30
        mx-4 md:mx-20
        bg-[#fffeec]
        border-2 border-[#090808]
        rounded-lg
        shadow-[3px_3px_0px_0px_#FF5454]
        text-[#090808]
        placeholder-gray-400
        focus:outline-none
        focus:shadow-[5px_5px_0px_0px_#FF5454]
        transition-shadow
        "
    />
  );
}
