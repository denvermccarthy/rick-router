import {
  getByRole,
  render,
  screen,
  waitForElementToBeRemoved,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import App from './App';

describe('App is rendering and links are working properly', () => {
  it('should render a list of characters, users should be able to filter by alive or dead by clicking one of the options', async () => {
    render(
      <Router>
        <App />
      </Router>
    );
    // renders a list of links in the header
    const navLinks = screen.getByRole('list');
    // grab alive link for testing
    const deadLink = screen.getByText('Dead Characters');

    // check for loading state
    const loading = screen.getByText('Loading Characters...');
    await waitForElementToBeRemoved(loading);

    // check for Rick Sanchez
    const rick = screen.getByText('Rick Sanchez');
    //check for ability to filter by dead
    fireEvent.click(deadLink);

    await waitForElementToBeRemoved(rick);
  });
  it('should render a list of characters, users can click on a details page', async () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const loading = screen.getByText('Loading Characters...');
    await waitForElementToBeRemoved(loading);
    const rick = screen.getByText('Rick Sanchez');
    fireEvent.click(rick);
    await waitForElementToBeRemoved(screen.getByText('loading character...'));
    screen.getByAltText('An Image of Rick Sanchez');
  });
});
