import React, { useState } from "react";
import "./styles.css";
import { FiShoppingCart } from "react-icons/fi";

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
  items: SelectedPokemon[];
}

// const handleItemsInMyShopCar = (item: NewItem) => {
//   const newItem = item;
//   console.log(newItem);
// };

const ShopCar: React.SFC<ItemsProps> = ({ items }) => {
  const [myItems, setMyItems] = useState([]);
  const [sum, setSum] = useState(0);

  return (
    <div className="shop-car">
      <header className="shop-car-title">
        <h2>Carrinho</h2>
        <FiShoppingCart size="35px" />
      </header>

      <body className="shop-car-items">
        <div className="shop-car-items-item">
          <span>Item: 1</span>
          <span>Charmander</span>
          <span>R$ 0.00</span>
        </div>
      </body>

      <footer className="shop-car-footer">
        <h2>Total:</h2>
        <h2>R$ 0.00</h2>
      </footer>
    </div>
  );
};

export default ShopCar;
