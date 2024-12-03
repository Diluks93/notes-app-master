import { DragDropContext, Droppable } from '@hello-pangea/dnd';

import { Item } from '../Item';
import { NewNote } from '../../../NewNotes';
import type { INote } from '../../../../../shared';

import { NotesBox } from './styled';
import type { TList } from './model';

export const List = ({
  notes,
  onDragEnd,
  dragListStyle = {},
  children,
  ...props
}: TList<INote>) => {
  const length = notes.length;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided, snapshot) => (
          <NotesBox
            quantity={length}
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              ...(snapshot.isDraggingOver ? dragListStyle : {}),
            }}
          >
            {notes.map((note, index) => (
              <Item key={note.id} index={index} item={note} {...props}>
                {children}
              </Item>
            ))}
            {provided.placeholder}
            <NewNote />
          </NotesBox>
        )}
      </Droppable>
    </DragDropContext>
  );
};

List.displayName = 'List';
