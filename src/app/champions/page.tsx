import { fetchChampionList } from "@/utils/server-action";
import React from "react";
import ChampionCards from "@/components/ChampionCards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LOL Champion",
  description: "This is Champion List Website",
};

async function ChampionsPage() {
  const data = await fetchChampionList();
  console.log("data", data);

  return (
    <main className="m-[50px]">
      <h1 className="flexCenter title mt-[80px] text-[30px]">Champion List</h1>
      <ChampionCards data={data} />
    </main>
  );
}

export default ChampionsPage;
