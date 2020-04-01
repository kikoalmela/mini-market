import Card from 'components/Card';
import NavBar from 'components/NavBar';
import React, { FC, useEffect } from 'react';
import connect from './connect';
import { Container, Grid } from './styles';
import { Props } from './types';

const Main: FC<Props> = ({ addToCart, fetchProducts, products }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container>
      <NavBar />
      <Grid>
        {products.map(({ id, name, img, price }) => (
          <Card
            key={id}
            id={id}
            img={img}
            name={name}
            price={price}
            addToCart={addToCart}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default connect(Main);
