import { useFormContext } from 'react-hook-form';
import { useRef } from 'react';

import type { INote } from '../../../../../../shared';
import { useUpdateNote } from '../../../../../api';

import { StyledColor } from './styled';
import type { TColor } from './models';

export function Color({ color }: TColor) {
  const { setValue, getValues, reset } = useFormContext<INote>();
  const previousColorRef = useRef(getValues('color'));
  const { mutation } = useUpdateNote(getValues('id'));

  const handleClick = () => {
    setValue('color', color);
    const hasChanged =
      JSON.stringify(previousColorRef.current) !== JSON.stringify(color);

    if (hasChanged) {
      mutation.mutate(
        {
          ...getValues(),
          color: getValues('color'),
          tags: getValues('tags').map(({ name }) => name),
        },
        {
          onSuccess: () => {
            reset(getValues());
            previousColorRef.current = color;
          },
        },
      );
    }
  };

  return <StyledColor onClick={handleClick} color={color} type="button" />;
}

Color.displayName = 'Color';
