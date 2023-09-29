import styled from "styled-components";

export const RightSection = styled.section`
  width: 75%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.black2};
  padding: 2rem;
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
  margin-top: 2rem;
  padding: 1.5rem 1rem;
`;

export const MatchContainer = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-top: 2rem;
  border: 1px solid ${(props) => props.theme.colors.gray2}
`;

export const MatchItem = styled.div<{ withBottomBorder: boolean }>`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${(props) => props.withBottomBorder ? `1px solid ${props.theme.colors.gray2}` : 'none'}
`

export const LiveMatchDetails = styled.div`
  padding: 1.5rem;
  border-radius: 1rem;
  margin-top: 3rem;
  background-color: ${(props) => props.theme.colors.black1};
`

export const Articles = styled.div`
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.black1};
  padding: 1.5rem;
  margin-top: 2rem;
`
