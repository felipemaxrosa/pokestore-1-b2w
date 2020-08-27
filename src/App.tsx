import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import GroupCards from "./components/GroupCards";
import ShopCar from "./components/ShopCar";
import api from "./services/api";

import IPokemon from "./interfaces/IPokemon";

import "./App.css";
import getRandomPrice from "./utils/randomPrice";

interface SelectedPokemon {
  id: number;
  name: string;
  price: number;
  type: string;
}

function App() {
  const [pokemon, setPokemon] = useState<IPokemon[]>([]);
  const [pokemonWatter, setPokemonWatter] = useState<IPokemon[]>([]);
  const [pokeCar, setPokeCar] = useState<IPokemon[]>([]);

  useEffect(() => {
    const getPokemon = async () => {
      const resFirePokemon = await api.get("type/fire");
      const resWaterPokemon = await api.get("type/water");

      const firePokemon = resFirePokemon.data.pokemon.map(
        (poke: any, index: number): IPokemon => {
          const arrayPokemon = poke.pokemon.url.split("/");
          const price = parseFloat(getRandomPrice().toFixed(2));

          return {
            id: arrayPokemon[6],
            name: poke.pokemon.name.toUpperCase(),
            url: poke.pokemon.url,
            image_url: "",
            type: "fire",
            price,
          };
        }
      );

      const waterPokemon = resWaterPokemon.data.pokemon.map(
        (poke: any, index: number): IPokemon => {
          const arrayPokemon = poke.pokemon.url.split("/");
          const price = parseFloat(getRandomPrice().toFixed(2));
          return {
            id: arrayPokemon[6],
            name: poke.pokemon.name.toUpperCase(),
            url: poke.pokemon.url,
            image_url: "",
            type: "watter",
            price,
          };
        }
      );

      const allPokemon = [...firePokemon, ...waterPokemon];

      setPokemon(allPokemon);
    };

    getPokemon();
  }, []);

  const handlePokeCar = (poke: IPokemon, type: string) => {
    if (type === "+") {
      const newPokeCar = [...pokeCar, poke];
      setPokeCar(newPokeCar);
    }
  };

  return (
    <div>
      <Header />
      <div className="group">
        <GroupCards data={pokemon} onClick={handlePokeCar} />
        <ShopCar items={pokeCar} />
      </div>
    </div>
  );
}

export default App;
