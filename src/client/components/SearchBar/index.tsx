import { useFormContext } from 'react-hook-form';

import { StyledInput, StyledForm, StyledIcon } from './styled';

export function SearchBar() {
  const { register } = useFormContext<{ search: string }>();

  return (
    <StyledForm>
      <StyledIcon className="fas fa-search" />
      <StyledInput
        {...register('search', {
          setValueAs: (value) => (value ? `#${value}` : undefined),
        })}
        placeholder="Search tag..."
      />
    </StyledForm>
  );
}
