import React, { useContext } from 'react';

import ListWrapper from './List.Style';

import { TasksContext } from '../../../Context/tasks';
import { ProfileContext } from '../../../Context/profile';

const List = () => {
  const { items, actionsTasks } = useContext(TasksContext);
  const { profiles } = useContext(ProfileContext);
  return (
    <ListWrapper className="scroll-styled">
      <ul>
        {items.map((item) => (
          // eslint-disable-next-line
          <li key={item.key} onClick={() => actionsTasks.onClickTask(item)}>
            <div
              className="container"
              style={{
                background: `${item.doComplete ? '#d0f7d0' : ''}`,
                color: `${item.doComplete ? 'green' : ''}`
              }}
            >
              <div
                style={{
                  textDecoration: `${item.doComplete ? 'line-through' : ''}`
                }}
                className="task-styled"
              >
                {item.task}
                <span
                  className="fa fa-check"
                  style={{
                    visibility: `${item.doComplete ? '' : 'hidden'}`
                  }}
                />
              </div>
              <span className="considerations">
                {`Created by: @ ${profiles[item.profileCreate].nickname}`}
                <span
                  className="complete"
                  style={{
                    visibility: `${item.doComplete ? '' : 'hidden'}`
                  }}
                >
                  {`Complete by: @ ${profiles[item.profileComplete].nickname}`}
                </span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </ListWrapper>
  );
};

export default List;
