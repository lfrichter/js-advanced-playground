export function runCallbackExamples() {
  console.log("--- Exemplos de Callbacks ---");

  // 1. Callback com manipulação de dados
  const manufactoresData = ['Mercedes', 'BMW', 'Audi', 'Volkswagen'];

  function print(name, index) {
    console.log(`Fabricante ${index + 1}: ${name}`);
  }

  manufactoresData.forEach(print);
  manufactoresData.forEach((manufactor) => console.log(manufactor));
}

