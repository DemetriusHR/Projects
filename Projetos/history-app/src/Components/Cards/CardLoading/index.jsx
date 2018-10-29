import React from 'react';

import Paragraph from './Components/Paragraph';
import { CardWrapper } from './CardLoadingStyle';
import { Card } from '../CardIndex/Components/Card';

function CardLoading() {
  return (
    <CardWrapper>
      <Card title={<Paragraph numberOfLines={1} />} />
    </CardWrapper>
  );
}

export default CardLoading;
