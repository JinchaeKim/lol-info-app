export type Item = {
  name: string;
  plaintext: string;
  image: { full: string };
  gold: { total: number };
  stats: { FlatMovementSpeedMod: number };
};

// 동적 key (1001, 1002...)
export type ItemResponse = {
  data: { [key: string]: Item };
};
