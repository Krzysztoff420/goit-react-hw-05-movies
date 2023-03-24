import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 15px 0;
  margin-bottom: 16px;
  box-shadow: 0px 4px 10px 0px rgba(97, 97, 97, 0.52);
  > nav {
    display: flex;
    justify-content: space-around;
    gap: 12px;
    margin-left: 30px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: #b00b69;
  }
`;
