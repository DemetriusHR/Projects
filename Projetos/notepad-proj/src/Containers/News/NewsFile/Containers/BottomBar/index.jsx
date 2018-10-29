import React, { useContext } from 'react';

import BottomBarWrapper from './BottomBar.Style';
import ParagrafoWrapper from '../Paragrafo/Paragrafo.Style';
import ContainerWrapper from '../../Informations/Container/Container.Style';

import { ProfileContext } from '../../../../../Context/profile';
import { NewsContext } from '../../../../../Context/news/data';
import { likeDefine, likeCompare } from '../../../../../Utils/likesConvert';
import { saveDefine, saveCompare } from '../../../../../Utils/savesConvert';

const Bottom = (props) => {
  // eslint-disable-next-line
  const { like, save, idAuthor, idNews, idProfile } = props;
  const { actionsNews } = useContext(NewsContext);
  const { profiles } = useContext(ProfileContext);
  const likesDefine = likeDefine(like);
  const likesCompare = likeCompare(like, idProfile);
  const savesDefine = saveDefine(save);
  const savesCompare = saveCompare(save, idProfile);

  return (
    <ParagrafoWrapper>
      <BottomBarWrapper>
        <div className="title">
          {`Gosto do que leu? Curta ou salve o artigo de ${
            profiles[idAuthor].name
          }`}
        </div>
        <div className="subtitle">
          {`Se gostou curta, mas se gostou demais curta e salve para mostrar o
          quanto gostou do artigo`}
        </div>
        <div className="buttons-content">
          <ContainerWrapper
            className="buttom"
            onClick={() => actionsNews.onClickLike(idNews)}
          >
            <span
              className={`fa ${
                likesCompare.length === 0 ? 'fa-star-o' : 'fa-star'
              }`}
            />
          </ContainerWrapper>
          <div className="text">{likesDefine}</div>

          <ContainerWrapper
            className="buttom second-buttom"
            onClick={() => actionsNews.onClickSave(idNews)}
          >
            <span
              className={`fa ${
                savesCompare.length === 0 ? 'fa-flag-o' : 'fa-flag'
              }`}
            />
          </ContainerWrapper>
          <div className="text">{savesDefine}</div>
        </div>
      </BottomBarWrapper>
    </ParagrafoWrapper>
  );
};

export default Bottom;
