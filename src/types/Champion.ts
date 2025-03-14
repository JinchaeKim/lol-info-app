export type Champions = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: { full: string };
};

export type ChampionsDetail = Champions & {
  lore: string;
  info: { attack: number; defense: number; magic: number; difficulty: number };
};
