import React from 'react';

import dataFileTasks from './jsons/dataTasks.json';

export const TasksContext = React.createContext();

export default class TasksProvider extends React.Component {
  state = {
    items: dataFileTasks.items,
    actionsTasks: {
      onChange: (event) => this.onChange(event),
      onSubmit: (event) => this.onSubmit(event),
      onClickTask: (event) => this.onClickTask(event),
      onChangeIdProfile: (idProfile) => this.onChangeIdProfile(idProfile)
    },
    idCont: 3,
    idProfileTasks: 0,
    term: ''
  };

  onChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { term, items, idCont, idProfileTasks } = this.state; // eslint-disable-line

    if (term !== '') {
      this.setState({
        term: '',
        items: [
          ...items,
          {
            id: idCont,
            task: term,
            profileCreate: idProfileTasks,
            profileComplete: 0,
            doComplete: false
          }
        ],
        idCont: idCont + 1
      });
    }
  };

  onClickTask = (item) => {
    const { items, idProfileTasks } = this.state;
    const arrayItems = [...items];

    arrayItems[item.id] = {
      id: item.id,
      task: item.task,
      profileCreate: item.profileCreate,
      profileComplete: idProfileTasks,
      doComplete: !item.doComplete
    };

    this.setState({
      items: arrayItems
    });
  };

  onChangeIdProfile = (idProfile) => {
    this.setState({
      idProfileTasks: idProfile
    });
  };

  render() {
    const { children } = this.props;
    return (
      <TasksContext.Provider value={{ ...this.state }}>
        {children}
      </TasksContext.Provider>
    );
  }
}

const TasksConsumer = TasksContext.Consumer;

export function contextTasksWrapper(WrappedComponent) {
  return function Wrapper(props) {
    return (
      <TasksConsumer>
        {(context) => <WrappedComponent {...props} {...context} />}
      </TasksConsumer>
    );
  };
}
