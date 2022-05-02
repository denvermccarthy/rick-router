import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CharacterCard from '../../components/Card/CharacterCard';
import { fetchCharacters } from '../../services/rick';

export default function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const { search } = useLocation();
  const statusParams = new URLSearchParams(search).get('status');

  useEffect(() => {
    const fetch = async () => {
      const { results } = await fetchCharacters(statusParams);
      setCharacters(results);
      setLoading(false);
    };
    fetch();
  }, [search]);
  return loading ? (
    <div>Loading Characters...</div>
  ) : (
    <>
      {statusParams && <h2>{`List of ${statusParams} Characters`}</h2>}
      {characters.map((char) => (
        <Link key={char.id} to={`/character/${char.id}`}>
          <CharacterCard {...char} />
        </Link>
      ))}
    </>
  );
}
