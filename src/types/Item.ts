export type Item = {
  data: {
    name: string;
    plaintext: string;
    image: { full: string };
    gold: { total: number };
    stats: { FlatMovementSpeedMod: number };
  };
};
