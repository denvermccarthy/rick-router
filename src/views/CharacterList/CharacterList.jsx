import { useEffect, useState } from 'react';
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
    characters.map((char) => <CharacterCard key={char.id} {...char} />)
  );
}
