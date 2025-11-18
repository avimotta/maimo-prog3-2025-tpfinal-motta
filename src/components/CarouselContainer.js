
import { useShopContext } from "@/app/contexts/ShopContext";
import CarouselSingle from "@/components/CarouselSingle"

const CarouselContainer = () => {
    const { popAlbums, rockAlbums, indieAlbums, hipHopAlbums, reggaetonAlbums } = useShopContext();

  return (
    <div className="pt-10">
        <CarouselSingle title="Pop" items={popAlbums} />
        <CarouselSingle title="Rock" items={rockAlbums} />
        <CarouselSingle title="Indie" items={indieAlbums} />
        <CarouselSingle title="Hip Hop" items={hipHopAlbums} />
        <CarouselSingle title="Reggaeton" items={reggaetonAlbums} />
    </div>
  )
}

export default CarouselContainer