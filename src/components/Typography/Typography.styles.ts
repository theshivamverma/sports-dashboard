import styled from "styled-components";
import { CommonCompProps } from "../../utils/types";
import { commonStyles } from "../../styles";

type FontProps = CommonCompProps & {
  fontSize?: string;
}

export const Header1 = styled.h1<FontProps>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.theme.colors.primaryFontColor};
  font-weight: 600;
`;

export const Header2 = styled.h2<FontProps>`
  ${(props) => props.useUtilsCss && commonStyles};
  font-size: ${(props) => props.fontSize};
  font-weight: 400;
  color: ${(props) => props.theme.colors.primaryFontColor};
`;

export const CustomHeader2 = styled(Header2)<{ color: string }>`
  color: ${(props) => props.color}
`

export const GrayText = styled.p<FontProps>`
  ${(props) => (props.useUtilsCss && commonStyles)};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.theme.colors.secondaryFontColor};
`;