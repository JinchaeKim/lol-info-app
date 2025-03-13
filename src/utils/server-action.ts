"use server";

import {
  CHAMPION_LIST_URL,
  LOL_ITEM_URL,
  PICK_CHAMPION_URL,
} from "@/app/constants/RiotDataURL";
import { Champions } from "@/types/Champion";
import { Item, ItemResponse } from "@/types/Item";

// 챔피언 목록 패칭
export async function fetchChampionList(): Promise<Champions[]> {
  const chamUrl = await CHAMPION_LIST_URL();
  const res = await fetch(chamUrl); //fetch의 첫번째 인자는 문자열
  const data: Champions = await res.json();

  return [data];
}

// 특정 챔피언 상세 정보 패칭
export async function fetchPickChampionList(): Promise<Champions[]> {
  const pickUrl = await PICK_CHAMPION_URL();
  const res = await fetch(pickUrl, { next: { revalidate: 86400 } }); //fetch의 첫번째 인자는 문자열
  const resData: Champions = await res.json();

  return Object.entries(resData.data);
}

// 아이템 데이터 패칭
export async function fetchItemList(): Promise<[string, Item][]> {
  const itemUrl = await LOL_ITEM_URL();
  const res = await fetch(itemUrl, { cache: "force-cache" }); //fetch의 첫번째 인자는 문자열
  const resData: ItemResponse = await res.json(); //동적 key

  return Object.entries(resData.data); //배열로 반환
}
