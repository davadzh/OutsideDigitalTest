import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import styled from "styled-components";
import {Subtitle} from "./UI/Subtitle";
import {Input} from "./UI/Input";
import {TextButton} from "./UI/TextButton";

const YourSalaryStyled = styled.div`
  margin-top: 24px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;


interface IYourSalaryProps {
  setYearlyPays: Dispatch<SetStateAction<Array<string>>>
}

export const YourSalary: FC<IYourSalaryProps> = ({setYearlyPays}) => {
  const [salary, setSalary] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('')

  const calculateSalary = () => {
    if (salary === '') {
      setErrorMessage('Поле обязательно для заполнения')
      return;
    }

    const salaryNumber = Number(salary);

    if (Number.isNaN(salaryNumber) || !Number.isInteger(salaryNumber)) {
      setErrorMessage('Введите целое число')
      return;
    }

    if (salaryNumber < 10000) {
      setErrorMessage('Заработная плата должна быть как минимум 10000')
      return;
    }

    setErrorMessage('');

    const yearlyTaxDeduction: number = Math.ceil(salaryNumber * 12 * 0.13);
    let maxSum: number = 260000;
    let yearCount: number = 1;
    let pays: Array<string> = [];

    while (maxSum > 0) {
      if (maxSum < yearlyTaxDeduction) {
        pays.push(maxSum + ` рублей в ${yearCount}-й год`)
        break;
      }

      maxSum = maxSum - yearlyTaxDeduction;
      pays.push(yearlyTaxDeduction + ` рублей в ${yearCount}-й год`)
      yearCount++;
    }

    setYearlyPays(pays);
  }

  return (
    <YourSalaryStyled>
      <Subtitle>Ваша зарплата в месяц</Subtitle>
      <Input value={salary} setValue={setSalary} errorMessage={errorMessage} placeholder={'Введите данные'}/>
      <TextButton onClick={calculateSalary}>Рассчитать</TextButton>
    </YourSalaryStyled>
  );
};