import { MemoryRouter } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
import {
  screen,
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import App from '../../App';

describe('Details Page', () => {
  it('should render character details', async () => {
    render(
      <MemoryRouter initialEntries={['/character/1']}>
        <App />
      </MemoryRouter>
    );
    const loading = screen.getByText('loading character...');
    await waitForElementToBeRemoved(loading);
    const rickHeader = await screen.findByRole('heading', {
      level: 2,
      name: 'Rick Sanchez',
    });
    const image = screen.getAllByAltText('An Image of Rick Sanchez');
  });
});
