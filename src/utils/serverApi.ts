"use server";

import {
  CHAMPION_LIST_URL,
  LOL_ITEM_URL,
  PICK_CHAMPION_URL,
} from "@/app/constants/riotDataURL";
import { Champions, ChampionsDetail } from "@/types/Champion";
import { Item } from "@/types/Item";

// 챔피언 목록 패칭
export async function fetchChampionList(): Promise<Champions[]> {
  const chamUrl = await CHAMPION_LIST_URL();
  const res = await fetch(chamUrl, { next: { revalidate: 86400 } });
  const { data } = await res.json();

  //해당 페이지로 에러 보내기
  if (!res.ok) {
    throw new Error("챔피언 목록 데이터를 불러오는 중 문제가 발생했습니다!");
  }
  return Object.values(data);
}

// 특정 챔피언 상세 정보 패칭
export async function fetchPickChampionList({
  id,
}: {
  id: string;
}): Promise<ChampionsDetail[]> {
  const pickUrl = await PICK_CHAMPION_URL({ id });
  const res = await fetch(pickUrl, { cache: "no-store" });
  const { data } = await res.json();

  //해당 페이지로 에러 보내기
  if (!res.ok) {
    throw new Error("챔피언 상세 데이터를 불러오는 중 문제가 발생했습니다!");
  }

  return Object.values(data);
}

// 아이템 데이터 패칭
export async function fetchItemList(): Promise<[string, Item][]> {
  const itemUrl = await LOL_ITEM_URL();
  const res = await fetch(itemUrl, { cache: "force-cache" });
  const { data } = await res.json();

  //해당 페이지로 에러 보내기
  if (!res.ok) {
    throw new Error("아이템 데이터를 불러오는 중 문제가 발생했습니다!");
  }

  return Object.entries(data);
}

// 최신 버전 페칭
export async function getLatestVersion() {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json",
  );
  const versions = await res.json();
  return versions[0];
}
