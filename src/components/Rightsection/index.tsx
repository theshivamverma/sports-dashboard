import React from "react";
import { RightSection } from "./Rightsection.styles";
import DashboardTopbar from "./Topbar";
import { CustomSizeContainer, CustomSizeFlexContainer } from "../Container";
import DashboardBanner from "./Banner";
import DashboardTodaysMatch from "./TodaysMatch";
import DashboardLiveMatch from "./LiveMatchDetails";
import DashboardArticles from "./Articles";

const DashboardRightSection: React.FC = () => {
  return (
    <RightSection>
      <DashboardTopbar />
      <CustomSizeFlexContainer width="100%" justify="space-between">
        <CustomSizeContainer width="60%">
          <DashboardBanner />
          <DashboardTodaysMatch />
        </CustomSizeContainer>
        <CustomSizeContainer width="35%">
          <DashboardLiveMatch />
          <DashboardArticles />
        </CustomSizeContainer>
      </CustomSizeFlexContainer>
    </RightSection>
  );
};

export default DashboardRightSection;
