import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Form } from './components/Form';
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
  const [resume, saveResume] = useState({});

  return (
    <Container>
      <Header title='Insurance Policy' />
      <FormContainer>
        <Form saveResume={saveResume} />
      </FormContainer>
    </Container>
  );
};
