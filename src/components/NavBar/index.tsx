import React, { FC } from 'react';
import { Container, Link } from './styles';

const NavBar: FC = () => (
  <Container>
    <Link to="/">Home</Link>
    <Link to="/Cart">Carrito</Link>
  </Container>
);

export default NavBar;
