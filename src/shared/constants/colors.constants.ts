import type { TColor, TValueColor } from '../models';

export const COLOR: TColor = {
  RED: 'FFAFA3',
  BLUE: '80CAFF',
  YELLOW: 'FFD966',
  GREEN: '85E0A3',
  PURPLE: 'D9B8FF',
  ORANGE: 'FFC470',
} as const;

export const COLORS: Array<TValueColor> = [
  COLOR.RED,
  COLOR.BLUE,
  COLOR.YELLOW,
  COLOR.GREEN,
  COLOR.PURPLE,
  COLOR.ORANGE,
] as const;
