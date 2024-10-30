import type { TValueColor } from './color.model';
import type { ITag } from './tag.model';

export interface INote {
  /** Айди в формете uuid */
  id: string;
  /** Заголовок */
  title?: string;
  /** Описание */
  description?: string;
  /** Цвет заметки */
  color: TValueColor;
  /** Дата последнего изменения заметки */
  date: Date;
  /** Набор тегов */
  tags: Array<ITag | never>;
  /** Подзаголовок */
  subTitle?: string;
  /** Порядок расположения заметки */
  order: number;
}
