import React from 'react';

export default function CharacterCard({ name, species, status, origin }) {
  return (
    <article>
      <h3>{name}</h3>
      <p>Species: {species}</p>
      <p>Current Status: {status}</p>
      <p>Home planet: {origin.name}</p>
    </article>
  );
}
