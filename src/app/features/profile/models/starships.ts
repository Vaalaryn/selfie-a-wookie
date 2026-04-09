export interface StarshipsResult {
  count: number;
  next: string;
  previous: string;
  results: Starships;
}

export interface Starship {
  name: string;
  model: string;
  crew: string;
  label: string
}

export type Starships = Starship[];
