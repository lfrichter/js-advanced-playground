export function runMapExamples() {
  console.log("--- Exemplos Estratégicos de Map ---");

  // `Map` é uma coleção de pares chave-valor que, ao contrário de Objetos,
  // pode usar qualquer tipo de valor como chave e mantém a ordem de inserção.
  // url para testar: https://playcode.io/2439976

  // =================================================================
  // 1. Usando objetos como chaves
  // =================================================================
  console.log("\n1. Mapeando dados com objetos como chave:");
  // Isso é impossível com objetos normais, que converteriam a chave para a string "[object Object]".
  const userMetadata = new Map();
  const user1 = { id: 1, name: "Ana" };
  const user2 = { id: 2, name: "Carlos" };

  userMetadata.set(user1, { lastLogin: '2023-10-27', role: 'admin' });
  userMetadata.set(user2, { lastLogin: '2023-10-26', role: 'user' });

  console.log("Map com chaves de objeto:", userMetadata);
  console.log("Metadados do user1:", userMetadata.get(user1));

  // =================================================================
  // 2. Contando frequência de itens com `reduce` e `Map`
  // =================================================================
  console.log("\n2. Contando frequência de palavras:");
  const palavras = ['maçã', 'banana', 'laranja', 'maçã', 'banana', 'maçã'];

  const frequencia = palavras.reduce((map, palavra) => {
    // `map.get(palavra) || 0` retorna a contagem atual ou 0 se a palavra ainda não existe.
    map.set(palavra, (map.get(palavra) || 0) + 1);
    return map;
  }, new Map()); // O valor inicial do reduce é um novo Map.

  console.log("Frequência de palavras:", frequencia);
  // Resultado esperado: Map(3) { 'maçã' => 3, 'banana' => 2, 'laranja' => 1 }

  // =================================================================
  // 3. Iteração e métodos utilitários
  // =================================================================
  console.log("\n3. Iterando sobre um Map:");

  // Map mantém a ordem de inserção, o que é uma grande vantagem.
  console.log("Usando for...of:");
  for (const [key, value] of frequencia) {
    console.log(`  - Chave: ${key}, Valor: ${value}`);
  }

  console.log("\nUsando forEach:");
  frequencia.forEach((value, key) => {
    console.log(`  - A palavra "${key}" aparece ${value} vez(es).`);
  });

  console.log("\nVerificando existência com .has():");
  console.log("  O mapa tem 'banana'?", frequencia.has('banana')); // true
  console.log("  O mapa tem 'uva'?", frequencia.has('uva'));     // false

  console.log("\nObtendo apenas chaves ou valores:");
  console.log("  Chaves:", [...frequencia.keys()]);   // ['maçã', 'banana', 'laranja']
  console.log("  Valores:", [...frequencia.values()]); // [3, 2, 1]

  // =================================================================
  // 4. Conversão entre Map e Objeto
  // =================================================================
  console.log("\n4. Convertendo Map <=> Objeto:");

  // Map para Objeto (só funciona se as chaves forem strings ou symbols)
  const mapParaObjeto = Object.fromEntries(frequencia);
  console.log("  Map convertido para Objeto:", mapParaObjeto);

  // Objeto para Map
  const objetoParaConverter = {
    configA: true,
    configB: 123,
    configC: 'ativo'
  };
  const objetoParaMap = new Map(Object.entries(objetoParaConverter));
  console.log("  Objeto convertido para Map:", objetoParaMap);

  console.log("\n------------------------------------\n");
}
