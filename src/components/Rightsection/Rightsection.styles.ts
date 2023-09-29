import styled from "styled-components";

export const RightSection = styled.section`
  width: 75%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.black2};
  padding: 2rem;
`

export const Line = styled.div`
  width: 30px;
  height: 2px;
  background-color: ${(props) => props.theme.colors.gray2};
  transform: rotate(-90deg);
`

export const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Banner = styled.div`
  width: 100%;
  height: 250px;
  padding: 3rem 2rem;
  color: #fff;
  margin-top: 3rem;
  border-radius: 1rem;
  background-image: linear-gradient(to right, #62008d 0%, #581c7e 100%);
`

export const TodaysMatch = styled.div`
  background-color: ${(props) => props.theme.colors.black1};
  border-radius: 1rem;
  margin-top: 1rem;
  padding: 1.5rem 1rem;
`;

export const MatchContainer = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  border: 1px solid ${(props) => props.theme.colors.gray2}
`;

export const MatchItem = styled.div<{ withBottomBorder: boolean }>`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${(props) => props.withBottomBorder ? `1px solid ${props.theme.colors.gray2}` : 'none'}
`

export const ScorePill = styled.div`
  padding: 0.3rem 0.5rem;
  min-width: 60px;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.gray1};
  display: flex;
  justify-content: center;
  align-items: center;
`