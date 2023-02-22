import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #333;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.li`
  display: inline-block;
  margin-right: 20px;
  font-size: 18px;

  &:last-child {
    margin-right: 0;
  }

  & > a {
    color: #fff;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;

    &:hover {
      background-color: #555;
    }
  }
`;


