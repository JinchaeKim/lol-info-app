import { CHAMPION_IMG_URL } from "@/app/constants/RiotDataURL";
import { fetchPickChampionList } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = ({ params }: Props) => {
  return {
    title: `Champion Detail : ${params.id}`,
    description: `Detail 페이지 : ${params.id}`,
  };
};

async function ChampionDetail({ params }: Props) {
  const img_Url = await CHAMPION_IMG_URL();
  const data = await fetchPickChampionList(params);
  // console.log("data", data);
  return (
    <div>
      {data.map((champion) => {
        return (
          <main key={champion.key} className="m-[60px]">
            <div>
              <h1 className="title text-[40px]">{champion.name}</h1>
              <h2 className="font-semibold text-emerald-600">
                {champion.title}
              </h2>
            </div>
            <div className="grid gap-[30px]">
              <Image
                src={`${img_Url}${champion.image.full}`}
                alt="Picture of the Champion"
                width={250}
                height={250}
                className="mx-auto flex rounded-lg shadow-2xl"
              />
              <p className="font-semibold text-emerald-200">{champion.lore}</p>
              <ul className="font-semibold text-emerald-400">
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
}

export default ChampionDetail;
