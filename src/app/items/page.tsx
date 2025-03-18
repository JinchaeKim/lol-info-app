import { fetchItemList } from "@/utils/serverApi";
import React from "react";
import { ITEM_IMG_URL } from "../constants/RiotDataURL";
import { Metadata } from "next";
import Card from "@/_components/Card";

export const metadata: Metadata = {
  title: "LOL Item",
  description: "This is Item List Website",
};

async function ItemsPage() {
  const img_Url = await ITEM_IMG_URL();
  const data = await fetchItemList();

  return (
    <main className="m-[50px]">
      <h1 className="flexCenter title mt-[80px] text-[30px]">Item List</h1>
      <div className="itemGrid mt-[30px] auto-rows-[minmax(200px,auto)]">
        {data.map(([key, item]) => (
          <Card
            key={key}
            name={item.name}
            title={item.plaintext}
            image={item.image}
            img_Url={img_Url}
          />
        ))}
      </div>
    </main>
  );
}

export default ItemsPage;
