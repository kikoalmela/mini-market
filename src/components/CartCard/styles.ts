import styled from 'styled-components';

export const Container = styled.div`
  height: 10rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 1.5rem rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 1.25rem;
  }
`;

export const Title = styled.h3``;

export const Img = styled.img`
  height: 100%;
`;

export const Price = styled.p``;

export const Button = styled.button``;
