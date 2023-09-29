import React from 'react'
import Chart from '../components/Chart'
import { ChartContainer, PageContainer } from '../components/Container';
import { Text } from '../components/Typography';

const Details: React.FC = () => {
  return (
    <PageContainer style={{ background: "#25262C" }}>
      <Text>Views in match stages</Text>
      <ChartContainer>
        <Chart />
      </ChartContainer>
    </PageContainer>
  );
}

export default Details