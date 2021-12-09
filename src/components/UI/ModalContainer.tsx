import styled from "styled-components";

export const ModalContainer = styled.div`
  position: relative;
  padding: 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 100%;
  
  @media (max-width: 767px) {
    border-radius: 0;
    padding: 32px 16px 16px 16px;
  }
`;