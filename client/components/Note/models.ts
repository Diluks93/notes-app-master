export type TColors =
  | '#FFAFA3'
  | '#80CAFF'
  | '#FFD966'
  | '#85E0A3'
  | '#D9B8FF'
  | '#FFC470';

export type TNote = {
  color: TColors;
  title: string;
  subTitle: string;
  description: string;
  date: Date;
  tags: Array<string>;
};

export type TColor = Pick<TNote, 'color'>;
