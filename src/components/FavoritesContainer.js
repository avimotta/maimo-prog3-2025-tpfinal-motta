'use client'
import { useShopContext } from "@/app/contexts/ShopContext"
import FavoritesSingle from "@/components/FavoritesSingle"

const FavoritesContainer = () => {
  const { favorites } = useShopContext()
  return (
    <div className='flex flex-wrap mx-10 my-30 gap-6 justify-center'>
      {favorites.length > 0? (
        favorites.map((product) => (
          <FavoritesSingle key={product._id || product.title} product={product}/>
        ))
      ):(
        <h2>No favs yet. Go like something.</h2>
      )}
    </div>
  )
}

export default FavoritesContainer