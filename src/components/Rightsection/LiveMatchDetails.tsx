import React from 'react';
import { LiveMatchDetails } from './Rightsection.styles'
import { CustomText, GrayText, Text } from '../Typography'
import { useDashboard } from '../../context'
import { MatchData } from '../../utils/constant'
import { CustomSizeContainer, CustomSizeFlexContainer } from '../Container'
import { SquareContainedImg } from '../Image'
import { PrimaryButton } from '../Button';
import { StyledLink, ScorePill } from '../utils';

const DashboardLiveMatch: React.FC = () => {

  const {activeMenuItem} = useDashboard();

  const liveMatchDetails = MatchData[activeMenuItem]?.liveMatch ?? MatchData["111"]["liveMatch"];
  const { score, team1Logo, team1Name, team2Logo, team2Name } = liveMatchDetails;

  return (
    <LiveMatchDetails>
      <CustomText fontSize="1.3rem" fontWeight={500}>
        Live Matches
      </CustomText>
      <GrayText fontSize="1rem" useUtilsCss margin="0.5rem 0 0 0">
        Description about this match
      </GrayText>
      <CustomSizeFlexContainer useUtilsCss padding="1rem 0" alignItems="center">
        <CustomSizeFlexContainer flexDirection="column" alignItems="center">
          <CustomSizeContainer width="100px" height="100px">
            <SquareContainedImg src={team1Logo} />
          </CustomSizeContainer>
          <CustomText fontSize="1rem" useUtilsCss margin="1rem 0 0 0">
            {team1Name}
          </CustomText>
        </CustomSizeFlexContainer>
        <ScorePill useUtilsCss padding="0.5rem" width="180px">
          <Text fontSize="1rem">{score}</Text>
        </ScorePill>
        <CustomSizeFlexContainer flexDirection="column" alignItems="center">
          <CustomSizeContainer width="100px" height="100px">
            <SquareContainedImg src={team2Logo} />
          </CustomSizeContainer>
          <CustomText fontSize="1rem" useUtilsCss margin="1rem 0 0 0">
            {team2Name}
          </CustomText>
        </CustomSizeFlexContainer>
      </CustomSizeFlexContainer>
      <StyledLink to="/details">
        <PrimaryButton
          useUtilsCss
          width="100%"
          fontSize="1.1rem"
          padding="1rem !important"
        >
          Match Detail
        </PrimaryButton>
      </StyledLink>
    </LiveMatchDetails>
  );
}

export default DashboardLiveMatch