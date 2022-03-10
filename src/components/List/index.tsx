import React from 'react';
import { ITask } from 'types';

interface IProps {
  tasks: ITask[];
}

// test

const List = ({ tasks }: IProps) => {
  return (
    <div>
      {tasks.map((todo) => (
        <div key={todo.id}>{todo.todo}</div>
      ))}
    </div>
  );
};

export default List;
