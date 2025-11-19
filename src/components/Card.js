"use client";

import { useShopContext } from "@/app/contexts/ShopContext";
import { useEffect } from "react";
import Image from "next/image";
import ReviewForm from "@/components/ReviewForm";
import FavoriteButton from "@/components/FavoritesButton";
import StarsRating from "@/components/StarsRating";

const Card = ({ params }) => {
  const { getOneProduct, product } = useShopContext();

  useEffect(() => {
    const fetchProduct = async () => {
      if (!params) return;

      const resolvedParams = await params;
      if (resolvedParams?.id) getOneProduct(resolvedParams.id);
    };
    fetchProduct();
  }, []);

  if (!product) return null;

  return (
    <div className="min-h-screen bg-[#fffeec] py-8 px-4 pt-30 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
          
          <div className="flex justify-center">
            <div
              className="
                relative overflow-hidden rounded-lg border-2 border-[#090808]
                w-full max-w-[400px] aspect-square
                shadow-[6px_6px_0px_0px_rgba(9,8,8,1)]
                hover:shadow-[8px_8px_0px_0px_rgba(9,8,8,1)]
                transition-shadow duration-300
              "
            >
              <Image
                src={`/assets/${product.cover}`} 
                fill
                alt={`${product.title}`}
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div
              className="
                rounded-lg border-2 border-[#090808] 
                p-6 
                shadow-[4px_4px_0px_0px_rgba(9,8,8,1)]
              "
            >
              <h1 className="text-3xl md:text-4xl font-bold text-[#090808] mb-4">
                {product.title}
              </h1>

              {product.artist && (
                <p className="text-lg text-[#090808] opacity-75 mb-4">
                  {product.artist}
                </p>
              )}

              <div className="flex items-center gap-4 pt-4 border-t-2 border-[#090808] mt-10">
                <StarsRating album={product} />
                <FavoriteButton album={product} />

                <div className="ml-10 mb-8">
                  {product.genre && (
                    <p className="mt-10 text-[#090808] text-sm sm:text-base">
                      Genre:{" "}
                      <span className="font-semibold">{product.genre}</span>
                    </p>
                  )}

                  {product.year && (
                    <p className="mt-2 text-[#090808] text-sm sm:text-base">
                      Year: <span className="font-semibold">{product.year}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div
            className="
              rounded-lg border-2 border-[#090808] 
              p-6 md:p-8
              shadow-[4px_4px_0px_0px_rgba(9,8,8,1)]
            "
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#090808] mb-6">
              Reviews
            </h2>

            <div className="space-y-4 mb-8">
              {product?.reviews?.length > 0 ? (
                product.reviews.map((r, i) => (
                  <div
                    key={i}
                    className="
                      bg-[#fffeec] rounded-lg border-2 border-[#090808] 
                      p-4
                      shadow-[2px_2px_0px_0px_rgba(9,8,8,1)]
                      hover:shadow-[3px_3px_0px_0px_rgba(9,8,8,1)]
                      transition-shadow duration-200
                    "
                  >
                    <p className="font-bold text-[#090808] mb-2">{r.user}</p>
                    <p className="text-[#090808] opacity-80">{r.comment}</p>
                  </div>
                ))
              ) : (
                <div
                  className="
                    text-center py-8 
                    bg-[#fffeec] rounded-lg border-2 border-dashed border-[#090808]
                  "
                >
                  <p className="text-[#090808] opacity-60">
                    No reviews yet. Wanna be the first?
                  </p>
                </div>
              )}
            </div>

            {product?._id && (
              <div
                className="
                  pt-6 border-t-2 border-[#090808]
                  flex justify-center
                "
              >
                <ReviewForm
                  productId={product._id}
                  onSubmitSuccess={() => getOneProduct(product._id)}
                />
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;
