import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CharacterDetail({ characters = [] }) {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  const { name, status, species, location, image } = character;
  useEffect(() => {
    const getData = () => {
      const data = characters.find((char) => char.id === Number(id));
      setCharacter(data);
      setLoading(false);
    };
    getData();
  }, [id]);

  return (
    <>
      <div>CharacterDetail</div>
      {loading ? (
        <div>loading character...</div>
      ) : (
        <>
          <div>
            <h2>{name}</h2>
            <img src={image} alt={`An Image of ${name}`} />
            <p>Status: {status}</p>
            <p>Species: {species}</p>
            <p>Home Planet: {location.name}</p>
          </div>
        </>
      )}
    </>
  );
}
