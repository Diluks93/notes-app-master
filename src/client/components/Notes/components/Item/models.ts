import type { DraggableProvided } from '@hello-pangea/dnd';
import type { CSSProperties, ReactNode } from 'react';

export type TItem<T> = {
  index: number;
  item: T;
  dragItemStyle?: CSSProperties;
  children: (
    item: T,
    dragProps: DraggableProvided['dragHandleProps'],
    index: number,
  ) => ReactNode;
};
