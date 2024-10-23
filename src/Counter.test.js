import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import Counter from './Counter';

test('exibe o contador inicial com valor 0', () => {
  render(<Counter />);
  const counterElement = screen.getByText(/contador: 0/i);
  expect(counterElement).toBeInTheDocument();
});

test('incrementa o contador quando o botão incrementar é clicado', () => {
  render(<Counter />);
  const incrementButton = screen.getByText(/incrementar/i);
  act(() => {
    fireEvent.click(incrementButton);
  });
  const counterElement = screen.getByText(/contador: 1/i);
  expect(counterElement).toBeInTheDocument();
});

test('decrementa o contador quando o botão decrementar é clicado', () => {
  render(<Counter />);
  const decrementButton = screen.getByText(/decrementar/i);
  act(() => {
    fireEvent.click(decrementButton);
  });
  const counterElement = screen.getByText(/contador: -1/i);
  expect(counterElement).toBeInTheDocument();
});
