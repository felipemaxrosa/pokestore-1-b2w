import React from "react";
import "./styles.css";
import logo from "../../assets/pokeball.png";
import { FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <div>
      <h1 className="title">PokeStore - Fire / Water</h1>
      <div className="header">
        <img id="logo" src={logo} alt="pokestore" />
        <input type="text" placeholder="Qual pokemon voce procura?" />
        <h3>
          Seja Bem-vindo Treinador! <FiUser size={35} />
        </h3>
      </div>
    </div>
  );
};

export default Header;
