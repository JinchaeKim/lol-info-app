import { fetchChampionList } from "@/utils/serverApi";
import React from "react";
import { Metadata } from "next";
import { CHAMPION_IMG_URL } from "../constants/riotDataURL";
import Card from "@/_components/Card";

export const metadata: Metadata = {
  title: "LOL Champion",
  description: "This is Champion List Website",
};

async function ChampionsPage() {
  const data = await fetchChampionList();
  const img_Url = await CHAMPION_IMG_URL();

  return (
    <main className="m-[50px]">
      <h1 className="flexCenter title mt-[80px] text-[30px]">Champion List</h1>
      <div className="itemGrid mt-[30px] auto-rows-[minmax(200px,auto)]">
        {data.map((champion) => (
          <Card
            key={champion.key}
            id={champion.id}
            name={champion.name}
            title={champion.title}
            image={champion.image}
            img_Url={img_Url}
          />
        ))}
      </div>
    </main>
  );
}

export default ChampionsPage;
