const getRandomPrice = function (): number {
  const price = Math.random() * (300 - 100) + 1;
  return price;
};

export default getRandomPrice;
