import { Planet } from '../profile/models/planet';
import { Selfie } from '../selfies/models/selfies';

export interface Wookie {
  id: number;
  name: string;
  age: number;
  gender: string;
}

export type Wookies = Wookie[];

