import React from "react";
import { MenuItem, Sidebar } from "./Sidebar.styles";
import { SquareContainedImg, SquareImg } from "../Image";
import { dashboardLogo } from "../../assets/images";
import {
  Container,
  CustomSizeContainer,
  FlexContainer,
  IconContainer,
  RoundedImgContainer,
  SubItemsContainer,
} from "../Container";
import { CustomText, GrayText, Text } from "../Typography";
import { SidebarOptions } from "../../utils/constant";
import { ChevronDown, Heart, Logout, Support } from "../../assets/icons";
import { useDashboard } from "../../context";

const DashboardSidebar: React.FC = () => {
  const { activeMenuItem, setActiveMenuItem } = useDashboard();

  const menuClickHandler = (id: string) => {
    if (id && id !== activeMenuItem) {
      setActiveMenuItem(id);
    }
  };

  return (
    <Sidebar>
      <FlexContainer padding="0 0 0 1rem" alignItems="center">
        <CustomSizeContainer width="30px" height="30px">
          <SquareImg src={dashboardLogo} />
        </CustomSizeContainer>
        <Text useUtilsCss margin="0 0 0 0.5rem" fontSize="1.2rem">
          Sportia
        </Text>
      </FlexContainer>
      <GrayText useUtilsCss={true} margin="3rem 0 1rem 1rem" fontSize="0.8rem">
        Sports
      </GrayText>
      <Container>
        {SidebarOptions.map(
          ({ id, label, PrimaryIcon, SecondaryIcon, subOptions }) => {
            const isSelected = id === activeMenuItem;
            return (
              <Container key={id}>
                <MenuItem
                  isActive={isSelected}
                  onClick={() => menuClickHandler(id)}
                >
                  <FlexContainer alignItems="center">
                    {isSelected ? <PrimaryIcon /> : <SecondaryIcon />}
                    <Text useUtilsCss padding="0 0 0 0.5rem" fontSize="1rem">
                      {label}
                    </Text>
                  </FlexContainer>
                  <IconContainer isActive={isSelected}>
                    <ChevronDown />
                  </IconContainer>
                </MenuItem>
                <SubItemsContainer>
                  {isSelected &&
                    subOptions.map(({ icon, label, id }) => (
                      <FlexContainer
                        key={id}
                        padding="1rem"
                        alignItems="center"
                      >
                        <RoundedImgContainer width="30px" height="30px" bgColor="white">
                          <SquareContainedImg src={icon} />
                        </RoundedImgContainer>
                        <Text
                          useUtilsCss
                          padding="0 0 0 0.5rem"
                          fontSize="1rem"
                        >
                          {label}
                        </Text>
                      </FlexContainer>
                    ))}
                </SubItemsContainer>
              </Container>
            );
          }
        )}
      </Container>
      <Container useUtilsCss padding="3rem 0 0 0">
        <GrayText useUtilsCss={true} margin="0 0 1rem 1rem" fontSize="0.8rem">
          Other Menu
        </GrayText>
        <FlexContainer alignItems="center" padding="1rem 1.5rem">
          <Heart />
          <Text useUtilsCss padding="0 0 0 0.5rem" fontSize="1rem">
            Favorites
          </Text>
        </FlexContainer>
        <FlexContainer alignItems="center" padding="1rem 1.5rem">
          <Support />
          <Text useUtilsCss padding="0 0 0 0.5rem" fontSize="1rem">
            Support
          </Text>
        </FlexContainer>
      </Container>
      <Container>
        <FlexContainer alignItems="center" padding="1rem 1.5rem">
          <Logout color="#E72641" />
          <CustomText
            useUtilsCss
            padding="0 0 0 0.5rem"
            fontSize="1rem"
            color="#E72641"
          >
            Logout
          </CustomText>
        </FlexContainer>
      </Container>
    </Sidebar>
  );
};

export default DashboardSidebar;
