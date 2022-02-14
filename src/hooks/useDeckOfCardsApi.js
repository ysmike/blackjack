import { useEffect, useState } from 'react';
import {
  API_ENDPOINT, NUM_OF_PLAYERS, VALUES, WIN_CONDITION,
} from '../constants';
import { calculateScore, didPlayerWin, getCardEndpoint } from '../lib';

export default function useDeckOfCardsApi() {
  const [deckId, setDeckId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [canHit, setCanHit] = useState(true);
  const [playerWin, setPlayerWin] = useState(null);
  const [standStatus, setStandStatus] = useState(false);

  const [playerCards, setPlayerCards] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);

  const [houseCards, setHouseCards] = useState([]);
  const [houseScore, setHouseScore] = useState(0);

  // fetch `deckId` when this component renders and set to state
  useEffect(() => {
    async function getDeckId() {
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();
      if (data.success) setDeckId(data.deck_id);
    }
    getDeckId().catch((e) => setError(e));
  }, []);

  // deal two cards to both the house and the player
  useEffect(() => {
    async function startGame() {
      const drawCount = NUM_OF_PLAYERS * 2;
      const response = await fetch(getCardEndpoint(deckId, drawCount));
      const { cards } = await response.json();
      const initialHouseCards = [];
      const initialPlayerCards = [];
      for (let i = 0; i < cards.length; i++) {
        if (i % NUM_OF_PLAYERS === 0) initialHouseCards.push(cards[i]);
        else initialPlayerCards.push(cards[i]);
      }
      setPlayerCards(initialPlayerCards);
      setHouseCards(initialHouseCards);
    }
    if (deckId) startGame().catch((e) => setError(e));
  }, [deckId]);

  // update house score when `houseCards` is updated
  useEffect(() => {
    const newHouseScore = calculateScore(houseCards);
    setHouseScore(newHouseScore);
  }, [houseCards]);

  // update player score when `playerCards` is updated
  useEffect(() => {
    const newPlayerScore = calculateScore(playerCards);
    setPlayerScore(newPlayerScore);
  }, [playerCards]);

  // set winner as house when `playerScore` exceeds 21
  useEffect(() => {
    if (playerScore > WIN_CONDITION) {
      setPlayerWin(false);
      setCanHit(false);
    }
  }, [playerScore]);

  // deal card to the dealer if the player has stood and house cards <= 16
  useEffect(() => {
    const hitDealer = async (_event) => {
      setLoading(true);
      const response = await fetch(getCardEndpoint(deckId, 1));
      const data = await response.json();
      const [newCard] = data.cards;
      setHouseCards([...houseCards, newCard]);
      setLoading(false);
    };
    if (standStatus && houseScore <= 16) hitDealer();
    if (standStatus) setPlayerWin(didPlayerWin(houseScore, playerScore));
  }, [standStatus, houseScore]);

  const hit = async (_event) => {
    setLoading(true);
    const response = await fetch(getCardEndpoint(deckId, 1));
    const data = await response.json();
    const [newCard] = data.cards;
    setPlayerCards([...playerCards, newCard]);
    setLoading(false);
  };

  const stand = (_event) => {
    setStandStatus(true);
    setCanHit(false);
  };

  return [{
    houseCards, playerCards, playerWin, loading, error,
  }, hit, stand, canHit];
}
