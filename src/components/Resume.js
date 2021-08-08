import React from 'react';

export const Resume = ({ data }) => {
  const { brand, year, plan } = data;

  if (brand === '' || year === '' || plan === '') return null;

  return (
    <>
      <h2>Cotization</h2>

      <ul>
        <li>Brand: {brand}</li>
        <li>Plan: {year}</li>
        <li>Year: {plan}</li>
      </ul>
    </>
  );
};
