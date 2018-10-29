import React, { useContext } from 'react';

import InformationsWrapper from './Informations.Style';
import Container from './Container';
import { NewsContext } from '../../../../Context/news/data';
import { likeCompare, likeDefine } from '../../../../Utils/likesConvert';
import { saveDefine, saveCompare } from '../../../../Utils/savesConvert';

const Informations = (props) => {
  // eslint-disable-next-line
  const { like, save } = props;
  const { actionsNews, idProfileNews, idNews } = useContext(NewsContext);

  const likesDefine = likeDefine(like);
  const likesCompare = likeCompare(like, idProfileNews);

  const savesDefine = saveDefine(save);
  const savesCompare = saveCompare(save, idProfileNews);

  return (
    <InformationsWrapper>
      <div onClick={() => actionsNews.onClickLike(idNews)}>
        <Container
          number={likesDefine}
          icon={likesCompare.length === 0 ? 'fa-star-o' : 'fa-star'}
        />
      </div>

      <div onClick={() => actionsNews.onClickSave(idNews)}>
        <Container
          number={savesDefine}
          icon={savesCompare.length === 0 ? 'fa-flag-o' : 'fa-flag'}
        />
      </div>
    </InformationsWrapper>
  );
};

export default Informations;
