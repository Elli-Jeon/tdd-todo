import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('app renders', () => {
  const { getByText } = render(<App></App>);
  const app = getByText('app');

  expect(app).toBeInTheDocument();
});
