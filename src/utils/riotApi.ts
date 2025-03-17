import { Champions } from "@/types/Champion";

export const getChampionRotation = async (): Promise<Champions[]> => {
  const res = await fetch("http://localhost:3000/api/rotation");
  const data = await res.json();

  return data;
};

export const getVersion = async (): Promise<string[]> => {
  const res = await fetch("http://localhost:3000/api/versions");
  const data = await res.json();

  return data;
};
