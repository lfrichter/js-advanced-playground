export function runMap2Examples() {
  console.log("--- Exemplos Map 2 ---");

  const car = [
    '{"name": "Borracha", "price": 3.45}',
    '{"name": "Caderno", "price": 13.99}',
    '{"name": "Kit de Lapis", "price": 41.2}',
    '{"name": "Caneta", "price": 7.50}',
  ];

  // Retornar um array apenas com os preços
  const forData = car.map(function(e) {
    return JSON.parse(e).price;
  });
  console.log("Preços dos produtos:", forData);

  const toObject = json => JSON.parse(json);
  const prices = product => product.price;

  const result = car.map(toObject).map(prices);
  console.log("Preços dos produtos (usando funções):", result);


  console.log("\n------------------------------------\n");
}
