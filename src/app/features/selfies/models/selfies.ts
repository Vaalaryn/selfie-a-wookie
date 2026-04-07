import { Wookie } from '../../utils/wookie';

export interface Selfie {
  id: number;
  title: string;
  description: string;
  path: string;
  wookie: Wookie;
}

export type Selfies = Selfie[];
