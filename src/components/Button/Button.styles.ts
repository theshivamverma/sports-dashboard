import styled from "styled-components";
import { CommonCompProps } from "../../utils/types";

type IconButtonProps = CommonCompProps & {
  width: string;
  height: string;
}

export const SecondaryButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.secondaryButton};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
`

export const IconButton = styled.button<IconButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
`