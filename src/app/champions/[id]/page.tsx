import { CHAMPION_IMG_URL } from "@/app/constants/RiotDataURL";
import { fetchPickChampionList } from "@/utils/server-action";
import Image from "next/image";
import React from "react";

const ChampionDetail = async ({ params }: { params: { id: string } }) => {
  const imgUrl = await CHAMPION_IMG_URL();
  const data = await fetchPickChampionList(params);
  console.log("data", data);
  return (
    <div>
      {data.map((champion) => {
        return (
          <main key={champion.key} className="m-[60px]">
            <div>
              <h1 className="title text-[40px]">{champion.name}</h1>
              <h2 className="font-semibold text-emerald-800">
                {champion.title}
              </h2>
            </div>
            <div className="grid gap-[30px]">
              <Image
                src={`${imgUrl}${champion.image.full}`}
                alt="Picture of the Champion"
                width={250}
                height={250}
                className="mx-auto flex rounded-lg shadow-2xl"
              />
              <p className="font-semibold text-emerald-500">{champion.lore}</p>
              <ul className="font-semibold text-emerald-500">
                <span className="text-[25px]"> Stats</span>
                <li>• atack: {champion.info.attack}</li>
                <li>• defense: {champion.info.defense}</li>
                <li>• magic: {champion.info.magic}</li>
                <li>• difficulty: {champion.info.difficulty}</li>
              </ul>
            </div>
          </main>
        );
      })}
    </div>
  );
};

export default ChampionDetail;
