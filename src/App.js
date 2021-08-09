import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { Result } from './components/Result';
import { Resume } from './components/Resume';
import { Spinner } from './components/Spinner';

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
  const [loading, setLoading] = useState(false);

  const { cotization, data } = resume;

  return (
    <Container>
      <Header title='Insurance Policy' />
      <FormContainer>
        <Form saveResume={saveResume} setLoading={setLoading} />

        <Resume data={data} />
        {loading ? <Spinner /> : <Result cotization={cotization} />}
      </FormContainer>
    </Container>
  );
};
