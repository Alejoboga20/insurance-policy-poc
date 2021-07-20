import styled from '@emotion/styled';
import React from 'react';
import { Header } from './components/Header';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

export const App = () => {
  return (
    <Container>
      <Header title='Insurance Policy' />
      <FormContainer></FormContainer>
    </Container>
  );
};
