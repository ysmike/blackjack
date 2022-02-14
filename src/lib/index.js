import { VALUES, WIN_CONDITION } from '../constants';

function getCardEndpoint(deckId, drawCount) {
  return `http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${drawCount}`;
}

function getReshuffleEndpoint(deckId) {
  return `http://deckofcardsapi.com/api/deck/${deckId}/shuffle/`;
}

function calculateScore(cards) {
  const withoutAces = cards.filter((card) => card.value !== 'ACE'); // [8]
  const aces = cards.filter((card) => card.value === 'ACE'); // [A, A, A]
  const scoreWithoutAces = withoutAces.reduce((acc, card) => acc + VALUES[card.value], 0); // = 8
  const totalScoreLow = scoreWithoutAces + aces.length; // 3
  const totalScoreHigh = scoreWithoutAces + aces.length + 10; // 13
  return totalScoreHigh > 21 ? totalScoreLow : totalScoreHigh;
}

function didPlayerWin(houseScore, playerScore) {
  if (playerScore > WIN_CONDITION) return false;
  if (houseScore > WIN_CONDITION) return true;
  return playerScore > houseScore;
}

export {
  getCardEndpoint, getReshuffleEndpoint, calculateScore, didPlayerWin,
};
