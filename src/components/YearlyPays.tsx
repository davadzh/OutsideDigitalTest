import React, {FC} from 'react';
import styled from "styled-components";
import {Checkbox} from "./UI/Checkbox";
import {colors, fonts} from "../styles/variables";

const YearlyPaysStyled = styled.div`
  margin-bottom: 24px;
`;

const YearlyPayStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 11px;
  padding: 16px 0;
  border-bottom: 1px solid ${colors.borderGray};
`;

const YearlyPayText = styled.div`
  color: ${colors.black};
  font-family: ${fonts.LgRegular};
  font-size: 14px;
`;

interface IYearlyPaysProps {
  yearlyPays: Array<string>;
}

export const YearlyPays: FC<IYearlyPaysProps> = ({yearlyPays}) => {
  return (
    <YearlyPaysStyled>
      {yearlyPays.map(pay =>
        <YearlyPayStyled>
          <Checkbox />
          <YearlyPayText>{pay}</YearlyPayText>
        </YearlyPayStyled>)
      }

    </YearlyPaysStyled>
  );
};
