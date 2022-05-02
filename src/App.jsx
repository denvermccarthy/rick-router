import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import CharacterDetail from './views/CharacterDetail/CharacterDetail';
import CharacterList from './views/CharacterList/CharacterList';

export default function App() {
  const history = useHistory();
  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <p onClick={() => history.push('/')}>Home</p>
      <Switch>
        <Route path={'/character/:id'}>
          <CharacterDetail />
        </Route>
        <Route path={'/'}>
          <CharacterList />
        </Route>
      </Switch>
    </>
  );
}
