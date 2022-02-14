/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';

const DisplayStyles = styled.h1`
  margin: 1rem 0 0 0;
  color: #D5F5E3 ;
`;

export default function Display({ playerWin }) {
  switch (playerWin) {
    case true:
      return (
        <>
          <DisplayStyles>
            You Win 🥳
          </DisplayStyles>
          <p>(Refresh the page to start over)</p>
        </>
      );
    case false:
      return (
        <>
          <DisplayStyles>
            You Lose 🥲
          </DisplayStyles>
          <p>(Refresh the page to start over)</p>
        </>
      );
    default:
      return <DisplayStyles>Choose Your Move!</DisplayStyles>;
  }
}
