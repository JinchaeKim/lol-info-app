export type ItemResponse = Record<string, Item>;

export type Item = {
  name: string;
  plaintext: string;
  image: { full: string };
  gold: { total: number };
  stats: { FlatMovementSpeedMod: number };
};
