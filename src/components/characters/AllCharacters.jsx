import React, { useEffect, useState } from 'react';
import { getCharacters } from '../../services/rickAndMortyApi';
import CharacterList from './CharacterList';


const AllCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((characters) => {
      setCharacters(characters);
      setLoading(false);
    });
  }, []);

  if (loading) return <h1>Loading</h1>;
  return <CharacterList characters={characters} />;
};

export default AllCharacters;
