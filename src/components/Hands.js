import React from 'react';
import Hand from './Hand';

export default function Hands({ playerCards, houseCards }) {
  return (
    <>
      <Hand cards={houseCards} label="House" />
      <Hand cards={playerCards} label="Player" />
    </>
  );
}
