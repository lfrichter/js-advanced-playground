export function runAnonymousFunctionExamples() {
  console.log("--- Exemplos de Funções Anônimas ---");

  const sum = function(a, b) {
    return a + b;
  };

  const printResult = function(a, b, operation = sum) {
    const result = operation(a, b);
    console.log(`Resultado: ${result}`);
  }

  printResult(3, 4); // Resultado: 7
  printResult(5, 6, sum); // Resultado: 11
  printResult(10, 20, function(a, b) {
    return a * b;
  });
  printResult(2, 7, (a, b) => a * b); // Resultado: 14
  printResult(7, 8, (a, b) => a - b); // Resultado: -1

  const person ={
    speak: function() {
      console.log("Olá, eu sou uma função anônima dentro de um objeto!");
    }
  }

  person.speak();

  console.log("---------------------------\n");

}
