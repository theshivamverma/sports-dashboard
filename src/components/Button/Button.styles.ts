import styled from "styled-components";
import { CommonCompProps } from "../../utils/types";
import { commonStyles } from "../../styles";

type IconButtonProps = CommonCompProps & {
  width: string;
  height: string;
}

export const StyledButton = styled.button`
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const PrimaryButton = styled(StyledButton)<CommonCompProps>`
  ${(props) => props.useUtilsCss && commonStyles};
  padding: 0.5rem 1rem;
  color: #fff;
  font-weight: 400;
  background-color: ${(props) => props.theme.colors.primaryButton};
`;

export const SecondaryButton = styled(StyledButton)`
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.secondaryButton};
  color: #fff; 
`

export const IconButton = styled(StyledButton)<IconButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: transparent;
`