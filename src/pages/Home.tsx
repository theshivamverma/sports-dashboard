import React from 'react';
import { DashboardContainer } from '../components/Container';
import LeftSidebar from '../components/Sidebar';
import DashboardRightSection from '../components/Rightsection';
import Modal from '../components/Modal';
import Chart from '../components/Chart';

const Home: React.FC = () => {
  return (
    <DashboardContainer>
      <Modal>
        <Chart />
      </Modal>
      <LeftSidebar />
      <DashboardRightSection />
    </DashboardContainer>
  );
}

export default Home