import React, { useContext } from 'react';

import CardIndex from '../../../Components/Cards/CardIndex';
import { LanguageContext } from '../../../Context';

function mapCards(cards, detailsWord) {
  return cards.map((card) => (
    <div style={{ padding: '10px' }}>
      <CardIndex card={card} detailsWord={detailsWord} />
    </div>
  ));
}

const Cards = ({ history }) => {
  const {
    loginOk,
    dataBase: { cards, detailsWord }
  } = useContext(LanguageContext);

  !loginOk && history.replace('/'); // eslint-disable-line

  return <div className="cards">{mapCards(cards, detailsWord)}</div>;
};

export default Cards;
