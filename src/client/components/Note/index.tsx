import { useCallback, useRef, useState, type MouseEvent } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import type { INote } from '../../../shared';

import {
  Title,
  Time,
  Tags,
  Tooltip,
  Menu,
  StyledMain,
  SubTitle,
  Description,
} from './components';
import { StyledDraggable, StyledNote } from './styled';
import type { TNote } from './models';

export function Note(props: TNote) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const mousePositionRef = useRef({ top: 0, left: 0 });
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const idleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const methods = useForm<INote>({
    defaultValues: {
      ...props,
    },
  });

  const handleMouseMove = useCallback(
    ({ clientX, clientY }: MouseEvent) => {
      mousePositionRef.current = {
        top: clientY + 10,
        left: clientX + 10,
      };
      setShowTooltip(false);

      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }

      idleTimeoutRef.current = setTimeout(() => {
        setShowTooltip(true);
      }, 3000);

      requestAnimationFrame(() => {
        setTooltipPosition(mousePositionRef.current);
      });
    },
    [showMenu],
  );

  const handleRightClick = useCallback((e: MouseEvent) => {
    e.preventDefault();
    setShowMenu(true);
    setShowTooltip(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setShowTooltip(false);

    if (idleTimeoutRef.current) {
      clearTimeout(idleTimeoutRef.current);
    }
  }, []);

  return (
    <FormProvider {...methods}>
      <StyledNote
        color={methods.getValues('color')}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onContextMenu={handleRightClick}
      >
        <StyledDraggable {...props.dragHandleProps} />
        <Title />
        <StyledMain>
          <SubTitle />
          <Description />
        </StyledMain>
        <Time date={props.date} />
        <Tags />
        {showTooltip && <Tooltip {...tooltipPosition} />}
        {showMenu && <Menu />}
      </StyledNote>
    </FormProvider>
  );
}

Note.displayName = 'Note';
