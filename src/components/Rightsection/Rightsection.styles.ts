import styled from "styled-components";

export const RightSection = styled.section`
  width: 75%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.black2};
  padding: 2rem;
`

export const Line = styled.div`
  width: 30px;
  height: 2px;
  background-color: ${(props) => props.theme.colors.gray2};
  transform: rotate(-90deg);
`

export const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`