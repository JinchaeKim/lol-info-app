"use server";

import {
  CHAMPION_LIST_URL,
  LOL_ITEM_URL,
  PICK_CHAMPION_URL,
} from "@/app/constants/RiotDataURL";
import { Champions } from "@/types/Champion";
import { Item } from "@/types/Item";
import { formatValue } from "./formatValue";

// 챔피언 목록 패칭
export async function fetchChampionList(): Promise<Champions[]> {
  const chamUrl = await CHAMPION_LIST_URL();
  const res = await fetch(chamUrl, { next: { revalidate: 86400 } }); //fetch의 첫번째 인자는 문자열
  const { data } = await res.json(); // 전체 객체 중 data만
  console.log("data", data);

  const a = Object.values(data);
  console.log("a", a);
  return Object.values(data); // data를 배열로 변환
}

// 특정 챔피언 상세 정보 패칭
export async function fetchPickChampionList(): Promise<Champions[]> {
  const pickUrl = await PICK_CHAMPION_URL();
  const res = await fetch(pickUrl); //fetch의 첫번째 인자는 문자열
  const data: Champions = await res.json();

  return [data];
}

// 아이템 데이터 패칭
export async function fetchItemList(): Promise<[string, Item][]> {
  const itemUrl = await LOL_ITEM_URL();
  const res = await fetch(itemUrl, { cache: "force-cache" }); //fetch의 첫번째 인자는 문자열
  const { data } = await res.json();
  // 데이터 정제
  const cleanedData = Object.entries(data).map(([key, item]) => {
    return [
      key,
      {
        ...item,
        name: formatValue(item.name),
        plaintext: formatValue(item.plaintext),
      },
    ];
  });

  return cleanedData as [string, Item][]; // 타입 캐스팅
}
