import { ROTATION_API_URL } from "@/app/constants/riotDataURL";
import { Champions } from "@/types/Champion";
import { ChampionRotation } from "@/types/ChampionRotation";
import { fetchChampionList } from "@/utils/serverApi";
import { NextResponse } from "next/server";

// 로테이션 API 라우트 핸들러 + 필터
export const GET = async (): Promise<NextResponse> => {
  try {
    const res = await fetch(ROTATION_API_URL, {
      headers: {
        "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY!,
      },
    });

    // 사용자 요청 에러
    if (!res) {
      return NextResponse.json(
        { message: "error! 로테이션 챔피언 정보를 찾을 수 없습니다!" },
        { status: 400 },
      );
    }

    // 필터
    const rotationData: ChampionRotation = await res.json(); // freeChampionIds 배열 포함 객체
    const championData: Champions[] = await fetchChampionList(); // 모든 챔피언 리스트 배열
    const filterData: Champions[] = championData.filter((el) => {
      return rotationData.freeChampionIds.includes(parseInt(el.key));
    }); // 챔피언 키를 포함한 로테이션 아이디를 챔피언 리스트에서 filter
    return NextResponse.json(filterData, { status: 200 });
  } catch (error) {
    console.log("로테이션 라우트 핸들러 에러 발생", error);
    // 서버 에러
    return NextResponse.json(
      { message: "error! 로테이션 페이지를 읽을 수 없습니다!" },
      { status: 500 },
    );
  }
};
