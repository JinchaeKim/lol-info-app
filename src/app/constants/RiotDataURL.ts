import { getLatestVersion } from "./GetVersion";

// 챔피언 목록 API
export const CHAMPION_LIST_URL = async () => {
  const version = await getLatestVersion();
  return `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`;
};

// 특정 챔피언 상세 정보 API
export const PICK_CHAMPION_URL = async (): Promise<string> => {
  const version = await getLatestVersion();
  return `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/{id}.json`;
};

// 아이템 목록 API
export const LOL_ITEM_URL = async (): Promise<string> => {
  const version = await getLatestVersion();
  return `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`;
};

// 아이템 이미지 API
export const ITEM_IMG_URL = async (): Promise<string> => {
  const version = await getLatestVersion();
  return `https://ddragon.leagueoflegends.com/cdn/${version}/img/item/`;
};

// 챔피언 이미지 API
export const CHAMPION_IMG_URL = async (): Promise<string> => {
  const version = await getLatestVersion();
  return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/`;
};
