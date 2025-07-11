export function runFilterExamples() {
  console.log("--- Exemplos Filter ---");

  const products = [
    {name: 'Notebook', price: 2499, fragile: true},
    {name: 'iPad Pro', price: 4199, fragile: true},
    {name: 'Copo de Vidro', price: 12.49, fragile: true},
    {name: 'Copo de Plástico', price: 18.99, fragile: false},
  ];

  console.log("\nProdutos caros e frágeis:");
  console.log(products.filter(function(p) {
    return p.price > 500 && p.fragile;
  }));

  const expensive = p => p.price >= 500;
  const fragile = p => p.fragile;

  console.log("\nProdutos caros e frágeis 2:");
  console.log(products.filter(expensive).filter(fragile));

  console.log("\n------------------------------------\n");
}
