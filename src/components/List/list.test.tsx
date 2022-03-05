import React from 'react';
import { render } from '@testing-library/react';
import List from './';
import { ITask } from 'types';

describe('list', () => {
  it('list 2개', () => {
    const tasks: ITask[] = [
      { id: 1, todo: 'TDD 공부하기' },
      { id: 2, todo: 'voice 구현하기' },
    ];

    const { getByText } = render(<List tasks={tasks}></List>);
    const test1 = getByText('TDD 공부하기');
    const test2 = getByText('voice 구현하기');

    expect(test1).toBeInTheDocument();
    expect(test2).toBeInTheDocument();
  });
});
