import type { DraggableProvided, OnDragEndResponder } from '@hello-pangea/dnd';
import type { CSSProperties, ReactNode } from 'react';

export type TList<T> = {
  notes: Array<T>;
  onDragEnd: OnDragEndResponder<string>;
  dragListStyle?: CSSProperties;
  dragItemStyle?: CSSProperties;
  children: (
    item: T,
    dragProps: DraggableProvided['dragHandleProps'],
  ) => ReactNode;
};
