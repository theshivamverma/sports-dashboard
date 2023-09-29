import {
  BasketballFilled,
  BasketballOutlined,
  FencingFilled,
  FencingOutlined,
  FootballFilled,
  FootballOutline,
  PingPongFilled,
  PingPongOutlined,
} from "../assets/icons";
import { adelaide36ers, bullets, bulls, hawks, kings, laLakers, mavericks, nba, nbl, nets, nyKnicks, rockets, wildcats, wizards } from "../assets/images/basketball";
import { arsenal, astonVilla, atleticoMadrid, bundesliga, chelsea, fcBarcelona, laLiga, liverpool, manUtd, premierLeague, realMadrid, sevilla, uefa, valencia, villareal } from "../assets/images/football";
import { Match, Options } from "./types";

export const SidebarOptions: Options[] = [
  {
    id: "111",
    PrimaryIcon: FootballFilled,
    SecondaryIcon: FootballOutline,
    label: "Football",
    subOptions: [
      {
        id: "111.1",
        icon: laLiga,
        label: "La Liga",
      },
      {
        id: "111.2",
        icon: bundesliga,
        label: "Bundesliga",
      },
      {
        id: "111.3",
        icon: premierLeague,
        label: "Premier League",
      },
      {
        id: "111.4",
        icon: uefa,
        label: "UEFA Champions",
      },
    ],
  },
  {
    id: "112",
    PrimaryIcon: BasketballFilled,
    SecondaryIcon: BasketballOutlined,
    label: "Basketball",
    subOptions: [
      {
        id: "112.1",
        icon: nba,
        label: "NBA",
      },
      {
        id: "112.2",
        icon: nbl,
        label: "NBL",
      },
    ],
  },
  {
    id: "113",
    PrimaryIcon: PingPongFilled,
    SecondaryIcon: PingPongOutlined,
    label: "Ping Pong",
    subOptions: [
    ],
  },
  {
    id: "114",
    PrimaryIcon: FencingFilled,
    SecondaryIcon: FencingOutlined,
    label: "Fencing",
    subOptions: [
    ],
  },
];

export const MatchData: Match = {
  "111": {
    todaysMatch: [
      {
        leagueName: "La Liga",
        description: "Spanish La Liga",
        leagueLogo: laLiga,
        matchData: [
          {
            id: "ll1",
            index: "48",
            indexColor: "green",
            team1Name: "Barcelona",
            team1Logo: fcBarcelona,
            team2Name: "Real Madrid",
            team2Logo: realMadrid,
            score: "2 : 4",
          },
          {
            id: "ll2",
            index: "83",
            indexColor: "red",
            team1Name: "Atletico Madrid",
            team1Logo: atleticoMadrid,
            team2Name: "Villarreal",
            team2Logo: villareal,
            score: "3 : 1",
          },
          {
            id: "ll3",
            index: "59",
            indexColor: "green",
            team1Name: "Valencia",
            team1Logo: valencia,
            team2Name: "Sevilla",
            team2Logo: sevilla,
            score: "1 : 1",
          },
        ],
      },
      {
        leagueName: "Premiere League",
        description: "English",
        leagueLogo: premierLeague,
        matchData: [
          {
            id: "p1",
            index: "48",
            indexColor: "green",
            team1Name: "Liverpool F.C",
            team1Logo: liverpool,
            team2Name: "Chelsea F.C",
            team2Logo: chelsea,
            score: "2 : 4",
          },
          {
            id: "p2",
            index: "83",
            indexColor: "red",
            team1Name: "Aston Villa F.C",
            team1Logo: astonVilla,
            team2Name: "Arsenal F.C",
            team2Logo: arsenal,
            score: "3 : 1",
          },
        ],
      },
    ],
    liveMatch: {
      id: "l1",
      team1Name: "Barcelona",
      team1Logo: fcBarcelona,
      team2Name: "M. United",
      team2Logo: manUtd,
      score: "4 : 2",
    },
  },
  "112": {
    todaysMatch: [
      {
        leagueName: "NBA",
        description: "USA League",
        leagueLogo: nba,
        matchData: [
          {
            id: "nb1",
            index: "42",
            indexColor: "green",
            team1Name: "Atlanta Hawks",
            team1Logo: hawks,
            team2Name: "Brooklyn Nets",
            team2Logo: nets,
            score: "112 : 115",
          },
          {
            id: "nb2",
            index: "88",
            indexColor: "red",
            team1Name: "Chicago Bulls",
            team1Logo: bulls,
            team2Name: "Dallas Mavericks",
            team2Logo: mavericks,
            score: "106 : 113",
          },
          {
            id: "nb3",
            index: "56",
            indexColor: "red",
            team1Name: "Houston Rockets",
            team1Logo: rockets,
            team2Name: "Washingtom Wizards",
            team2Logo: wizards,
            score: "126 : 121",
          },
        ],
      },
      {
        leagueName: "NBL",
        description: "Australia League",
        leagueLogo: nbl,
        matchData: [
          {
            id: "nl1",
            index: "66",
            indexColor: "red",
            team1Name: "Perth Wildcats",
            team1Logo: wildcats,
            team2Name: "Sydney Kings",
            team2Logo: kings,
            score: "90 : 106",
          },
          {
            id: "nl2",
            index: "45",
            indexColor: "green",
            team1Name: "Adelaide 36ers",
            team1Logo: adelaide36ers,
            team2Name: "Brisbaine Bullets",
            team2Logo: bullets,
            score: "105 : 112",
          },
        ],
      },
    ],
    liveMatch: {
      id: "l1",
      team1Name: "L.A. Lakers",
      team1Logo: laLakers,
      team2Name: "N.Y. Knicks",
      team2Logo: nyKnicks,
      score: "94 : 104",
    },
  },
};

export const blogs = [
  {
    title: "Ben talking points from the weekend's top-flight action",
    dateTime: "June 30, 2023 11:15 PM",
    imageAddress:
      "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1949&q=80",
  },
  {
    title: "Spurs' lack of fervour thrown into stark relief by Arsenal",
    dateTime: "July 3, 2023 1:30 PM",
    imageAddress:
      "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1949&q=80",
  },
  {
    title: "Bale was a generational talent. And he was ours",
    dateTime: "July 12, 2023 9:45 AM",
    imageAddress:
      "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1949&q=80",
  },
  {
    title: "All the latest moves from around Europe",
    dateTime: "Aug 1, 2023 12:15 AM",
    imageAddress:
      "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1949&q=80",
  },
];