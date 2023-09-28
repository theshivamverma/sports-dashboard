import React from 'react'
import { IconProps } from '../../utils/types'

const BasketballFilled: React.FC<IconProps> = ({ color = "#fff", size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      color={color}
      fill={color}
    >
      <path d="M12.366 13.366L14.1407 14.3911C13.05 16.8036 12.9953 19.4669 13.8296 21.8314C13.2375 21.9426 12.6255 22 12 22C10.5353 22 9.14414 21.6851 7.89054 21.1193L12.366 13.366ZM15.8835 15.3976L20.1168 17.8423C19.0224 19.3601 17.5128 20.5586 15.7543 21.2714C15.1047 19.511 15.0756 17.5348 15.7624 15.7017L15.8835 15.3976ZM8.85892 11.3417L10.634 12.366L6.15773 20.1168C4.5194 18.9355 3.25309 17.2704 2.56813 15.3308C4.92702 14.8924 7.11579 13.6115 8.65334 11.6179L8.85892 11.3417ZM21.9051 10.6165C21.9677 11.0687 22 11.5306 22 12C22 13.4647 21.6851 14.8559 21.1193 16.1095L16.8838 13.6649C18.1057 12.0497 19.8575 11.0078 21.7497 10.6436L21.9051 10.6165ZM2.8807 7.89054L7.11588 10.3356C5.86043 11.9949 4.0458 13.0491 2.09489 13.3854C2.03239 12.932 2 12.4698 2 12C2 10.5353 2.3149 9.14414 2.8807 7.89054ZM17.8423 3.88318C19.4803 5.06428 20.7465 6.72901 21.4315 8.66817C19.0721 9.108 16.8836 10.3891 15.3463 12.3826L15.1407 12.6588L13.366 11.634L17.8423 3.88318ZM12 2C13.4647 2 14.8559 2.3149 16.1095 2.8807L11.634 10.634L9.85892 9.60983C10.95 7.19703 11.0048 4.53332 10.1704 2.16848C10.7625 2.05742 11.3745 2 12 2ZM8.24679 2.72936C8.89548 4.48945 8.92444 6.46595 8.2373 8.2992L8.11613 8.60335L3.88318 6.15773C4.93611 4.69744 6.37339 3.53272 8.04682 2.81177L8.24679 2.72936Z" />
    </svg>
  );
};

const BasketballOutlined: React.FC<IconProps> = ({
  color = "#fff",
  size = 24,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      color={color}
      fill={color}
    >
      <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12.366 13.366L8.89708 19.376C9.85124 19.7779 10.8997 20 12 20C12.4622 20 12.9152 19.9608 13.3559 19.8856C13.0984 18.0632 13.3411 16.1601 14.1404 14.3917L12.366 13.366ZM15.8835 15.3974C15.3519 16.6567 15.1671 17.9943 15.2969 19.2905C16.5173 18.7384 17.5737 17.8888 18.3745 16.8346L15.8835 15.3974ZM8.85855 11.3422C7.7265 12.919 6.1993 14.0809 4.49366 14.7699C5.0255 16.2135 5.96211 17.4604 7.16543 18.3745L10.634 12.366L8.85855 11.3422ZM19.9616 11.2111L19.7038 11.3328C18.6197 11.8687 17.6478 12.6548 16.8834 13.6653L19.3756 15.1039C19.7777 14.1495 20 13.1007 20 12C20 11.7338 19.987 11.4706 19.9616 11.2111ZM4 12C4 12.2662 4.013 12.5294 4.03841 12.7889C5.22626 12.2534 6.29168 11.4249 7.11596 10.3355L4.62402 8.89708C4.22214 9.85124 4 10.8997 4 12ZM16.8346 5.62552L13.366 11.634L15.1407 12.6588C16.2731 11.0812 17.8009 9.91878 19.5073 9.22969C19.0134 7.89068 18.1702 6.71922 17.0884 5.82653L16.8346 5.62552ZM12 4C11.5375 4 11.0841 4.03925 10.6431 4.1146C10.9016 5.93748 10.6588 7.8408 9.85915 9.60931L11.634 10.634L15.1029 4.62402C14.1488 4.22214 13.1003 4 12 4ZM8.70313 4.70955L8.51189 4.79845C7.37266 5.35126 6.38436 6.16644 5.62552 7.16543L8.11608 8.60349C8.64798 7.34403 8.83295 6.00607 8.70313 4.70955Z" />
    </svg>
  );
};

export { BasketballFilled, BasketballOutlined }