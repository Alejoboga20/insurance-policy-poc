import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { Resume } from './components/Resume';

const initialState = {
  cotization: 0,
  data: {
    brand: '',
    year: '',
    plan: '',
  },
};

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

export const App = () => {
  const [resume, saveResume] = useState(initialState);

  const { data } = resume;

  return (
    <Container>
      <Header title='Insurance Policy' />
      <FormContainer>
        <Form saveResume={saveResume} />

        <Resume data={data} />
      </FormContainer>
    </Container>
  );
};
