import { Wookie } from './wookie';

export interface View {
  id: number;
  date: Date;
  wookie: Wookie;
}

export type Views = View[];
