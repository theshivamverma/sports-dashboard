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
import { nba, nbl } from "../assets/images/basketball";
import { bundesliga, laLiga, premierLeague, uefa } from "../assets/images/football";

export const SidebarOptions = [
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
