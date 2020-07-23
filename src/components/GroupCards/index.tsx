import React, { useState } from "react";
import Card from "../Card";
import "./styles.css";

interface Pokemon {
  id: number;
  name: string;
  url: string;
  image_url: string;
}

interface GroupCardsProps {
  data: Pokemon[];
}

const GroupCards: React.SFC<GroupCardsProps> = ({ data }) => {
  return (
    <div id="group-cards">
      {data.map((poke: Pokemon) => {
        return <Card key={poke.id} pokemon={poke} />;
      })}
    </div>
  );
};

export default GroupCards;
