import styled from "styled-components";
import { CommonCompProps } from "../../utils/types";
import { commonStyles } from "../../styles";

type FontProps = CommonCompProps & {
  fontSize?: string;
  fontWeight?: number;
};

export const Header1 = styled.h1<FontProps>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.theme.colors.primaryFontColor};
  font-weight: 600;
`;

export const Text = styled.p<FontProps>`
  ${(props) => props.useUtilsCss && commonStyles};
  font-size: ${(props) => props.fontSize};
  font-weight: 400;
  color: ${(props) => props.theme.colors.primaryFontColor};
`;

export const CustomText = styled(Text)<{ color?: string; }>`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
`;

export const GrayText = styled.p<FontProps>`
  ${(props) => props.useUtilsCss && commonStyles};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.theme.colors.secondaryFontColor};
  font-weight: ${(props) => props.fontWeight};
`;
