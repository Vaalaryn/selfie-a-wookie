import { Views } from './view';
import { Wookie } from './wookie';

export interface SelfieStat {
  id: number;
  title: string;
  date: Date;
  wookie: Wookie;
  views: Views;
}

export type SelfieStats = SelfieStat[];
