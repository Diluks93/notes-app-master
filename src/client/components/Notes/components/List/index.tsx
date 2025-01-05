import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { forwardRef } from 'react';

import { Item } from '../Item';
import type { INote } from '../../../../../shared';
import { NewNote } from '../../../NewNotes';
import { NotesBox } from '../../styled';

import type { TList } from './model';

export const List = forwardRef<HTMLSpanElement, TList<INote>>(
  ({ notes, onDragEnd, dragListStyle = {}, children, ...props }, ref) => (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided, snapshot) => (
          <NotesBox
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              ...(snapshot.isDraggingOver ? dragListStyle : {}),
            }}
          >
            {notes?.map((note, index) => (
              <Item key={note.id} index={index} item={note} {...props}>
                {children}
              </Item>
            ))}
            {provided.placeholder}
            <NewNote />
            <span ref={ref} />
          </NotesBox>
        )}
      </Droppable>
    </DragDropContext>
  ),
);

List.displayName = 'List';
