"use client";

import { Champions } from "@/types/Champion";
import { getChampionRotation } from "@/utils/riotApi";
import React, { useEffect, useState } from "react";
import { CHAMPION_IMG_URL } from "../constants/RiotDataURL";
import Link from "next/link";
import Image from "next/image";

const Rotationpage = () => {
  const [rotation, setRotation] = useState<Champions[]>([]);
  const [imgUrl, setImgUrl] = useState<string>();
  const [hover, setHover] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const img_Url = await CHAMPION_IMG_URL();
      const data = await getChampionRotation();
      setImgUrl(img_Url);
      setRotation(data);
    };
    fetchData();
  }, []);

  return (
    <main className="m-[50px]">
      <h1 className="flexCenter title mt-[80px] text-[30px]">
        Champion Rotation (This week for free!)
      </h1>
      <div className="itemGrid mt-[30px] auto-rows-[minmax(200px,auto)]">
        {rotation.map((champion) => {
          return (
            <Link key={champion.key} href={`/champions/${champion.id}`}>
              <div
                className="hoverAction h-auto w-[200px] p-4 shadow-xl"
                onMouseEnter={() => setHover(champion.id)}
                onMouseLeave={() => setHover(null)}
              >
                <Image
                  src={`${imgUrl}${champion.image.full}`}
                  alt="Picture of the Champion"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                {hover === champion.id && (
                  <div className="flexCenter bg-em absolute left-0 top-0 z-10 h-full w-full flex-col rounded-lg bg-slate-700 bg-opacity-60 backdrop-blur-sm">
                    <div className="flexCenter z-20 flex-col">
                      <h2 className="title text-[25px]">{champion.name}</h2>
                      <p className="text-emerald-50">{champion.title}</p>
                    </div>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Rotationpage;
