import { useState, type MouseEvent } from 'react';

import {
  Title,
  SubTitle,
  Description,
  Time,
  Tags,
  Tooltip,
  Menu,
} from './components';
import type { TNote } from './models';
import { StyledNote } from './styled';

export function Note({
  color,
  title,
  subTitle,
  description,
  tags,
  date,
}: TNote) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [mousePosition, setMousePosition] = useState({ top: 0, left: 0 });

  const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
    setMousePosition({
      top: clientY + 10,
      left: clientX + 10,
    });
    setShowTooltip(!showMenu);
  };

  const handleRightClick = (e: MouseEvent) => {
    e.preventDefault();
    setShowMenu(true);
    setShowTooltip(false);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <StyledNote
      color={color}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onContextMenu={handleRightClick}
    >
      <Title title={title} />
      <SubTitle subTitle={subTitle} />
      <Description description={description} />
      <Time date={date} />
      <Tags tags={tags} />
      {showTooltip && <Tooltip {...mousePosition} />}
      {showMenu && <Menu />}
    </StyledNote>
  );
}
