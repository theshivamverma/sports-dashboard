import React from 'react';
import { RightSection } from "./Rightsection.styles"
import DashboardTopbar from './Topbar';

const DashboardRightSection: React.FC = () => {
  return (
    <RightSection>
      <DashboardTopbar />
    </RightSection>
  )
}

export default DashboardRightSection