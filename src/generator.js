export function runGeneratorExamples() {
  console.log("--- Exemplos de Generator ---");

  // 1. Generator básico
  // Uma função generator (function*) pode ser pausada e resumida.
  function* simpleGenerator() {
    console.log('Generator: Antes do primeiro yield');
    yield 1;
    console.log('Generator: Antes do segundo yield');
    yield 2;
    console.log('Generator: Fim da função');
  }

  const gen = simpleGenerator();
  console.log('Chamando gen.next():', gen.next()); // { value: 1, done: false }
  console.log('Chamando gen.next():', gen.next()); // { value: 2, done: false }
  console.log('Chamando gen.next():', gen.next()); // { value: undefined, done: true }

  // 2. Generator para criar IDs infinitos
  function* idGenerator() {
    let id = 1;
    while (true) {
      yield `id-${id++}`;
    }
  }

  const idGen = idGenerator();
  console.log('\nGerando IDs únicos:');
  console.log(idGen.next().value); // id-1
  console.log(idGen.next().value); // id-2
  console.log(idGen.next().value); // id-3

  console.log("---------------------------\n");
}
