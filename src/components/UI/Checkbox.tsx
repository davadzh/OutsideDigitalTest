import React, {useState} from 'react';
import styled from "styled-components";
import {colors} from "../../styles/variables";
import {ReactComponent as CheckedIcon} from "../../media/icons/checked.svg";

interface ICheckboxStyledProps {
  isChecked: boolean;
}

const CheckboxStyled = styled.div<ICheckboxStyledProps>`
  width: 20px;
  height: 20px;
  background: ${props => props.isChecked ? colors.redGradient : colors.white};
  border: 1px solid ${colors.checkboxGray};
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s ease;

  :hover {
    border-color: ${colors.black};
  }
`;

export const Checkbox = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <>
      <CheckboxStyled isChecked={isChecked}
                      onClick={() => setIsChecked(prevState => !prevState)}>
        {isChecked && <CheckedIcon/>}
      </CheckboxStyled>
    </>
  );
};
