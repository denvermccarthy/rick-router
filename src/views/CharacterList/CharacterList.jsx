import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from '../../components/Card/CharacterCard';
import { fetchCharacters } from '../../services/rick';

export default function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const { results } = await fetchCharacters();
      setCharacters(results);
      setLoading(false);
    };
    fetch();
  }, []);
  return loading ? (
    <div>Loading Characters...</div>
  ) : (
    characters.map((char) => (
      <Link key={char.id} to={`/character/${char.id}`}>
        <CharacterCard {...char} />
      </Link>
    ))
  );
}
