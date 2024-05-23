export interface Pokemon {
  name: string;
  id?: number;
  height?: number;
  stats: Stat[];
  sprites: {
    front_default: string;
  };
}

export interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}
