import React from 'react';

import ParagrafoWrapper from '../../Containers/News/NewsFile/Containers/Paragrafo/Paragrafo.Style';
import dataNews from '../jsons/dataNews.json';
import { News01, News02, News03, News04 } from './News'; // eslint-disable-line
import { dateNow } from '../../Utils/dateConvert';

export const NewsContext = React.createContext();

export default class NewsProvider extends React.Component {
  state = {
    news: [
      {
        ...dataNews.news[0],
        content: <News01 />
      },
      {
        ...dataNews.news[1],
        content: <News02 />
      },
      {
        ...dataNews.news[2],
        content: <News03 />
      },
      {
        ...dataNews.news[3],
        content: <News04 />
      }
    ],
    actionsNews: {
      onClickLike: (id) => this.onClickLike(id),
      onClickSave: (id) => this.onClickSave(id),
      onChangeTitle: (event) => this.onChangeTitle(event),
      onChangeSubtitle: (event) => this.onChangeSubtitle(event),
      onChangeContent: (event) => this.onChangeContent(event),
      onChangeLinkImg: (event) => this.onChangeLinkImg(event),
      onPublicArticle: (event) => this.onPublicArticle(event),
      onCancel: (event) => this.onCancel(event),
      setStateIdNews: (idNews) => this.setStateIdNews(idNews),
      onChangeIdProfile: (idProfile) => this.onChangeIdProfile(idProfile)
    },
    idProfileNews: 0,
    idNews: 3,
    title: '',
    subtitle: '',
    content: '',
    linkImg: ''
  };

  onClickLike = (id) => {
    const { idProfileNews, news } = this.state;
    const idNews = idProfileNews;
    const arrayNews = [...news];
    let likesNews = arrayNews[id].likes;

    const indentify = likesNews.filter((like) => {
      return like === idNews;
    });

    if (indentify.length === 0) {
      likesNews[likesNews.length] = idNews;
    } else {
      likesNews = likesNews.filter((el) => {
        return el !== idNews;
      });
    }

    arrayNews[id] = {
      id: arrayNews[id].id,
      idProfileAuthor: arrayNews[id].idProfileAuthor,
      title: arrayNews[id].title,
      subtitle: arrayNews[id].subtitle,
      content: arrayNews[id].content,
      url: arrayNews[id].url,
      urlToImage: arrayNews[id].urlToImage,
      publishedAt: arrayNews[id].publishedAt,
      likes: likesNews,
      save: arrayNews[id].save
    };

    this.setState({
      news: arrayNews
    });
  };

  onClickSave = (id) => {
    const { idProfileNews, news } = this.state;
    const idNews = idProfileNews;
    const arrayNews = [...news];
    let savesNews = arrayNews[id].save;
    const indentify = savesNews.filter((save) => {
      return save === idNews;
    });

    if (indentify.length === 0) {
      savesNews[savesNews.length] = idNews;
    } else {
      savesNews = savesNews.filter((el) => {
        return el !== idNews;
      });
    }

    arrayNews[id] = {
      id: arrayNews[id].id,
      idProfileAuthor: arrayNews[id].idProfileAuthor,
      title: arrayNews[id].title,
      subtitle: arrayNews[id].subtitle,
      content: arrayNews[id].content,
      url: arrayNews[id].url,
      urlToImage: arrayNews[id].urlToImage,
      publishedAt: arrayNews[id].publishedAt,
      likes: arrayNews[id].likes,
      save: savesNews
    };

    this.setState({
      news: arrayNews
    });
  };

  onChangeTitle = (event) => {
    const text = event.target.value;
    this.setState({
      title: text
    });
  };

  onChangeSubtitle = (event) => {
    const text = event.target.value;
    this.setState({
      subtitle: text
    });
  };

  onChangeContent = (event) => {
    const text = event.target.value;
    this.setState({
      content: text
    });
  };

  onChangeLinkImg = (event) => {
    const text = event.target.value;
    this.setState({
      linkImg: text
    });
  };

  onPublicArticle = (event) => {
    event.preventDefault();
    const {
      title,
      content,
      news,
      idProfileNews,
      subtitle,
      linkImg
    } = this.state;

    if (title !== '' && content !== '') {
      const arrayNews = [...news];
      this.setState({
        news: [
          ...arrayNews,
          {
            id: arrayNews.length,
            idProfileAuthor: idProfileNews,
            title: title, // eslint-disable-line
            subtitle: subtitle, // eslint-disable-line
            content: (
              <ParagrafoWrapper dangerouslySetInnerHTML={{ __html: content }} />
            ),
            urlToImage: linkImg,
            publishedAt: dateNow(),
            likes: [],
            save: []
          }
        ]
      });
      this.onCancel(event);
    }
  };

  onCancel = (event) => {
    event.preventDefault();
    this.setState({
      title: '',
      subtitle: '',
      content: '',
      linkImg: ''
    });
  };

  setStateIdNews = (idNews) => {
    this.setState({
      idNews
    });
  };

  onChangeIdProfile = (idProfile) => {
    this.setState({
      idProfileNews: idProfile
    });
  };

  render() {
    const { children } = this.props;

    return (
      <NewsContext.Provider value={{ ...this.state }}>
        {children}
      </NewsContext.Provider>
    );
  }
}
