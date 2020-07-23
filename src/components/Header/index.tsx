import React from "react";
import "./styles.css";
import logo from "../../assets/pokeball.png";

const Header = () => {
  return (
    <div>
      <h1 className="title">PokeStore - Fire</h1>
      <div className="header">
        <img id="logo" src={logo} alt="pokestore" />
        <input type="text" placeholder="Qual pokemon voce procura?" />
        <h4>Seja bem-vindo treinador!</h4>
      </div>
    </div>
  );
};

export default Header;
