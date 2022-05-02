import { useEffect, useState } from 'react';
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
  return <div>CharacterList</div>;
}
