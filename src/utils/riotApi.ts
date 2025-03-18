import { Champions } from "@/types/Champion";

// 로테이션 라우트 핸들러 응답
export const getChampionRotation = async (): Promise<Champions[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rotation`);
  const data = await res.json();

  return data;
};

// 버전 라우트 핸들러 응답
export const getVersion = async (): Promise<string[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/versions`);
  const data = await res.json();

  return data;
};
