import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { useUpdateNote } from '../../../api';
import type { INote } from '../../../../shared';

export const useEditNote = (fieldName: keyof INote) => {
  const [isEditing, setIsEditing] = useState(false);
  const {
    formState: { errors, dirtyFields },
    register,
    getValues,
    trigger,
    setValue,
    ...rest
  } = useFormContext<INote>();
  const { mutation } = useUpdateNote(getValues('id'));

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    trigger(fieldName);
    const regex = new RegExp(/\B#[\wа-яА-ЯёЁ-]+/g);
    const tags = getValues('description').match(regex) || [];

    if (Object.keys(dirtyFields).length > 0) {
      mutation.mutate(
        {
          ...getValues(),
          [fieldName]: getValues(fieldName),
          tags,
        },
        {
          onSuccess: (newNote) => {
            Object.entries(newNote).forEach(([key, value]) =>
              setValue(key as keyof typeof newNote, value),
            );
          },
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
    trigger,
    setValue,
    ...rest,
  };
};
