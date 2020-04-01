import React, { FC, useCallback } from 'react';
import { Container, Title, Img, Price, Button } from './styles';
import { Props } from './types';

const Card: FC<Props> = ({ id, img, name, price, addToCart }) => {
  const onAddToCart = useCallback(() => addToCart(id), [id, addToCart]);

  return (
    <Container>
      <Title>{name}</Title>
      <Img src={img} />
      <Price>{price}€</Price>
      <Button onClick={onAddToCart}>Comprar</Button>
    </Container>
  );
};

export default Card;
