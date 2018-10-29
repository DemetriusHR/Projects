import React, { useContext } from 'react';

import DownBarWrapper from './DownBar.Style';
import { NewsContext } from '../../../../../Context/news/data';
import { likeCompare, likeDefine } from '../../../../../Utils/likesConvert';
import { saveDefine, saveCompare } from '../../../../../Utils/savesConvert';

const DownBar = (props) => {
  // eslint-disable-next-line
  const { idProfileNews, actionsNews } = useContext(NewsContext);
  const { like, saves, id } = props;
  const likesDefine = likeDefine(like);
  const likesCompare = likeCompare(like, idProfileNews);

  const savesDefine = saveDefine(saves);
  const savesCompare = saveCompare(saves, idProfileNews);

  return (
    <DownBarWrapper>
      <div className="star" onClick={() => actionsNews.onClickLike(id)}>
        <span
          className={`fa ${
            likesCompare.length === 0 ? 'fa-star-o' : 'fa-star'
          }`}
        />
        <span>{likesDefine}</span>
      </div>

      <div className="save" onClick={() => actionsNews.onClickSave(id)}>
        <span>{savesDefine}</span>
        <span
          className={`fa ${
            savesCompare.length === 0 ? 'fa-flag-o' : 'fa-flag'
          }`}
        />
      </div>
    </DownBarWrapper>
  );
};

export default DownBar;
