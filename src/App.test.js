import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders learn react link', () => {
    // Check if the text is present within the component using a different strategy
    const linkElement = screen.getByText('Learn React', { exact: false });
    expect(linkElement).toBeInTheDocument();
  });
});
