import { useEffect } from 'react';

import { useRemoveTag } from '../../../../api';
import { useEditNote } from '../../hooks';

import { StyledTags } from './styled';

export function Tags() {
  const { handleBlur, setValue, watch, trigger, getValues } =
    useEditNote('description');
  const { mutation } = useRemoveTag(getValues('id'));
  const tags = watch('tags');

  useEffect(() => {
    trigger('tags');
  }, [tags]);

  const handleClick = (id: string, name: string) => () => {
    const regex = new RegExp(`${name}`, 'g');
    mutation.mutate({ tagId: id });
    setValue(
      'tags',
      tags.filter((tag) => tag.id !== id),
    );
    setValue(
      'description',
      getValues('description').replace(regex, (match) => match.slice(1)),
    );
    handleBlur();
  };

  return (
    <StyledTags>
      {tags.map(({ name, id }) => (
        <span key={id} onClick={handleClick(id, name)}>{` ${name}`}</span>
      ))}
    </StyledTags>
  );
}

Tags.displayName = 'Tags';
