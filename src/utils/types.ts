import React from "react";

export type IconProps = {
  className?: string;
  color?: string;
  size?: number;
}

export type CommonCompProps = {
  useUtilsCss?: boolean;
  padding?: string;
  margin?: string;
  width?: string;
  textAlign?: string;
  fontSize?: string;
  borderRadius?: string;
}

export type Options = {
  id: string;
  PrimaryIcon: React.FC<IconProps>;
  SecondaryIcon: React.FC<IconProps>;
  label: string;
  subOptions : {
    id: string;
    icon: string
    label: string;
  }[]
}

export type Match = {
  [key: string]: {
    todaysMatch: {
      leagueName: string;
      description: string;
      leagueLogo: string;
      matchData: {
        id: string;
        index: string;
        indexColor: string;
        team1Name: string;
        team1Logo: string;
        team2Name: string;
        team2Logo: string;
        score: string;
      }[];
    }[];
    liveMatch: {
      id: string;
      team1Name: string;
      team1Logo: string;
      team2Name: string;
      team2Logo: string;
      score: string;
    };
  };
};