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
import { adelaide36ers, bullets, bulls, hawks, kings, mavericks, nba, nbl, nets, rockets, wildcats, wizards } from "../assets/images/basketball";
import { arsenal, astonVilla, atleticoMadrid, bundesliga, chelsea, fcBarcelona, laLiga, liverpool, premierLeague, realMadrid, sevilla, uefa, valencia, villareal } from "../assets/images/football";
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
  "111": [
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
  "112": [
    {
      leagueName: "NBA",
      description: "",
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
      description: "",
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
};