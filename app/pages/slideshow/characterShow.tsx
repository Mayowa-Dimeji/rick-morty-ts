import Card from "./card";

import { useState, useEffect, use } from "react";

const CharacterShow = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );

        // Check if the response is successful
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json(); // Parse the response as JSON
        setCharacters(data.results); // Set the characters in state
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <section className="flex flex-col  gap-5 p-8 ">
      <h1 className="text-2xl">Meet the characters</h1>

      <section className="flex gap-4 overflow-x-auto  p-8">
        {characters.map((character: any) => (
          <Card
            className="flex-1 min-w-[200px] max-w-xs"
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
