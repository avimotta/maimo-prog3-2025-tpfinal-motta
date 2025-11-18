'use client';
import { useShopContext } from "@/app/contexts/ShopContext";

export default function LanguageFilter() {
  const { filterByLanguage, selectedLanguage, categories } = useShopContext();

  return (
    <div className="flex gap-2 pl-4">
      <button 
        onClick={() => filterByLanguage("all")}
        className={`px-4 py-2 rounded ${
          selectedLanguage === "all"
            ? "bg-[#FF5454] text-[#fffeec] border-2 border-[#090808] shadow-[4px_4px_0px_0px_rgba(9,8,8,1)]"
            : "bg-[#fffeec] border-2 border-[#090808] text-[#090808]"
        }`}

      >
        All
      </button>
      {categories.map((category) => (
        <button 
          key={category._id}
          onClick={() => filterByLanguage(category._id)}
          className={`px-4 py-2 rounded ${selectedLanguage === category._id ? "bg-[#FF5454] text-[#fffeec] border-2 border-[#090808] shadow-[4px_4px_0px_0px_rgba(9,8,8,1)]" : "bg-[#fffeec] border-2 border-[#090808] text-[#090808]"}`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}