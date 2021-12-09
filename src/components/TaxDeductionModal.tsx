import React, {Dispatch, FC, SetStateAction} from 'react';
import styled from "styled-components";
import {colors} from "../styles/variables";
import {ModalContainer} from "./UI/ModalContainer";
import {CloseButton} from "./UI/CloseButton";
import {TaxDeductionContent} from "./TaxDeductionContent";


const TaxDeductionModalStyled = styled.div`
  overflow: auto;
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${colors.white};
  border-radius: 30px;
  width: 552px;
  max-height: 80vh;

  @media (max-width: 1439px) {
    width: 453px;
  }
  
  @media (max-width: 767px) {
    max-height: 100vh;
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

interface ITaxDeductionModalProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const TaxDeductionModal: FC<ITaxDeductionModalProps> = ({setIsOpen}) => {
  return (
    <TaxDeductionModalStyled>
      <ModalContainer>
        <CloseButton onClick={() => setIsOpen(false)} />
        <TaxDeductionContent />
      </ModalContainer>
    </TaxDeductionModalStyled>
  )
};