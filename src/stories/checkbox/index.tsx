import React, { FC, useState } from 'react';

import { CheckboxContainer, MockCheckbox } from './styled';

interface CheckboxProps {
  checked: boolean;
  disabled: boolean;
  children;
}

export const Checkbox = ({
  checked = false,
  disabled = false,
  children,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <CheckboxContainer>
      <input
        type="checkbox"
        checked={isChecked}
      />
      <MockCheckbox />
      {children}
    </CheckboxContainer>
  )
};
