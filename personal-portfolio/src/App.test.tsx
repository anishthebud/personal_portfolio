import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HomeCard titles', () => {
  render(<App />);
  expect(screen.getByText(/About Me/i)).toBeInTheDocument();
  expect(screen.getByText(/Resume and Cover Letter/i)).toBeInTheDocument();
});
