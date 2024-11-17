import { useState, type MouseEvent } from 'react';
import { useForm } from 'react-hook-form';

import {
  Title,
  SubTitle,
  Description,
  Time,
  Tags,
  Tooltip,
  Menu,
  TitleInput,
  StyledSubTitle as SubTitleInput,
  DescriptionTextarea,
  StyledMain,
} from './components';
import { StyledNote } from './styled';

import type { INote } from '../../../shared';

export function Note({
  color,
  title,
  subTitle,
  description,
  tags,
  date,
}: INote) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isEditing, setIsEditing] = useState(!title);
  const [showMenu, setShowMenu] = useState(false);
  const [mousePosition, setMousePosition] = useState({ top: 0, left: 0 });

  const { register, handleSubmit } = useForm<INote>();

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

  const onSubmit = (data: Omit<INote, 'id' | 'date'>) => {
    console.log(data);
    setIsEditing(false);
  };

  return isEditing ? (
    <StyledNote as="form" color={color} onSubmit={handleSubmit(onSubmit)}>
      <TitleInput
        {...register('title', { value: title })}
        autoFocus
        placeholder="Title"
      />
      <StyledMain>
        <SubTitleInput
          {...register('subTitle', { value: subTitle })}
          placeholder="Subtitle"
        />
        <DescriptionTextarea
          {...register('description', { value: description })}
          placeholder="Description"
        />
      </StyledMain>
      <Time date={date} />
      <Tags tags={tags} />
      {showTooltip && <Tooltip {...mousePosition} />}
      {showMenu && <Menu />}
      <button type="submit">Save</button>
    </StyledNote>
  ) : (
    <StyledNote
      color={color}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onContextMenu={handleRightClick}
    >
      <Title title={title} />
      <StyledMain>
        <SubTitle subTitle={subTitle} />
        <Description description={description} />
      </StyledMain>
      <Time date={date} />
      <Tags tags={tags} />
      {showTooltip && <Tooltip {...mousePosition} />}
      {showMenu && <Menu />}
    </StyledNote>
  );
}

Note.displayName = 'Note';
