import React from 'react'
import { IconProps } from '../../utils/types';

const Chart: React.FC<IconProps> = ({ color = "#fff", size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      color={color}
      fill={color}
    >
      <path d="M5 3V19H21V21H3V3H5ZM19.9393 5.93934L22.0607 8.06066L16 14.1213L13 11.121L9.06066 15.0607L6.93934 12.9393L13 6.87868L16 9.879L19.9393 5.93934Z" />
    </svg>
  );
};

export default Chart