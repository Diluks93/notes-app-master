import { Draggable } from '@hello-pangea/dnd';

import type { INote } from '../../../../../shared';

import type { TItem } from './models';

export const Item = ({
  index,
  item,
  dragItemStyle = {},
  children,
}: TItem<INote>) => (
  <Draggable index={index} draggableId={item.id}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        style={{
          display: 'flex',
          ...provided.draggableProps.style,
          ...(snapshot.isDragging ? dragItemStyle : {}),
        }}
      >
        {children(item, provided.dragHandleProps)}
      </div>
    )}
  </Draggable>
);

Item.displayName = 'Item';
