import React, { useState } from "react";
import "./styles.css";
import { FiShoppingCart, FiDelete } from "react-icons/fi";
import IPokemon from "../../interfaces/IPokemon";

interface SelectedPokemon {
  id: number;
  name: string;
  price: number;
}

interface NewItem {
  name: string;
  price: number;
}

interface ItemsProps {
  items: Array<IPokemon>;
  onClick: any;
}

// const handleItemsInMyShopCar = (item: NewItem) => {
//   const newItem = item;
//   console.log(newItem);
// };

const ShopCar: React.SFC<ItemsProps> = ({ items, onClick }) => {
  return (
    <div className="shop-car">
      <header className="shop-car-title">
        <h2>PokeCar</h2>
        <FiShoppingCart size="35px" />
      </header>

      <div className="table">
        <table className="pokecar-items">
          <thead>
            {items.length > 0 && (
              <tr>
                <th>#ID</th>
                <th>Pokemon</th>
                <th>Preço</th>
                <th>Excluir</th>
              </tr>
            )}
          </thead>

          <tbody>
            {items.map((item: IPokemon, index: number) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <a
                      href="#"
                      style={{ backgroundColor: "transparent" }}
                      onClick={() => {
                        onClick(item, "-");
                      }}
                    >
                      <FiDelete />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <footer className="shop-car-footer">
        <h2>Total:</h2>
        <h2>
          {items
            .reduce((acc, cur) => {
              return (acc += cur.price);
            }, 0)
            .toFixed(2)}
        </h2>
      </footer>
    </div>
  );
};

export default ShopCar;
