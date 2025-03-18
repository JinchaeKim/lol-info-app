import { useQuery } from "@tanstack/react-query";
import { CHAMPION_IMG_URL } from "../constants/RiotDataURL";
import { getChampionRotation } from "@/utils/riotApi";
import { QUERY_KEY } from "../constants/QueryKey";

export const getImgUrl = () => {
  return useQuery({
    queryKey: [QUERY_KEY.IMG_URL],
    queryFn: CHAMPION_IMG_URL,
  });
};

export const getRotation = () => {
  return useQuery({
    queryKey: [QUERY_KEY.ROTATION],
    queryFn: getChampionRotation,
  });
};
