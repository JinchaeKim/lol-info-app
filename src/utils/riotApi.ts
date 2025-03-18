import { Champions } from "@/types/Champion";

// 로테이션 라우트 핸들러 응답
export const getChampionRotation = async (): Promise<Champions[]> => {
  const res = await fetch("/api/rotation");
  const data = await res.json();

  return data;
};
