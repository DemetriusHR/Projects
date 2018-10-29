import React from 'react';

import TasksWrapper from './Tasks.Style';
import Todo from './Todo';
import NavBar from '../../Components/NavBar';
import { TasksCreate, TasksComplete } from '../../Utils/tasksFunction';
import { contextTasksWrapper } from '../../Context/tasks';

function textDrop(items, idProfileTasks) {
  return (
    <span style={{ lineHeight: '1.6' }}>
      <span>
        {'Create: '}
        {TasksCreate(items, idProfileTasks)}
      </span>
      <br />
      <span>
        {'Complete: '}
        {TasksComplete(items, idProfileTasks)}
      </span>
    </span>
  );
}

const Tasks = ({ items, idProfileTasks }) => (
  <TasksWrapper className="text-color">
    <NavBar
      to="/"
      text="Tasks"
      enable="enable"
      textDropDown={textDrop(items, idProfileTasks)}
    />
    <Todo />
  </TasksWrapper>
);
export default contextTasksWrapper(Tasks);
