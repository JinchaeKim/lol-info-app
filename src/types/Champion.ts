export type Champions = {
  key: string;
  name: string;
  title: string;
  image: { full: string };
};

export type ChampionsDetail = Champions & {
  blurb: string;
  info: { attack: number; defense: number; magic: number; difficulty: number };
};
