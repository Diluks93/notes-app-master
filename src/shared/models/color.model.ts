export type TKeyColor =
  | 'RED'
  | 'GREEN'
  | 'BLUE'
  | 'YELLOW'
  | 'PURPLE'
  | 'ORANGE';

export type TValueColor =
  | 'FFAFA3'
  | '80CAFF'
  | 'FFD966'
  | '85E0A3'
  | 'D9B8FF'
  | 'FFC470';

export type TColor = Record<TKeyColor, TValueColor>;
