import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import GroupCards from "./components/GroupCards";
import "./App.css";
import ShopCar from "./components/ShopCar";
import api from "./services/api";

interface Pokemon {
  id: number;
  name: string;
  url: string;
  image_url: string;
}

interface SelectedPokemon {
  id: number;
  name: string;
  price: number;
}

function App() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<SelectedPokemon[]>([]);

  useEffect(() => {
    const getFirePokemon = async () => {
      const firePokemon = await api.get("type/fire");

      const filteredPokemon = firePokemon.data.pokemon.map(
        (poke: any, index: number): Pokemon => {
          return {
            id: index + 1,
            name: poke.pokemon.name.toUpperCase(),
            url: poke.pokemon.url,
            image_url: "",
          };
        }
      );

      setPokemon(filteredPokemon);
    };

    getFirePokemon();
  }, []);

  return (
    <div>
      <Header />
      <div className="group">
        <GroupCards data={pokemon} />
        <ShopCar items={selectedPokemon} />
      </div>
    </div>
  );
}

export default App;
