import React, {Dispatch, FC, ReactNode, SetStateAction, useState} from 'react';
import styled from "styled-components";
import {colors, fonts} from "../../styles/variables";

interface ITagStyledProps {
  isActive: boolean;
}

const TagStyled = styled.button<ITagStyledProps>`
  font-size: 14px;
  font-family: ${fonts.LgRegular};
  background: ${props => props.isActive ? colors.redGradient : colors.tagNotActiveGray};
  color: ${props => props.isActive ? colors.white : colors.black};
  line-height: 24px;
  padding: 6px 12px;
  border-radius: 50px;
  transition: 0.1s ease;

  
  :hover {
    background: ${props => props.isActive ? colors.redGradient : colors.tagHoveredGray};
  }
`;

interface ITagProps {
  children: ReactNode;
}

export const Tag: FC<ITagProps> = ({children}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <TagStyled isActive={isActive} onClick={() => setIsActive(prevState => !prevState)}>
      {children}
    </TagStyled>
  );
};
