const VALUES = {
  ACE: { LOW: 1, HIGH: 11 },
  JACK: 10,
  QUEEN: 10,
  KING: 10,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
};

const WIN_CONDITION = 21;
const NUM_OF_PLAYERS = 2;
const MAX_NUM_OF_CARDS_DEALT = 11;
const NUM_OF_DECKS = 6;
const API_ENDPOINT = `http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${NUM_OF_DECKS}`;

export {
  VALUES, WIN_CONDITION,
  NUM_OF_PLAYERS,
  MAX_NUM_OF_CARDS_DEALT,
  NUM_OF_DECKS,
  API_ENDPOINT,
};
