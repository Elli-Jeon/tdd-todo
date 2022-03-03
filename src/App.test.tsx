import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('app renders', () => {
  it('list', () => {
    const { getByText } = render(<App></App>);
  });
});
