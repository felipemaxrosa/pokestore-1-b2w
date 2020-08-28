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
  onOpen: any;
}

const ShopCar: React.SFC<ItemsProps> = ({ items, onClick, onOpen }) => {
  //const sortPokemon = items.sort((a, b) => (a.name < b.name ? -1 : 1));

  const handleOpen = () => {
    const sum = items
      .reduce((acc, cur) => {
        return (acc += cur.price);
      }, 0)
      .toFixed(2);

    const amount = items.length;

    onOpen(sum, amount);
  };

  return (
    <div className="container">
      <div className="shop-car">
        <header className="shop-car-title">
          <h2>Pokecar</h2>
          <FiShoppingCart size="35px" />
        </header>

        <div className="scroll">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>#ID</th>
                <th>Nome do Pokemon</th>
                <th>Preço</th>
                <th>Remover</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item: IPokemon, index: number) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
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
      </div>

      <div className="pokecar-footer">
        <footer className="shop-car-footer">
          <div className="pokecar-flexrow">
            <h2>Total:</h2>
            <h2>
              {" R$ "}

              {items
                .reduce((acc, cur) => {
                  return (acc += cur.price);
                }, 0)
                .toFixed(2)}
            </h2>
          </div>
          <div>
            <button onClick={handleOpen} disabled={items.length < 1}>
              Finalizar Compra
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ShopCar;
