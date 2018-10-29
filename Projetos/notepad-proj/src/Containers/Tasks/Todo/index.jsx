import React from 'react';

import TodoWrapper from './Todo.Style';

import Header from './Header';
import List from '../List';

const Todo = () => (
  <TodoWrapper>
    <Header />
    <List />
  </TodoWrapper>
);

export default Todo;
