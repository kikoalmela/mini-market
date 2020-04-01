import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-between;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 1.5rem;

  &:visited,
  &:active {
    color: black;
  }
`;
