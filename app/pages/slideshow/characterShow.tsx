import Card from "./card";
import axios from "axios";
import { useState, useEffect, use } from "react";

const CharacterShow = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setCharacters(response.data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);
  return (
    <section className="flex flex-col p-4 gap-4 ">
      <h1>Meet the characters</h1>

      <section className="flex gap-4 overflow-x-auto ">
        {characters.map((character: any) => (
          <Card
            key={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            species={character.species}
          />
        ))}
      </section>
    </section>
  );
};

export default CharacterShow;
