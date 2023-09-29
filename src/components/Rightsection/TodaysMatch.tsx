import React from "react";
import { MatchContainer, MatchItem, ScorePill, TodaysMatch } from "./Rightsection.styles";
import { CustomText, GrayText, Text } from "../Typography";
import { MatchData } from "../../utils/constant";
import { useDashboard } from "../../context";
import {
  Container,
  CustomSizeFlexContainer,
  FlexContainer,
  RoundedImgContainer,
} from "../Container";
import { SquareContainedImg } from "../Image";
import { Chart, ChevronDown, Layout, StarFilled, StarOutlined } from "../../assets/icons";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { IconButton } from "../Button";
import { theme } from "../../styles";

const colors: Record<string, string> = theme.colors;

const DashboardTodaysMatch: React.FC = () => {
  const { activeMenuItem } = useDashboard();
  const { localValues, updateData } = useLocalStorage();

  const todaysMatchData = MatchData[activeMenuItem]?.todaysMatch ?? MatchData["111"]["todaysMatch"];

  const favoriteMatches = localValues["favMatches"] ?? [];

  const setFavoriteMatches = (id: string) => {
    const matches = localValues["favMatches"] ?? [];
    let newData = [...matches];
    if (matches.includes(id)) {
      newData = matches.filter((mId: string) => mId !== id);
    } else {
      newData = [...matches, id];
    }
    updateData("favMatches", [...newData]);
  };

  return (
    <TodaysMatch>
      <CustomText fontSize="1.2rem" fontWeight={400} useUtilsCss>
        Today Match
      </CustomText>
      {todaysMatchData.map(
        ({ leagueName, description, leagueLogo, matchData }) => (
          <Container key={leagueName}>
            <FlexContainer margin="1.5rem 0">
              <FlexContainer>
                <RoundedImgContainer width="40px" height="40px" bgColor="white">
                  <SquareContainedImg src={leagueLogo} />
                </RoundedImgContainer>
                <Container useUtilsCss margin="0 0 0 0.5rem">
                  <Text fontSize="0.9rem">{leagueName}</Text>
                  <GrayText fontSize="0.7rem" useUtilsCss margin="0.5rem 0 0 0">
                    {description}
                  </GrayText>
                </Container>
              </FlexContainer>
              <ChevronDown />
            </FlexContainer>
            <MatchContainer>
              {matchData.map(
                (
                  {
                    id,
                    index,
                    indexColor,
                    score,
                    team1Logo,
                    team1Name,
                    team2Logo,
                    team2Name,
                  },
                  i
                ) => (
                  <MatchItem
                    key={id}
                    withBottomBorder={i !== matchData.length - 1}
                  >
                    {favoriteMatches.includes(id) ? (
                      <IconButton
                        width="30px"
                        height="30px"
                        onClick={() => setFavoriteMatches(id)}
                      >
                        <StarFilled size={20} color={theme.colors.yellow} />
                      </IconButton>
                    ) : (
                      <IconButton
                        width="30px"
                        height="30px"
                        onClick={() => setFavoriteMatches(id)}
                      >
                        <StarOutlined size={20} color={colors["gray4"]} />
                      </IconButton>
                    )}
                    <CustomText fontSize="0.8rem" color={colors[indexColor]}>
                      {index}
                    </CustomText>
                    <CustomSizeFlexContainer
                      width="65%"
                      justify="space-between"
                      alignItems="center"
                    >
                      <CustomSizeFlexContainer width="40%" alignItems="center">
                        <RoundedImgContainer
                          width="30px"
                          height="30px"
                          bgColor={colors.gray1}
                        >
                          <SquareContainedImg src={team1Logo} />
                        </RoundedImgContainer>
                        <Text
                          fontSize="0.9rem"
                          useUtilsCss
                          width="90%"
                          margin="0 0 0 0.5rem"
                        >
                          {team1Name}
                        </Text>
                      </CustomSizeFlexContainer>
                      <ScorePill>
                        <Text fontSize="0.8rem">{score}</Text>
                      </ScorePill>
                      <CustomSizeFlexContainer width="40%" alignItems="center">
                        <Text
                          fontSize="0.9rem"
                          useUtilsCss
                          width="90%"
                          margin="0 0.5rem 0 0"
                          textAlign="right"
                        >
                          {team2Name}
                        </Text>
                        <RoundedImgContainer
                          width="30px"
                          height="30px"
                          bgColor={colors.gray1}
                        >
                          <SquareContainedImg src={team2Logo} />
                        </RoundedImgContainer>
                      </CustomSizeFlexContainer>
                    </CustomSizeFlexContainer>
                    <CustomSizeFlexContainer width="10%" justify="space-between">
                      <IconButton width="30px" height="30px">
                        <Chart color={colors["gray4"]} size={20} />
                      </IconButton>
                      <IconButton width="30px" height="30px">
                        <Layout color={colors["gray4"]} size={20} />
                      </IconButton>
                    </CustomSizeFlexContainer>
                  </MatchItem>
                )
              )}
            </MatchContainer>
          </Container>
        )
      )}
    </TodaysMatch>
  );
};

export default DashboardTodaysMatch;
