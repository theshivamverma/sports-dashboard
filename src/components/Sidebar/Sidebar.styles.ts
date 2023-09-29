import styled from "styled-components";

type MenuItemProps = {
  isActive?: boolean;
}

export const Sidebar = styled.section`
  width: 25%;
  min-height: 100%;
  padding: 2rem 1rem;
  background-color: ${(props) => props.theme.colors.black1};
`

export const MenuItem = styled.div<MenuItemProps>`
  width: 100%;
  background-color: ${(props => props.isActive ? props.theme.colors.primaryButton : "transparent")};
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
