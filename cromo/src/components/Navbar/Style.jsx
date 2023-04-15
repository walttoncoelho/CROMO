import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.nav`
  display: flex;
  border-bottom: 1px solid #cccccc;
  justify-content: center;
`;

export const Nav = styled.nav`
  justify-content: space-between;
  height: 80px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1440px;
`;

export const NavItem = styled.li`
  display: inline-block;
  margin-right: 20px;
  font-size: 18px;

  &:last-child {
    margin-right: 0;
  }

  & > a {
    color: #161616;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    margin-right: 30px;

    &:hover {
      color: #007f9b;
    }

    &.active {
      color: #007f9b;
    }
  }
`;

export const NavLinkStyled = styled(NavLink)`
  ${({ theme }) => css`
    &.${"active"} {
      color: ${theme.colors.primary};
    }
  `}
`;
