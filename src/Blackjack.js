import React from 'react';
import styled from 'styled-components';
import Buttons from './components/Buttons';
import Display from './components/Display';
import Hands from './components/Hands';
import GlobalStyles from './globalStyles';
import useDeckOfCardsApi from './hooks/useDeckOfCardsApi';

const ContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Blackjack() {
  const [data, hit, stand, canHit] = useDeckOfCardsApi();
  const {
    playerCards, houseCards, playerWin, loading, error,
  } = data;

  if (error) return error.message;
  return (
    <ContainerStyles>
      <GlobalStyles />
      <Display playerWin={playerWin} />
      <Hands playerCards={playerCards} houseCards={houseCards} />
      <Buttons hit={hit} stand={stand} loading={loading} canHit={canHit} />
    </ContainerStyles>
  );
}
