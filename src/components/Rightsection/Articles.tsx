import React from 'react'
import { Articles } from './Rightsection.styles'
import { CustomText, GrayText } from '../Typography';
import { CustomSizeContainer, FlexContainer, SquircleImgContainer } from '../Container';
import { SquareImg } from '../Image';
import { blogs } from '../../utils/constant';

const DashboardArticles: React.FC = () => {
  return (
    <Articles>
      <CustomText fontSize="1.3rem" fontWeight={500}>
        Latest Article
      </CustomText>
      {blogs.map(({ title, dateTime, imageAddress }) => (
        <FlexContainer padding="0.5rem" margin="0.5rem 0" alignItems="center" key={dateTime}>
          <SquircleImgContainer
            width="80px"
            height="60px"
          >
            <SquareImg src={imageAddress} />
          </SquircleImgContainer>
          <CustomSizeContainer useUtilsCss margin="0 0 0 1rem" width='90%'>
            <CustomText fontSize="1rem">{title}</CustomText>
            <GrayText fontSize="0.9rem" fontWeight={300} useUtilsCss margin="0.5rem 0 0 0">{dateTime}</GrayText>
          </CustomSizeContainer>
        </FlexContainer>
      ))}
    </Articles>
  );
}

export default DashboardArticles