export function runMap1Examples() {
  console.log("--- Exemplos Map 1 ---");
  const numbers = [1, 2, 3, 4, 5];

  let result = numbers.map(function(num) {
    return num * 2;
  });
  console.log(result);

  let result2 = numbers.map(num => num * 2);
  console.log(result2);

  console.log("\n------------------------------------\n");

  const sum10 = e => e + 10;
  const triple = e => e * 3;
  const toMoney = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

  result = numbers
    .map(sum10)
    .map(triple)
    .map(toMoney);
  console.log(result);

  console.log("\n------------------------------------\n");

}
