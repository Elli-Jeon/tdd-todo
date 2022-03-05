import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('app renders', () => {
  it('list', () => {
    const { getByText } = render(<App></App>);
    const appName = getByText('TDD로 todo 만들기');
    expect(appName).toBeInTheDocument();
  });
});
