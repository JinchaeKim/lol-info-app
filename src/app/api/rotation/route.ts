import { Champions } from "@/types/Champion";
import { ChampionRotation } from "@/types/ChampionRotation";
import { fetchChampionList } from "@/utils/server-action";
import { NextResponse } from "next/server";

export const GET = async (): Promise<NextResponse> => {
  //return 값 타입 지정 후 적용
  const res = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY!,
      },
    },
  );
  // 필터
  const rotationData: ChampionRotation = await res.json(); // freeChampionIds 배열 포함 객체
  const championData: Champions[] = await fetchChampionList(); // 모든 챔피언 리스트 배열
  const filterData: Champions[] = championData.filter((el) => {
    return rotationData.freeChampionIds.includes(parseInt(el.key));
  }); // 챔피언 키를 포함한 로테이션 아이디를 챔피언 리스트에서 filter
  return NextResponse.json(filterData);
};
