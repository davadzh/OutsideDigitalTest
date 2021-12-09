import React, {FC, ReactNode} from 'react';
import styled from "styled-components";
import {colors, fonts} from "../../styles/variables";

const TitleStyled = styled.h1`
  font-family: ${fonts.LgRegular};
  margin-bottom: 16px;
  font-size: 28px;
  color: ${colors.black};

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

interface ITitleProps {
  children: ReactNode;
}

export const Title: FC<ITitleProps> = ({children}) => {
  return (
    <TitleStyled>
      {children}
    </TitleStyled>
  );
};