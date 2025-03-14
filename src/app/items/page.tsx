import { fetchItemList } from "@/utils/server-action";
import Image from "next/image";
import React from "react";
import { ITEM_IMG_URL } from "../constants/RiotDataURL";

const ItemsPage = async () => {
  const imgUrl = await ITEM_IMG_URL();
  const data = await fetchItemList();
  console.log("data", data);

  return (
    <main className="m-[50px]">
      <h1 className="flexCenter title mt-[80px] text-[30px]">Item List</h1>
      <div className="itemGrid mt-[30px] auto-rows-[minmax(200px,auto)]">
        {data.map(([key, item]) => {
          return (
            <div key={key} className="itemBorder h-auto w-[200px] p-4">
              <Image
                src={`${imgUrl}${item.image.full}`}
                alt="Picture of the Item"
                width={100}
                height={100}
                className="mx-auto flex"
              />
              <h2 className="title mt-2 text-[20px]">{item.name}</h2>
              <p className="text-emerald-50">{item.plaintext}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ItemsPage;
