import React from 'react';
import styled from "styled-components";
import {Tag} from "./UI/Tag";

const WhatReduceTagsStyled = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 767px) {
    margin-bottom: 48px;
  }
`;

export const WhatReduceTags = () => {
  return (
    <WhatReduceTagsStyled>
      <Tag>Платеж</Tag>
      <Tag>Срок</Tag>
    </WhatReduceTagsStyled>
  );
};
