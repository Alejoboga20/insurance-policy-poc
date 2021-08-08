import styled from '@emotion/styled';
import React, { useState } from 'react';
import {
  getDifferenceYear,
  calculateBrand,
  calculatePlan,
} from '../helpers/helper';

const initialState = {
  brand: '',
  year: '',
  plan: '',
};

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3 ease;
  margin-top: 2rem;

  &:hover {
    cursor: pointer;
    background-color: #26c6da;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  margin-bottom: 2rem;
  text-align: center;
`;

export const Form = () => {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(false);

  const { brand, year, plan } = data;

  const getInfo = (e) => {
    console.log(e.target.name, e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
      setError(true);
      return;
    }

    let result = 2000;

    setError(false);
    const difference = getDifferenceYear(year);
    result -= (difference * 3 * result) / 100;

    result = calculateBrand(brand) * result;
    const incrementPlan = calculatePlan(plan);
    result = parseFloat(result * incrementPlan).toFixed(2);
    console.log(result);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      {error ? <Error>All Fields Are Mandatory</Error> : null}
      <Field>
        <Label>Brand</Label>
        <Select name='brand' value={brand} onChange={getInfo}>
          <option value=''>-- Select --</option>
          <option value='american'>American</option>
          <option value='assian'>Assian</option>
          <option value='european'>European</option>
        </Select>
      </Field>

      <Field>
        <Label>Year</Label>
        <Select name='year' value={year} onChange={getInfo}>
          <option value=''>-- Select --</option>
          <option value='2012'>2012</option>
          <option value='2013'>2013</option>
          <option value='2014'>2014</option>
          <option value='2015'>2015</option>
          <option value='2016'>2016</option>
          <option value='2017'>2017</option>
          <option value='2018'>2018</option>
          <option value='2019'>2019</option>
          <option value='2020'>2020</option>
          <option value='2021'>2021</option>
        </Select>
      </Field>

      <Field>
        <Label>Plan</Label>
        <InputRadio
          type='radio'
          name='plan'
          value='basic'
          check={plan === 'basic'}
          onChange={getInfo}
        />{' '}
        Basic
        <InputRadio
          type='radio'
          name='plan'
          value='complete'
          check={plan === 'complete'}
          onChange={getInfo}
        />{' '}
        Complete
      </Field>

      <Button type='submit'>Calculate</Button>
    </form>
  );
};
