import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ResultContainer = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const CotizationMessage = styled.p`
  color: #00838f;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
  padding: 1rem;
  text-align: center;
`;

export const Result = ({ cotization }) => {
  return cotization === 0 ? (
    <Message>Pick brand, year and plan</Message>
  ) : (
    <ResultContainer>
      <TransitionGroup component='p' className='result'>
        <CSSTransition
          classNames='result'
          key={cotization}
          timeout={{ enter: 500, exit: 500 }}
        >
          <CotizationMessage>
            The cotization is: ${cotization}
          </CotizationMessage>
        </CSSTransition>
      </TransitionGroup>
    </ResultContainer>
  );
};

Result.propTypes = {
  cotization: PropTypes.number.isRequired,
};
