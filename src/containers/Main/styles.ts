import styled from 'styled-components';

export const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;
`;

export const Grid = styled.div`
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  grid-gap: 1.25rem;
`;
