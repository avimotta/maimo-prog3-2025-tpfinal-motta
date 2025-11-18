'use client'
import { useShopContext } from "@/app/contexts/ShopContext"
import RankedSingle from "@/components/RankedSingle"

const RankedContainer = () => {
  const { userRatings, products } = useShopContext(); 
  
  const rankedProducts = Object.keys(userRatings).map(albumId => {
    const product = products.find(p => p._id === albumId);
    return product ? { ...product, userRating: userRatings[albumId] } : null;
  }).filter(p => p !== null);

  return (
    <div className='flex flex-wrap mx-10 my-30 gap-6 justify-center'>
      {rankedProducts.length > 0 ? (
        rankedProducts.map((product) => (
          <RankedSingle key={product._id} product={product}/>
        ))
      ) : (
        <h2>No stars yet. Go and rate now!</h2>
      )}
    </div>
  )
}

export default RankedContainer