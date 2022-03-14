import { render, screen } from '@testing-library/react';
import App from './App';

test('renders param', () => {

  const location = {
    ...window.location,
    search: "openWidget=true",
  };
  Object.defineProperty(window, "location", {
    value: location,
  });

  render(<App />);
  console.warn(`window.location = `, window.location);
  const linkElement = screen.getByText(/param is true/i);
  expect(linkElement).toBeInTheDocument();
});
