import styled from "styled-components";
import { CommonCompProps } from "../../utils/types";
import { commonStyles } from "../../styles";

type FlexContainerProps = CommonCompProps & {
  padding?: string;
  margin?: string;
  bgColor?: string;
  justify?: string;
  alignItems?: string;
  borderRadius?: string;
  flexDirection?: string;
}

type CustomSizeProps = CommonCompProps & {
  width?: string;
  height?: string;
  bgColor?: string;
}

type ContainerProps = CommonCompProps & {}

export const DashboardContainer = styled.main`
  display: flex;
  width: 100%;
  min-height: 100vh;
  position: relative;
`

export const Container = styled.div<ContainerProps>`
  ${(props) => props.useUtilsCss && commonStyles};
  width: 100%;
`;

export const CustomSizeContainer = styled.div<CustomSizeProps>`
  ${(props) => props.useUtilsCss && commonStyles};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const FlexContainer = styled.div<FlexContainerProps>`
  width: 100%;
  display: flex;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.bgColor};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection ? props.flexDirection : 'row'};
`;

export const CustomSizeFlexContainer = styled(FlexContainer)<CustomSizeProps>`
  ${(props) => props.useUtilsCss && commonStyles};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const RoundedImgContainer = styled(CustomSizeContainer)`
  border-radius: 50%;
  overflow: hidden;
  background-color: ${(props) => props.bgColor};
`

export const SquircleImgContainer = styled(CustomSizeContainer)`
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${(props) => props.bgColor};
`;

export const IconContainer = styled.div<{ isActive: boolean }>`
  transform: rotate(${(props) => props.isActive ? '180deg' : '0deg'});
`

export const RoundIconContainer = styled.div<CustomSizeProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.gray2};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const RoundIconFilledContainer = styled(RoundIconContainer)<{
  bgColor?: string;
}>`
  ${(props) => props.useUtilsCss && commonStyles};
  border: none;
  background-color: ${(props) => props.bgColor};
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
`

export const SubItemsContainer = styled.div`
  margin: 1rem 0 0.5rem 0;
  margin-left: 2.2rem;
  padding-left: 1rem;
  border-left: 2px solid ${(props) => props.theme.colors.gray2};
`

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: "#25262C";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ChartContainer = styled.div`
  width: 80%;
`;