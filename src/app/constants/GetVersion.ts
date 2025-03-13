// API 버전 정보 가져오기
export const getLatestVersion = async (): Promise<string> => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json",
  );
  const versions: string[] = await res.json();
  return versions[0];
};
