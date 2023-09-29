import React from "react";
import { Banner } from "./Rightsection.styles";
import { CustomText, Text } from "../Typography";
import { CustomSizeContainer, CustomSizeFlexContainer, FlexContainer } from "../Container";
import { ArrowRight, Calendar, Stadium } from "../../assets/icons";
import { SecondaryButton } from "../Button";
import { RoundIconFilledContainer } from "../Container/Container.styles";

const DashboardBanner: React.FC = () => {
  return (
    <Banner>
      <CustomText fontSize="1.5rem" fontWeight={500}>
        Manchester City Vs Arsenal
      </CustomText>
      <CustomSizeFlexContainer
        useUtilsCss
        margin="1rem 0 0 0"
        alignItems="center"
        padding="0.5rem 0"
      >
        <Calendar />
        <CustomText
          useUtilsCss
          padding="0 0 0 0.5rem"
          fontSize="1rem"
          fontWeight={300}
        >
          10 January, 2022
        </CustomText>
      </CustomSizeFlexContainer>
      <FlexContainer alignItems="center" padding="0.5rem 0">
        <Stadium />
        <CustomText
          useUtilsCss
          padding="0 0 0 0.5rem"
          fontSize="1rem"
          fontWeight={300}
        >
          Old Trafford Stadium
        </CustomText>
      </FlexContainer>
      <CustomSizeContainer useUtilsCss margin="1rem 0 0 0">
        <SecondaryButton>
          Get a Ticket
          <RoundIconFilledContainer
            useUtilsCss
            width="20px"
            height="20px"
            bgColor="#9567b1"
            margin="0 0 0 0.5rem"
          >
            <ArrowRight size={12} />
          </RoundIconFilledContainer>
        </SecondaryButton>
      </CustomSizeContainer>
    </Banner>
  );
};

export default DashboardBanner;
