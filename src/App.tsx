import styled from "styled-components";
import {colors} from "./styles/variables";
import {useState} from "react";
import {OpenModalButton} from "./components/UI/OpenModalButton";
import {Modal} from "./components/UI/Modal";
import {TaxDeductionModal} from "./components/TaxDeductionModal";

const AppStyled = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  
  & > button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

export const App = () => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  return (
    <AppStyled>
      <Modal domElementId={'tax-deduction-modal'} isOpen={isModalOpened}>
        <TaxDeductionModal setIsOpen={setIsModalOpened} />
      </Modal>

      <OpenModalButton text={'Налоговый вычет'} onClick={() => setIsModalOpened(true)}/>
    </AppStyled>
  );
}
