import React, {useState} from 'react';
import {Title} from "./UI/Title";
import {Description} from "./UI/Description";
import {YourSalary} from "./YourSalary";
import {WhatReduce} from "./WhatReduce";
import {Button} from "./UI/Button";
import {YearlyPays} from "./YearlyPays";

export const TaxDeductionContent = () => {
  const [yearlyPays, setYearlyPays] = useState<Array<string>>([]);

  return (
    <>
      <Title>Налоговый вычет</Title>
      <Description>Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не
        более 13% от своего официального годового дохода.</Description>

      <YourSalary setYearlyPays={setYearlyPays} />

      {yearlyPays.length > 0 && <YearlyPays yearlyPays={yearlyPays} />}

      <WhatReduce />

      <Button>Добавить</Button>
    </>
  );
};