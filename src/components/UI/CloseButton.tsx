import React, {FC} from 'react';
import styled from "styled-components";
import {ReactComponent as CloseIcon} from "../../media/icons/close.svg";
import {ReactComponent as CloseSmallIcon} from "../../media/icons/closeSmall.svg";
import {useWindowSize} from "../../hooks/useWindowSize";
import {maxWindowSizes} from "../../styles/variables";

const CloseButtonStyled = styled.button`
  position: absolute;
  top: 27px;
  right: 27px;

  @media (max-width: 767px) {
    top: 22px;
    right: 22px;
  }
`;

interface ICloseButtonProps {
  onClick: () => void;
}

export const CloseButton: FC<ICloseButtonProps> = ({onClick}) => {
  const {width} = useWindowSize();

  return (
    <CloseButtonStyled onClick={onClick}>
      {width <= maxWindowSizes.mobile ? <CloseSmallIcon /> : <CloseIcon />}
    </CloseButtonStyled>
  );
};