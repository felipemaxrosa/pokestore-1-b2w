import React, { useState, useEffect } from "react";
import "./styles.css";
import api from "../../services/api";
import pokeball from "../../assets/pokeball.png";
import { FiArrowRight } from "react-icons/fi";

interface Pokemon {
  pokemon: {
    id: number;
    name: string;
    url: string;
    image_url: string;
  };
}

const Card: React.SFC<Pokemon> = ({ pokemon }) => {
  const { name, url } = pokemon;

  const [image, setImage] = useState("");
  const [isSelected, setIsSelected] = useState(false);

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
    setIsSelected(!isSelected);
  };

  return (
    <div className="card">
      <div className="details">
        <img
          style={image === pokeball ? { width: "96px" } : {}}
          className="img-pokemon"
          src={image}
          alt="pokemon"
        />
        <p>{name}</p>
        <strong className="value">R$ 300.00</strong>
      </div>
      <a onClick={handleClick}>
        <span>{!isSelected ? "EU QUERO!" : "REMOVER DA CESTINHA"}</span>
      </a>
    </div>
  );
};

export default Card;
