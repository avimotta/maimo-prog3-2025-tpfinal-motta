import { useShopContext } from "@/app/contexts/ShopContext";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "@/components/FavoritesButton";
import StarsRating from "@/components/StarsRating";

const SearchSingle = () => {
  const { searchResults } = useShopContext();
  if (!searchResults.length) return null;

  return (
    <div className="mb-10">
      <div
        className="
          grid 
          grid-cols-2 sm:grid-cols-4
          gap-4
          mt-10
          max-w-7xl
          px-4
        "
      >
        {searchResults.map((album) => (
          <div key={album._id} className="w-full">
            <Link href={`/product/${album._id}`}>
              <div
                className="
                  cursor-pointer hover:scale-105 transition-transform
                "
              >
                <div
                  className="
                    relative overflow-hidden rounded-lg border-2 border-[#090808]
                    w-full aspect-square
                    shadow-[4px_4px_0px_0px_rgba(9,8,8,1)]
                    hover:shadow-[6px_6px_0px_0px_rgba(9,8,8,1)]
                    transition-shadow duration-300
                  "
                >
                  <Image
                    src={`/assets/${album.cover}`}
                    fill
                    alt={album.title}
                    className="object-cover"
                  />
                </div>

                <p className="mt-2 text-sm sm:text-base font-semibold text-[#090808] truncate">
                  {album.title}
                </p>
                <p className="text-xs text-[#090808] truncate">
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

export default SearchSingle;