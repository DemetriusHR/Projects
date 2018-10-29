import React, { useReducer } from 'react';

import { CardWrapper } from './CardStyled';
import { Details } from './Components/Details';
import { Card } from './Components/Card';
import { initialState, reducer } from './reducer';
import imgPadrao from '../../../img/imgPadrao.jpeg';

function CardIndex(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    card: { id, title, subtitle, description, details, img },
    detailsWord
  } = props;

  return (
    <div key={id}>
      {title !== undefined &&
        subtitle !== undefined &&
        description !== undefined && (
          <CardWrapper height={state.show ? '100% !important' : '34vh'}>
            {state.onClick ? (
              <Details
                description={description}
                detailsWord={detailsWord}
                show={state.show}
                details={details}
                onClickShow={() => dispatch({ type: 'ONCLICKSHOW' })}
                clickOnCard={() => dispatch({ type: 'CLICKONCARD' })}
              />
            ) : (
              <Card
                img={img}
                imgPadrao={imgPadrao}
                title={title}
                subtitle={subtitle}
                clickOnCard={() => dispatch({ type: 'CLICKONCARD' })}
              />
            )}
          </CardWrapper>
        )}
    </div>
  );
}

export default CardIndex;
