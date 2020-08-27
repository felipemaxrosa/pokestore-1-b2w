import React, { useState, MouseEvent } from "react";
import Card from "../Card";
import "./styles.css";
import logo from "../../assets/logo.png";
import IPokemon from "../../interfaces/IPokemon";

interface GroupCardsProps {
  data: Array<IPokemon>;
  onClick: any;
}

// const pokemonTest: Array<IPokemon> = [
//   {
//     id: 1,
//     name: "Charmander",
//     url: "url",
//     image_url: "image",
//     type: "fire",
//   },
//   {
//     id: 2,
//     name: "Charmeleon",
//     url: "url",
//     image_url: "image",
//     type: "fire",
//   },
//   {
//     id: 3,
//     name: "Charizard",
//     url: "url",
//     image_url: "image",
//     type: "fire",
//   },
//   {
//     id: 4,
//     name: "Outro de fogo",
//     url: "url",
//     image_url: "image",
//     type: "fire",
//   },
//   {
//     id: 5,
//     name: "Squirtle",
//     url: "url",
//     image_url: "image",
//     type: "watter",
//   },
//   {
//     id: 6,
//     name: "Wartortle",
//     url: "url",
//     image_url: "image",
//     type: "watter",
//   },
//   {
//     id: 7,
//     name: "Blastoise",
//     url: "url",
//     image_url: "image",
//     type: "watter",
//   },
//   {
//     id: 8,
//     name: "Vuplix",
//     url: "url",
//     image_url: "image",
//     type: "fire",
//   },
//   {
//     id: 9,
//     name: "Ninetales",
//     url: "url",
//     image_url: "image",
//     type: "fire",
//   },
//   {
//     id: 10,
//     name: "Starmie",
//     url: "url",
//     image_url: "image",
//     type: "watter",
//   },
//   {
//     id: 11,
//     name: "Gyarados",
//     url: "url",
//     image_url: "image",
//     type: "watter",
//   },
//   {
//     id: 12,
//     name: "Lapras",
//     url: "url",
//     image_url: "image",
//     type: "watter",
//   },
//   {
//     id: 13,
//     name: "Poliwag",
//     url: "url",
//     image_url: "image",
//     type: "watter",
//   },
//   {
//     id: 14,
//     name: "Staryu",
//     url: "url",
//     image_url: "image",
//     type: "watter",
//   },
//   {
//     id: 15,
//     name: "Froakie",
//     url: "url",
//     image_url: "image",
//     type: "watter",
//   },
//   {
//     id: 16,
//     name: "Rapidash",
//     url: "url",
//     image_url: "image",
//     type: "fire",
//   },
// ];

const GroupCards: React.SFC<GroupCardsProps> = ({ data, onClick }) => {
  const sortPokemon = data.sort((a, b) => (a.name < b.name ? -1 : 1));

  return (
    <div id="group-cards">
      {sortPokemon.map((pokemon) => {
        return <Card key={pokemon.id} pokemon={pokemon} onClick={onClick} />;
      })}
    </div>
  );
};

export default GroupCards;
