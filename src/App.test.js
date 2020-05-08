import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';

test('renders main homepage header', () => {
  const { getByText } = render(<App />);
  const mainHeader = getByText("Unexpected Home Learning");
  expect(mainHeader).toBeInTheDocument();
});
