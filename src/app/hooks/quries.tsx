import { useQuery } from "@tanstack/react-query";
import { CHAMPION_IMG_URL } from "../constants/riotDataURL";
import { getChampionRotation } from "@/utils/riotApi";
import { QUERY_KEY } from "../constants/queryKey";
import { fetchChampionList } from "@/utils/serverApi";

// 로테이션 챔피언 이미지
export const getImgUrl = () => {
  return useQuery({
    queryKey: [QUERY_KEY.IMG_URL],
    queryFn: CHAMPION_IMG_URL,
  });
};

// 로테이션 챔피언
export const getRotation = () => {
  return useQuery({
    queryKey: [QUERY_KEY.ROTATION],
    queryFn: getChampionRotation,
  });
};

// 챔피언 목록 페이지 에러
export const getChampionError = () => {
  return useQuery({
    queryKey: ["champions-error"],
    queryFn: fetchChampionList,
  });
};
