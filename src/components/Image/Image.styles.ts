import styled from "styled-components";

export const SquareImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SquareContainedImg = styled(SquareImg)`
  object-fit: contain;
  transform: scale(0.75);
`