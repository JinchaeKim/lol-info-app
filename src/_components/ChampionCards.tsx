import { CHAMPION_IMG_URL } from "@/app/constants/RiotDataURL";
import { Champions } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cards = async ({ data }: { data: Champions[] }) => {
  const img_Url = await CHAMPION_IMG_URL();
  return (
    <div className="itemGrid mt-[30px] auto-rows-[minmax(200px,auto)]">
      {data.map((champion) => {
        return (
          <Link key={champion.key} href={`/champions/${champion.id}`}>
            <div className="itemBorder hoverAction h-auto w-[200px] p-4 shadow-2xl">
              <Image
                src={`${img_Url}${champion.image.full}`}
                alt="Picture of the Champion"
                width={100}
                height={100}
                className="mx-auto flex"
              />
              <h2 className="title mt-2 text-[20px]">{champion.name}</h2>
              <p className="text-emerald-50">{champion.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Cards;
