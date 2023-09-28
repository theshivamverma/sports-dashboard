import React from "react";
import { Line, Topbar } from "./Rightsection.styles";
import { GrayText, Header1, Header2 } from "../Typography";
import {
  Badge,
  Container,
  CustomSizeFlexContainer,
  RoundIconContainer,
  RoundedImgContainer,
} from "../Container";
import { ChevronDown, Notification, Settings } from "../../assets/icons";
import { SquareImg } from "../Image";

const DashboardTopbar: React.FC = () => {
  return (
    <Topbar>
      <Container>
        <Header1 fontSize="2rem">Welcome, Stacia!</Header1>
        <GrayText useUtilsCss fontSize="0.8rem" padding="0.5rem 0 0 0">
          Today is sports day
        </GrayText>
      </Container>
      <CustomSizeFlexContainer
        width="40%"
        alignItems="center"
        justify="space-between"
      >
        <CustomSizeFlexContainer
          width="25%"
          alignItems="center"
          justify="space-between"
        >
          <RoundIconContainer width="40px" height="40px">
            <Notification size={20} />
            <Badge>4</Badge>
          </RoundIconContainer>
          <RoundIconContainer width="40px" height="40px">
            <Settings size={20} />
          </RoundIconContainer>
        </CustomSizeFlexContainer>
        <Line />
        <CustomSizeFlexContainer
          width="55%"
          alignItems="center"
          justify="space-between"
          useUtilsCss
          padding=""
        >
          <RoundedImgContainer width="50px">
            <SquareImg src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" />
          </RoundedImgContainer>
  
          <Container useUtilsCss padding="0 0 0 1rem">
            <Header2 fontSize="0.8rem">Terry Stacia</Header2>
            <GrayText fontSize="0.65rem" useUtilsCss padding="0.5rem 0 0 0">
              MU Bwoey
            </GrayText>
          </Container>
          <ChevronDown size={48} />
        </CustomSizeFlexContainer>
      </CustomSizeFlexContainer>
    </Topbar>
  );
};

export default DashboardTopbar;