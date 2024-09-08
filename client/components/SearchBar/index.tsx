import { useForm } from 'react-hook-form';

import { StyledInput, StyledForm, StyledIcon } from './styled';

export function SearchBar() {
  const { register, handleSubmit } = useForm();

  return (
    <StyledForm onSubmit={handleSubmit((data) => console.log(data))}>
      <StyledIcon className="fas fa-search" />
      <StyledInput {...register('search')} placeholder="Search tag..." />
    </StyledForm>
  );
}
