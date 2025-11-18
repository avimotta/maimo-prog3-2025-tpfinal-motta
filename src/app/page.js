'use client'
import CarouselContainer from "@/components/CarouselContainer";
import LanguageFilter from "@/components/LanguageFilter";

export default function Home() {
  return (
    <div className="pt-25">
      <LanguageFilter/>
      <CarouselContainer/>
    </div>
  );
}
