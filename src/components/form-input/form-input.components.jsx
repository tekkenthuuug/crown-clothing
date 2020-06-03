import React from 'react';

import { Group, StyledInput, StyledInputLabel } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <Group>
      <StyledInput onChange={handleChange} {...otherProps} />
      {label && (
        <StyledInputLabel inputHasText={otherProps.value.length}>
          {label}
        </StyledInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
