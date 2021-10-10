import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';

test('renders help hints properly', () => {
  render(<App />);
  const linkElement = screen.getByText('Please select from the options below and refer to the one above for illustration/usage');
  expect(linkElement).toBeInTheDocument();
});

test('renders button for get tweet input text area', () => {
  render(<App />);
  const linkElement = screen.getByText('GET Tweet');
  expect(linkElement).toBeInTheDocument();
});

test('renders button for delete tweet input text area', () => {
  render(<App />);
  const linkElement = screen.getByText('DELETE Tweet');
  expect(linkElement).toBeInTheDocument();
});

test('renders all the components correctly', () => {
  const tree = renderer.create(
      <App/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});