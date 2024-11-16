"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sampleData } from "@/lib/sampleData";
import CarrouselCard from "./carrouselCard";

export default function Carrousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % sampleData.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (current) => (current - 1 + sampleData.length) % sampleData.length
    );
  };

  return (
    <div className="relative w-full h-[100vh] bg-black  overflow-hidden">
      <div className="absolute inset-0 flex  justify-center p-12">
        {sampleData.map((item, index) => {
          const isActive = index === activeIndex;
          const isPrev =
            index === (activeIndex - 1 + sampleData.length) % sampleData.length;
          const isNext = index === (activeIndex + 1) % sampleData.length;

          return (
            <CarrouselCard
              key={index}
              index={index}
              item={item}
              isActive={isActive}
              isPrev={isPrev}
              isNext={isNext}
            />
          );
        })}
      </div>

      <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-4 z-50">
        <Button
          variant="secondary"
          size="icon"
          onClick={prevSlide}
          className="rounded-full bg-gray-800 text-white"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={nextSlide}
          className="rounded-full bg-gray-800 text-white"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
