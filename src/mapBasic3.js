export function runMap3Examples() {
  console.log("--- Exemplos Map 3 ---");

  // Exemplo de uso do método map com uma função personalizada
  Array.prototype.map2 = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this));
    }
    return newArray;
  }

  const car = [
    '{"name": "Borracha", "price": 3.45}',
    '{"name": "Caderno", "price": 13.99}',
    '{"name": "Kit de Lapis", "price": 41.2}',
    '{"name": "Caneta", "price": 7.50}',
  ];

  const toObject = json => JSON.parse(json);
  const prices = product => product.price;

  const result = car.map2(toObject).map2(prices);
  console.log("Preços dos produtos (usando funções):", result);


  console.log("\n------------------------------------\n");
}
