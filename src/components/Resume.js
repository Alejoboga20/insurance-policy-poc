import React from 'react';
import styled from '@emotion/styled';
import { capitalize } from '../helpers/helper';

const ResumeContainer = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

export const Resume = ({ data }) => {
  const { brand, year, plan } = data;

  if (brand === '' || year === '' || plan === '') return null;

  return (
    <ResumeContainer>
      <h2>Cotization Resume</h2>

      <ul>
        <li>Brand: {capitalize(brand)}</li>
        <li>Plan: {capitalize(year)}</li>
        <li>Year: {capitalize(plan)}</li>
      </ul>
    </ResumeContainer>
  );
};
