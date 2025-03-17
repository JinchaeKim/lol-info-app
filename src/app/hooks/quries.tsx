import { useQuery } from "@tanstack/react-query";
import { CHAMPION_IMG_URL } from "../constants/RiotDataURL";
import { getChampionRotation } from "@/utils/riotApi";

export const getImgUrl = () => {
  return useQuery({
    queryKey: ["imgUrl"],
    queryFn: CHAMPION_IMG_URL,
  });
};

export const getRotation = () => {
  return useQuery({
    queryKey: ["rotation"],
    queryFn: getChampionRotation,
  });
};
