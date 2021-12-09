import React, {FC, ReactNode} from 'react';
import styled from "styled-components";
import {colors, fonts} from "../../styles/variables";

const TextButtonStyled = styled.button`
  font-family: ${fonts.LgRegular};
  background: none;
  padding: 0;
  color: ${colors.textButtonRed};
  line-height: 24px;
  width: max-content;
  font-weight: bold;
  transition: 0.1s ease-out;
  
  :hover {
    color: ${colors.textButtonRedHovered};
  }
  
  :active {
    color: ${colors.textButtonRed};
  }
`;

interface ITextButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export const TextButton: FC<ITextButtonProps> = ({onClick, children}) => {
  return (
    <TextButtonStyled onClick={onClick}>{children}</TextButtonStyled>
  );
};
