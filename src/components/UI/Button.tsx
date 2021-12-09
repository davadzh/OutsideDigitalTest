import React, {FC, ReactNode} from 'react';
import styled from "styled-components";
import {colors, fonts} from "../../styles/variables";

const ButtonStyled = styled.button`
  width: 100%;
  color: ${colors.white};
  padding: 16px 0;
  font-family: ${fonts.LgRegular};
  font-size: 16px;
  background: ${colors.redGradient};
  box-shadow: 0 0 24px rgba(234, 0, 41, 0.33);
  border-radius: 6px;
  line-height: 24px;
  
  :enabled {
    :hover, :active {
      background: ${colors.buttonRed};
    }
  }
  
  :disabled {
    background: ${colors.disabledButtonGray};
  }

  @media (max-width: 767px) {
    font-size: 12px;
    padding: 12px 0;
    line-height: 16px;
  }
`;

interface IButtonProps {
  children: ReactNode
}

export const Button: FC<IButtonProps> = ({children}) => {
  return (
    <ButtonStyled>
      {children}
    </ButtonStyled>
  );
};
