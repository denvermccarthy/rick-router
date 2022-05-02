import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import CharacterDetail from './views/CharacterDetail/CharacterDetail';
import CharacterList from './views/CharacterList/CharacterList';

export default function App() {
  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <Switch>
        <Route path={'/'}>
          <CharacterList />
        </Route>
        <Route path={'/character/:id'}>
          <CharacterDetail />
        </Route>
      </Switch>
    </>
  );
}
