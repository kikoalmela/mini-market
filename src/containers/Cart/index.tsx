import React, { FC } from 'react';
import { Container } from './styles';
import NavBar from 'components/NavBar';
import { Props } from './types';
import connect from './connect';
import CartCard from 'components/CartCard/indext';

const Cart: FC<Props> = ({ removeFromCart, cartProducts }) => {
  const total = cartProducts.reduce((acc, { price }) => acc + price, 0);
  return (
    <Container>
      <NavBar />
      {cartProducts.map(({ id, name, img, price }) => (
        <CartCard
          key={id}
          id={id}
          img={img}
          name={name}
          price={price}
          removeFromCart={removeFromCart}
        />
      ))}
      <div>Total: {total}€</div>
    </Container>
  );
};

export default connect(Cart);
