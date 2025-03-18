import { getVersion } from "@/utils/riotApi";
import { RIOT_BASE_URL } from "./baseUrl";

// 챔피언 목록 API
export const CHAMPION_LIST_URL = async () => {
  const version = await getVersion();
  return `${RIOT_BASE_URL}/cdn/${version}/data/ko_KR/champion.json`;
};

// 특정 챔피언 상세 정보 API
export const PICK_CHAMPION_URL = async ({
  id,
}: {
  id: string;
}): Promise<string> => {
  const version = await getVersion();
  return `${RIOT_BASE_URL}/cdn/${version}/data/ko_KR/champion/${id}.json`;
};

// 아이템 목록 API
export const LOL_ITEM_URL = async (): Promise<string> => {
  const version = await getVersion();
  return `${RIOT_BASE_URL}/cdn/${version}/data/ko_KR/item.json`;
};

// 아이템 이미지 API
export const ITEM_IMG_URL = async (): Promise<string> => {
  const version = await getVersion();
  return `${RIOT_BASE_URL}/cdn/${version}/img/item/`;
};

// 챔피언 이미지 API
export const CHAMPION_IMG_URL = async (): Promise<string> => {
  const version = await getVersion();
  return `${RIOT_BASE_URL}/cdn/${version}/img/champion/`;
};

// 버전 API - 라우트 핸들러 사용
export const VERSION_API_URL = `${RIOT_BASE_URL}/api/versions.json`;

// 로테이션 API - 라우트 핸들러 사용
export const ROTATION_API_URL =
  "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations";
