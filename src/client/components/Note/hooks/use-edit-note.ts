import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { useUpdateNote } from '../../../api';
import type { INote } from '../../../../shared';

export const useEditNote = (fieldName: keyof INote) => {
  const [isEditing, setIsEditing] = useState(false);
  const {
    register,
    getValues,
    formState: { errors, dirtyFields },
    trigger,
    reset,
  } = useFormContext<INote>();
  const { mutation } = useUpdateNote(getValues('id'));

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    trigger(fieldName);

    if (Object.keys(dirtyFields).length > 0) {
      mutation.mutate(
        {
          ...getValues(),
          [fieldName]: getValues(fieldName),
          tags: getValues('tags').map(({ name }) => name),
        },
        {
          onSuccess: () => reset(getValues()),
        },
      );
    }
  };

  return {
    isEditing,
    error: errors[fieldName],
    register,
    getValues,
    handleClick,
    handleBlur,
  };
};
