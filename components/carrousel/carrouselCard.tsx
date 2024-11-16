import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SampleDataItem } from "@/models/models";
import { Play } from "lucide-react";

interface CarrouselCardProps {
  readonly index: number;
  readonly item: SampleDataItem;
  readonly isActive: boolean;
  readonly isPrev: boolean;
  readonly isNext: boolean;
}

export default function CarrouselCard({
  index,
  item,
  isActive,
  isNext,
  isPrev,
}: CarrouselCardProps) {
  let translateX = "100%";
  let scale = 0.8;
  let opacity = 0;
  let zIndex = 1;

  if (isActive) {
    translateX = "0%";
    scale = 1;
    opacity = 1;
    zIndex = 3;
  } else if (isPrev) {
    translateX = "-120%";
    scale = 0.8;
    opacity = 0.5;
    zIndex = 2;
  } else if (isNext) {
    translateX = "120%";
    scale = 0.8;
    opacity = 0.5;
    zIndex = 2;
  }

  return (
    <Card
      key={index}
      className="absolute w-[350px] h-[400px] lg:w-[600px] transition-all duration-500 bg-neutral-800 text-white overflow-hidden rounded-[55px] p-8 "
      style={{
        transform: `translateX(${translateX}) scale(${scale})`,
        opacity,
        zIndex,
      }}
    >
      <div className="w-full flex gap-3 h-full">
        <div className="flex flex-col h-full justify-between">
          <div className="text-2xl font-semibold pt-9">
            <span>{item.title}</span>
            <span className="text-gray-500"> {item.subtitle}</span>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-bold ">
              <span className="text-gray-500">Earned </span>
              {item.stats}
              <span className="text-gray-500"> so far</span>
            </p>
            <div className="flex gap-3 items-center text-sm opacity-80">
              <div className="flex gap-1 items-center">
                <Play className="w-4 h-4" />
                <span className="font-semibold">{item.views}</span>
              </div>
              <div className="flex gap-1 items-center">
                <Avatar className="h-5 w-5">
                  <AvatarImage src={item.avatarSrc} alt="avatar" />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
                <span className="font-semibold">{item.userName}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <p className="text-xs opacity-80 text-gray-500">{item.likes}</p>
              <p className="text-xs opacity-80 text-gray-500">{item.videos}</p>
            </div>
          </div>
        </div>
        <Image
          src={item.image}
          alt={item.title}
          width={200}
          height={400}
          className="rounded-[30px]  hidden lg:block"
        />
      </div>
    </Card>
  );
}
