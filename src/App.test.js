import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('exibe o contador inicial com valor 0', () => {
  render(<App />);
  const counterElement = screen.getByText(/contador: 0/i);
  expect(counterElement).toBeInTheDocument();
});
