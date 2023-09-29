import styled from "styled-components";
import {Link} from "react-router-dom";
import { CommonCompProps } from "../../utils/types";
import { commonStyles } from "../../styles";

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const ScorePill = styled.span<CommonCompProps>`
  padding: 0.3rem 0.5rem;
  min-width: 60px;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.gray1};
  ${(props) => props.useUtilsCss && commonStyles};
`;

export const Dot = styled.span`
  width: 3px;
  height: 3px;
  background-color: ${(props) => props.theme.colors.gray4};
  display: inline-block;
  border-radius: 50%;
  margin: 0 0.5rem;
  margin-top: 8px;
`;

export const Badge = styled.span`
  width: 18px;
  height: 18px;
  background-color: ${(props) => props.theme.colors.red};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 0.6rem;
  color: #fff;
  font-weight: 400;
  position: absolute;
  top: -5px;
  right: -5px;
`;

export const Line = styled.div`
  width: 30px;
  height: 2px;
  background-color: ${(props) => props.theme.colors.gray2};
  transform: rotate(-90deg);
`;