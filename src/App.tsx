import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import GroupCards from "./components/GroupCards";
import ShopCar from "./components/ShopCar";
import api from "./services/api";
import ModalCheckout from "./components/ModalCheckout";

import IPokemon from "./interfaces/IPokemon";

import "./App.css";
import getRandomPrice from "./utils/randomPrice";

function App() {
  const [pokemon, setPokemon] = useState<IPokemon[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<IPokemon[]>([]);
  const [pokeCar, setPokeCar] = useState<IPokemon[]>([]);
  const [isModalCheckoutOpen, setIsModalCheckoutOpen] = useState(false);
  const [sumValues, setSumValues] = useState(0);
  const [amountItems, setAmountItems] = useState(0);

  useEffect(() => {
    const getPokemon = async () => {
      const resFirePokemon = await api.get("type/fire");
      const resWaterPokemon = await api.get("type/water");

      const firePokemon = resFirePokemon.data.pokemon.map(
        (poke: any, index: number): IPokemon => {
          //const arrayPokemon = poke.pokemon.url.split("/");
          const price = parseFloat(getRandomPrice().toFixed(2));

          return {
            id: `fire-${index + 1}`,
            name: poke.pokemon.name.toUpperCase(),
            url: poke.pokemon.url,
            image_url: "",
            type: "fire",
            price,
            selected: false,
          };
        }
      );

      const waterPokemon = resWaterPokemon.data.pokemon.map(
        (poke: any, index: number): IPokemon => {
          //const arrayPokemon = poke.pokemon.url.split("/");
          const price = parseFloat(getRandomPrice().toFixed(2));
          //id: arrayPokemon[6],
          return {
            id: `water-${index + 1}`,
            name: poke.pokemon.name.toUpperCase(),
            url: poke.pokemon.url,
            image_url: "",
            type: "water",
            price,
            selected: false,
          };
        }
      );

      const allPokemon = [...firePokemon, ...waterPokemon];

      setPokemon(allPokemon);
      setFilteredPokemon(allPokemon);
    };

    getPokemon();
  }, []);

  const handlePokeCar = (poke: IPokemon, type: string) => {
    if (type === "+") {
      const newPokeCar = [...pokeCar, poke];
      setPokeCar(newPokeCar);

      //const index = pokemon.findIndex((pokemon) => pokemon.id === poke.id);
      const index = filteredPokemon.findIndex(
        (pokemon) => pokemon.id === poke.id
      );
      //const pokemonUpdated = [...pokemon];
      const pokemonUpdated = [...filteredPokemon];
      pokemonUpdated[index].selected = true;

      //setPokemon(pokemonUpdated);
      setFilteredPokemon(pokemonUpdated);
    } else {
      const newPokeCar = pokeCar.filter((pokemon) => pokemon.id !== poke.id);
      setPokeCar(newPokeCar);

      //const index = pokemon.findIndex((pokemon) => pokemon.id === poke.id);
      const index = filteredPokemon.findIndex(
        (pokemon) => pokemon.id === poke.id
      );
      //const pokemonUpdated = [...pokemon];
      const pokemonUpdated = [...filteredPokemon];
      pokemonUpdated[index].selected = false;

      //setPokemon(pokemonUpdated);
      setFilteredPokemon(pokemonUpdated);
    }
  };

  const handleSearch = (search: string) => {
    const searchUpperCase = search.toUpperCase();
    const filtered = pokemon.filter((pokemon) => {
      return pokemon.name.includes(searchUpperCase);
    });
    setFilteredPokemon(filtered);
  };

  const handleCloseModal = () => {
    setIsModalCheckoutOpen(false);
  };

  const handleOpenModal = (sum: number, amount: number) => {
    setAmountItems(amount);
    setSumValues(sum);
    setIsModalCheckoutOpen(true);
  };

  return (
    <div>
      <Header onChangeSearch={handleSearch} />
      <div className="group">
        <GroupCards data={filteredPokemon} onClick={handlePokeCar} />
        <ShopCar
          items={pokeCar}
          onClick={handlePokeCar}
          onOpen={handleOpenModal}
        />
      </div>
      {isModalCheckoutOpen && (
        <ModalCheckout
          totalValue={sumValues}
          amountItems={amountItems}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
