import React, {FC} from 'react';
import styled from "styled-components";
import {colors, fonts} from "../../styles/variables";

const OpenModalButtonStyled = styled.button`
  font-family: ${fonts.LgRegular};
  font-size: 16px;
  color: ${colors.white};
  padding: 16px 32px;
  border: 1px solid ${colors.white};
  border-radius: 6px;
  transition: 0.1s ease-out;
  
  @media (max-width: 767px) {
    font-size: 12px;
    padding: 12px 24px;
  }
  
  :hover:enabled, :active:enabled{
    color: ${colors.black};
    background: ${colors.white};
  }
  
  :disabled {
    border-color: ${colors.disabledButtonGray};
    background: ${colors.disabledButtonGray};
  }
`;

interface IOpenModalButtonProps {
  text: string;
  onClick: () => void;
  isDisabled?: boolean;
}

export const OpenModalButton: FC<IOpenModalButtonProps> = ({text, onClick, isDisabled=false}) => {
  return (
    <OpenModalButtonStyled disabled={isDisabled} onClick={onClick}>
      {text}
    </OpenModalButtonStyled>
  );
};