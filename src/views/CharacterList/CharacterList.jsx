import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import CharacterCard from '../../components/Card/CharacterCard';
import { fetchCharacters } from '../../services/rick';
import CharacterDetail from '../CharacterDetail/CharacterDetail';

export default function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const { path, url } = useRouteMatch();
  const { search } = useLocation();
  const statusParams = new URLSearchParams(search).get('status');

  useEffect(() => {
    const fetch = async () => {
      const { results } = await fetchCharacters(statusParams);
      setCharacters(results);
      setLoading(false);
    };
    fetch();
  }, [statusParams]);
  return loading ? (
    <div>Loading Characters...</div>
  ) : (
    <>
      {statusParams && <h2>{`List of ${statusParams} Characters`}</h2>}
      {characters.map((char) => (
        <Link key={char.id} to={`${url}/${char.id}`}>
          <CharacterCard {...char} />
        </Link>
      ))}
      <Route path={`${path}/:id`}>
        <CharacterDetail characters={characters} />
      </Route>
    </>
  );
}
