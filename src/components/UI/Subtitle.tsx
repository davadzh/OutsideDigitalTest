import React, {FC, ReactNode} from 'react';
import styled from "styled-components";
import {colors, fonts} from "../../styles/variables";

const SubtitleStyled = styled.h1`
  font-family: ${fonts.LgRegular};
  font-size: 14px;
  line-height: 24px;
  color: ${colors.black};
`;

interface ISubtitleProps {
  children: ReactNode;
}

export const Subtitle: FC<ISubtitleProps> = ({children}) => {
  return (
    <SubtitleStyled>
      {children}
    </SubtitleStyled>
  );
};