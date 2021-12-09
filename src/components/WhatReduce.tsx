import React from 'react';
import styled from "styled-components";
import {Subtitle} from "./UI/Subtitle";
import {WhatReduceTags} from "./WhatReduceTags";

const WhatReduceStyled = styled.div`
  margin: 20px 0 40px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  flex-grow: 1;

  @media (max-width: 767px) {
    margin: 0;
    gap: 24px;
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const WhatReduce = () => {
  return (
    <WhatReduceStyled>
      <Subtitle>Что уменьшаем?</Subtitle>
      <WhatReduceTags />
    </WhatReduceStyled>
  );
};
