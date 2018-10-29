import React from 'react';

import { dateNow } from '../Utils/dateConvert';
import ProfileProvider from './profile';
import TasksProvider from './tasks';
import CommentProvider from './comment';
import NewsProvider from './news/data';
import CommentNewsProvider from './news/commentsData';
import dataBaseIndex from './jsons/dataIndex.json';

export const NotesContext = React.createContext();

class NotesProvider extends React.Component {
  state = {
    posts: dataBaseIndex.posts,
    postsSearch: dataBaseIndex.postsSearch,
    actions: {
      onChange: (e) => this.onChange(e),
      handleInputChangeTitle: (e) => this.handleInputChangeTitle(e),
      handleInputChangeContent: (e) => this.handleInputChangeContent(e),
      onClickContent: (value) => this.onClickContent(value),
      onClickPlus: () => this.onClickPlus(),
      onClickDelete: () => this.onClickDelete(),
      onClickDate: () => this.onClickDate(),
      onClickInfo: () => this.onClickInfo(),
      onCopy: () => this.onCopy(),
      onCut: () => this.onCut(),
      onClickProfile: () => this.onClickProfile(),
      searchNotes: (query) => this.searchNotes(query),
      onChangeIdProfile: (idProfile) => this.onChangeIdProfile(idProfile)
    },
    id: 0,
    idProfileNote: 0,
    title: '',
    content: '',
    date: '',
    idCont: 1,
    copied: false,
    cuted: false,
    profile: false
  };

  onChange = (event) => {
    const { title, content, id, posts, idCont } = this.state; // eslint-disable-line
    if (title !== '' && content !== '') {
      event.preventDefault();
      const date = dateNow();

      if (id === 0) {
        this.setState({
          posts: posts.concat({
            id: posts[posts.length - 1].id + 1,
            title,
            content,
            dateCriacao: date,
            dateModification: date
          }),
          postsSearch: posts.concat({
            id: posts[posts.length - 1].id + 1,
            title,
            content,
            dateCriacao: date,
            dateModification: date
          })
        });
        this.onClickPlus();
      } else {
        const arrayPosts = [...posts];
        const idConted = // eslint-disable-line
          (id - 1 < posts.length && // eslint-disable-line
            idCont === 1) || // eslint-disable-line
          id === 1
            ? 1
            : posts.length - id <= 0
              ? idCont
              : posts.length - id;
        arrayPosts[id - idConted] = {
          id,
          title,
          content,
          dateCriacao: arrayPosts[id - idConted].dateCriacao,
          dateModification: date
        };
        this.setState({
          posts: arrayPosts,
          postsSearch: arrayPosts
        });
        this.onClickPlus();
      }
    }
  };

  handleInputChangeTitle = (event) => {
    const text = event.target.value;
    this.setState({
      title: text,
      copied: false,
      cuted: false,
      profile: false
    });
  };

  handleInputChangeContent = (event) => {
    const text = event.target.value;
    this.setState({
      content: text,
      copied: false,
      cuted: false,
      profile: false
    });
  };

  onClickContent = (value) => {
    this.onClickPlus();
    this.setState({
      id: value.id,
      title: value.title,
      content: value.content
    });
  };

  onClickPlus = () => {
    this.setState({
      id: 0,
      title: '',
      content: '',
      date: '',
      copied: false,
      cuted: false,
      profile: false
    });
  };

  onClickDelete = () => {
    const { id, posts, idCont } = this.state;
    const removed = posts.filter((el) => {
      return el.id !== id;
    });

    this.setState({
      posts: removed,
      postsSearch: removed,
      idCont: id === posts.length ? idCont : idCont + 1
    });

    this.onClickPlus();
  };

  onClickDate = () => {
    const { id, posts } = this.state;
    if (id !== 0) {
      let dateClick = posts.filter((el) => {
        return el.id === id;
      });

      dateClick = `Data de Criação: ${dateClick
        .map((a) => a.dateCriacao)
        .toString()}`;

      this.setState({
        date: dateClick,
        copied: false,
        cuted: false,
        profile: false
      });
    }
  };

  onClickInfo = () => {
    const { id, posts } = this.state;

    if (id !== 0) {
      const infoClick = posts.filter((el) => {
        return el.id === id;
      });

      this.setState({
        date: `Data de Modificação: 
          ${infoClick.map((a) => a.dateModification).toString()}`,
        copied: false,
        cuted: false,
        profile: false
      });
    }
  };

  onCopy = () => {
    const { title, content } = this.state;

    if (title !== '' && content !== '') {
      this.setState({
        copied: true,
        profile: false
      });
    }
  };

  onCut = () => {
    const { title, content } = this.state;

    if (title !== '' && content !== '') {
      this.onClickPlus();
      this.setState({
        cuted: true
      });
    }
  };

  onClickProfile = () => {
    const { profile } = this.state;
    this.setState({ profile: !profile });
  };

  searchNotes = (query) => {
    const { posts } = this.state;

    const search = posts.filter((post) => {
      return post.title.includes(query) || post.content.includes(query);
    });

    this.setState({ postsSearch: search });
    this.onClickPlus();
  };

  onChangeIdProfile = (idProfile) => {
    this.setState({
      idProfileNote: idProfile
    });
  };

  render() {
    const { children } = this.props;
    return (
      <NotesContext.Provider value={{ ...this.state }}>
        {children}
      </NotesContext.Provider>
    );
  }
}

const NotesConsumer = NotesContext.Consumer;

export function contextWrapper(WrappedComponent) {
  return function Wrapper(props) {
    return (
      <NotesConsumer>
        {(context) => <WrappedComponent {...props} {...context} />}
      </NotesConsumer>
    );
  };
}

// eslint-disable-next-line
export default class Providers extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <ProfileProvider>
        <NotesProvider>
          <TasksProvider>
            <CommentProvider>
              <NewsProvider>
                <CommentNewsProvider>{children}</CommentNewsProvider>
              </NewsProvider>
            </CommentProvider>
          </TasksProvider>
        </NotesProvider>
      </ProfileProvider>
    );
  }
}
