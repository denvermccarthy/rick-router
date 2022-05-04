import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import CharacterDetail from './views/CharacterDetail/CharacterDetail';
import CharacterList from './views/CharacterList/CharacterList';

export default function App() {
  const history = useHistory();
  return (
    <>
      <ul>
        <Link to={'/'}>Home</Link>
        <Link to={`/status?status=alive`}>Alive Characters</Link>
        <Link to={`/status?status=dead`}>Dead Characters</Link>
      </ul>
      <Switch>
        <Route path={'/characters'}>
          <CharacterList />
        </Route>
        <Route path={'/'}>
          <Redirect to={'/characters'} />
        </Route>
      </Switch>
    </>
  );
}
