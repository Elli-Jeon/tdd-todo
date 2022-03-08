import React from 'react';
import { render } from 'utils/test-utils';
import App from './App';

describe('app renders', () => {
  test('list', () => {
    const { getByText } = render(<App></App>);
    const appName = getByText('TDD로 todo 만들기');
    expect(appName).toBeInTheDocument();
  });
});
