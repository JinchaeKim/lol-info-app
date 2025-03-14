import { fetchChampionList } from "@/utils/server-action";
import React from "react";
import { CHAMPION_IMG_URL } from "../constants/RiotDataURL";
import Image from "next/image";
import Link from "next/link";

const ChampionsPage = async () => {
  const imgUrl = await CHAMPION_IMG_URL();
  const data = await fetchChampionList();
  // console.log("data", data);
  return (
    <main className="m-[50px]">
      <h1 className="flexCenter title mt-[80px] text-[30px]">Champion List</h1>
      <div className="itemGrid mt-[30px] auto-rows-[minmax(200px,auto)]">
        {data.map((champion) => {
          return (
            <Link key={champion.key} href={`/champions/${champion.id}`}>
              <div className="itemBorder h-auto w-[200px] p-4">
                <Image
                  src={`${imgUrl}${champion.image.full}`}
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
    </main>
  );
};

export default ChampionsPage;
