import React, {FC, ReactNode} from 'react';
import styled from "styled-components";
import {colors, fonts} from "../../styles/variables";

const DescriptionStyled = styled.p`
  color: ${colors.textGray};
  font-family: ${fonts.LgRegular};
  font-size: 14px;
  text-align: left;
  line-height: 24px;

  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

interface IDescriptionProps {
  children?: ReactNode;
}

export const Description: FC<IDescriptionProps> = ({children}) => {
  return (
    <DescriptionStyled>
      {children}
    </DescriptionStyled>
  );
};