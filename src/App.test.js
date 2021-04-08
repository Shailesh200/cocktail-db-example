import React from 'react';
import { render } from '@testing-library/react';
import { App } from './components/App/App';

it('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("My Cocktail Cellar");
  expect(linkElement).toBeInTheDocument();
});
