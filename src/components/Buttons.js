import React from 'react';
import styled from 'styled-components';

const ButtonsStyles = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0 0 0;
`;

const ButtonStyles = styled.button`
  width: 12rem;
  height: 5rem;
  cursor: pointer;
  font-weight: bold;
  background-color: #4eb5f1;
  border-radius:3rem;
  box-sizing: border-box;
  color:#FFFFFF;
  &:hover {
    background-color: lightsalmon;
  }
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

export default function Buttons({
  hit, stand, loading, canHit,
}) {
  return (
    <ButtonsStyles>
      <ButtonStyles
        type="button"
        onClick={hit}
        disabled={loading || !canHit}
      >
        Hit
      </ButtonStyles>
      <ButtonStyles
        type="button"
        onClick={stand}
        disabled={loading || !canHit}
      >
        Stand
      </ButtonStyles>
    </ButtonsStyles>
  );
}
