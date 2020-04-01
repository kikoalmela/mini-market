import React, { FC, useCallback } from 'react';
import { Title, Container, Img, Price, Button } from './styles';
import { Props } from './types';

const CartCard: FC<Props> = ({ id, img, name, price, removeFromCart }) => {
  const onremoveFromCart = useCallback(() => removeFromCart(id), [
    id,
    removeFromCart,
  ]);

  return (
    <Container>
      <Img src={img} />
      <Title>{name}</Title>
      <Price>{price}€</Price>
      <Button onClick={onremoveFromCart}>Eliminar</Button>
    </Container>
  );
};

export default CartCard;
