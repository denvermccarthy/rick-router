export const fetchCharacters = async (status) => {
  const params = new URLSearchParams();
  status && params.set('status', status);
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?${params.toString()}`
  );
  const data = await response.json();
  return data;
};
