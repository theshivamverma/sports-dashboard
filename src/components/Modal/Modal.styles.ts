import styled from "styled-components";

export const ModalBackDrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
`

export const ModalContainer = styled.div`
  width: 50%;
  position: absolute;
  padding: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  background-color: #25262c;
  padding: 1rem;
  z-index: 999;
`;