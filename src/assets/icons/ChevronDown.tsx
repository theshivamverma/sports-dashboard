import React from 'react'
import { IconProps } from '../../utils/types';

const ChevronDown: React.FC<IconProps> = ({ color = "#fff", size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      color={color}
      fill={color}
    >
      <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z" />
    </svg>
  );
};

export default ChevronDown