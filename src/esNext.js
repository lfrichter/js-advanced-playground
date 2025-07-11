export function runEsNextExamples() {
  console.log("--- Exemplos ES Next Examples ---");
  // 1. let, const
  {
    var a = 2
    let b = 3
  }
  console.log('1) let, const\n--------------------------');
  console.log('var a:', a); // 2
  console.log('var b: ReferenceError: b is not defined'); // 2
  // console.log(b); // ReferenceError: b is not defined

  // 2. Template string
  const product = 'iPhone';
  console.log('\n2) Template string\n--------------------------');
  console.log(`O produto é: ${product}`); // O produto é: iPhone


  // 3. Destructuring

  // a. String destructuring
  const [l, e, ...tras] = "Cod3r"
  console.log('\n3) Destructuring\n--------------------------');
  console.log('a. String destructuring: ', l, e, tras);

  // b. Array destructuring
  const  [x,, y] = [1, 2, 3]
  console.log('b. Array destructuring: ', x, y)

  // c. Object destructuring with default values
  const {age, name} = {name: 'Ana', age: 25}
  console.log('c. Object destructuring with default values: ', name, age);

  // d. Object destructuring with renaming
  const {name: nomeCompleto} = {name: 'John Doe', age: 30};
  console.log('d. Object destructuring with renaming: ', nomeCompleto);

  console.log("\n------------------------------------\n");
}
