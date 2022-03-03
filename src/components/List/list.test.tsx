import React from 'react';
import { render } from '@testing-library/react';
import List from './';

describe('list', () => {
  it('list 2개', () => {
    const { getByText } = render(<List></List>);
    const test1 = getByText('TDD 공부하기');
    const test2 = getByText('voice 구현하기');

    expect(test1).toBeInTheDocument();
    expect(test2).toBeInTheDocument();
  });
});
