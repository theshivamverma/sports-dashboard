import React from 'react';
import { DashboardContainer } from '../components/Container';
import LeftSidebar from '../components/Sidebar';
import DashboardRightSection from '../components/Rightsection';

const Home: React.FC = () => {
  return (
    <DashboardContainer>
      <LeftSidebar />
      <DashboardRightSection />
    </DashboardContainer>
  );
}

export default Home