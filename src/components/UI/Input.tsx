import React, {Dispatch, FC, SetStateAction} from 'react';
import styled from "styled-components";
import {colors, fonts} from "../../styles/variables";

interface IInputStyledProps {
  hasError: boolean;
}

const InputStyled = styled.input<IInputStyledProps>`
  padding: 8px 10px;
  border-radius: 3px;
  border: 1px solid ${props => props.hasError ? colors.borderRed : colors.borderGray};
  font-family: ${fonts.LgRegular};
  font-size: 14px;
  color: ${colors.black};
  line-height: 24px;
  transition: 0.1s ease-in-out;

  ::placeholder {
    color: ${colors.placeholderGray};
  }

  :enabled {
    :hover, :active {
      border-color: ${colors.black};
    }

    :focus {
      border-color: ${colors.black};
      caret-color: ${colors.caretGray};
    }
  }

  :disabled {
    background: ${colors.white};
    border-color: ${colors.disabledButtonGray};
    color: ${colors.disabledButtonGray};
  }
`;

const ErrorMessage = styled.div`
  margin-top: 4px;
  font-size: 10px;
  line-height: 12px;
  color: ${colors.textButtonRed};
`;

interface IInputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>
  errorMessage?: string;
  placeholder?: string;
  isDisabled?: boolean;
}

export const Input: FC<IInputProps> = ({
                                         value,
                                         setValue,
                                         errorMessage = '',
                                         placeholder = '',
                                         isDisabled = false
                                       }) => {
  return (
    <div>
      <InputStyled value={value}
                   onChange={(e) => setValue(e.target.value)}
                   placeholder={placeholder}
                   hasError={!!errorMessage}
                   disabled={isDisabled}/>
      {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};
