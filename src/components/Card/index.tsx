import React, { useState, useEffect } from "react";
import "./styles.css";
import api from "../../services/api";
import pokeball from "../../assets/pokeball.png";
import { FiArrowRight } from "react-icons/fi";

import IPokemon from "../../interfaces/IPokemon";

interface Pokemon {
  pokemon: IPokemon;
  onClick: any;
}

const Card: React.SFC<Pokemon> = ({ pokemon, onClick }) => {
  const { name, url } = pokemon;

  const [image, setImage] = useState("");
  const [curPokemon, setCurPokemon] = useState(pokemon);

  useEffect(() => {
    const getImage = async () => {
      const pokemon = await api.get(url);
      let pokeImage = pokemon.data.sprites.front_default;
      if (!pokeImage) {
        pokeImage = pokeball;
      }

      setImage(pokeImage);
    };

    getImage();
  }, []);

  const handleClick = () => {
    if (!pokemon.selected) {
      onClick(curPokemon, "+");
      console.log(curPokemon);
    } else {
      onClick(curPokemon, "-");
      console.log(curPokemon);
    }
  };

  return (
    <div
      className="card"
      style={curPokemon.type === "fire" ? styles.fireStyle : styles.watterStyle}
    >
      <div className="details">
        <img
          style={image === pokeball ? { width: "80px" } : { width: "100px" }}
          className="img-pokemon"
          src={image}
          alt={curPokemon.name}
        />
        <p>{name}</p>
        <strong className="value">R$ {curPokemon.price.toFixed(2)}</strong>
      </div>

      <div className="buy">
        <a onClick={handleClick}>
          {!pokemon.selected ? "COMPRAR" : "REMOVER DA CESTINHA"}
        </a>
      </div>
    </div>
  );
};

export default Card;

const styles = {
  fireStyle: {
    background: "linear-gradient(to right, #870000, #190a05)",
    color: "#fff",
  },
  watterStyle: {
    background: "linear-gradient(to right, #00d2ff, #3a7bd5)",
    color: "#fff",
  },
};
