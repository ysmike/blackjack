/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { calculateScore } from '../lib';

const LabelStyles = styled.label`
  margin: 1rem;
`;

const CardsStyles = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem;
  background-color: lightgray;
  box-shadow: 10px 5px 5px black;
`;

const cardWidth = '120px';

export default function Hand({ cards, label }) {
  const score = calculateScore(cards);
  return (
    <>
      <LabelStyles>
        {`${label}: ${score}`}
      </LabelStyles>
      <CardsStyles>
        {cards.map((card, index) => (
          <img
            src={card.image}
            alt="Card"
            key={card.code + index}
            width={cardWidth}
          />
        ))}
      </CardsStyles>
    </>
  );
}
