import { useCallback, useRef, useState, type MouseEvent } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

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
import { StyledNote } from './styled';

import type { INote } from '../../../shared';

export function Note(props: INote) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const mousePositionRef = useRef({ top: 0, left: 0 });
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
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
      setShowTooltip(!showMenu);
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
  }, []);

  return (
    <FormProvider {...methods}>
      <StyledNote
        color={methods.getValues('color')}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onContextMenu={handleRightClick}
      >
        <Title />
        <StyledMain>
          <SubTitle />
          <Description />
        </StyledMain>
        <Time date={props.date} />
        <Tags tags={props.tags} />
        {showTooltip && <Tooltip {...tooltipPosition} />}
        {showMenu && <Menu />}
      </StyledNote>
    </FormProvider>
  );
}

Note.displayName = 'Note';
