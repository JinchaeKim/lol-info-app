"use server";

import {
  CHAMPION_LIST_URL,
  LOL_ITEM_URL,
  PICK_CHAMPION_URL,
} from "@/app/constants/RiotDataURL";
import { Champions, ChampionsDetail } from "@/types/Champion";
import { Item } from "@/types/Item";
import { formatValue } from "./formatValue";

// 챔피언 목록 패칭
export async function fetchChampionList(): Promise<Champions[]> {
  const chamUrl = await CHAMPION_LIST_URL();
  const res = await fetch(chamUrl, { next: { revalidate: 86400 } }); //fetch의 첫번째 인자는 문자열
  const { data } = await res.json(); // 전체 객체 중 data만

  return Object.values(data); // data를 배열로 변환
}

// 특정 챔피언 상세 정보 패칭
export async function fetchPickChampionList({
  id,
}: {
  id: string;
}): Promise<ChampionsDetail[]> {
  const pickUrl = await PICK_CHAMPION_URL({ id });
  const res = await fetch(pickUrl, { cache: "no-store" }); //fetch의 첫번째 인자는 문자열
  const { data } = await res.json();

  return Object.values(data);
}

// 아이템 데이터 패칭
export async function fetchItemList(): Promise<[string, Item][]> {
  const itemUrl = await LOL_ITEM_URL();
  const res = await fetch(itemUrl, { cache: "force-cache" }); //fetch의 첫번째 인자는 문자열
  const { data } = await res.json();

  // 데이터 정제: 정규표현식
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
