import { VERSION_API_URL } from "@/app/constants/riotDataURL";
import { NextResponse } from "next/server";

// API 버전 라우트 핸들러
export const GET = async (): Promise<NextResponse> => {
  try {
    const res = await fetch(VERSION_API_URL, { next: { revalidate: 86400 } });

    // 사용자 요청 에러
    if (!res) {
      return NextResponse.json(
        { message: "error! 버전 정보를 찾을 수 없습니다!" },
        { status: 400 },
      );
    }
    const data: string[] = await res.json();
    return NextResponse.json(data[0], { status: 200 });
  } catch (error) {
    console.log("버전 라우트 핸들러 에러 발생!", error);
    // 서버 에러
    return NextResponse.json(
      { message: "error! 버전 정보를 읽을 수 없습니다! " },
      { status: 500 },
    );
  }
};
