export function runSymbolExamples() {
  console.log("--- Exemplos de Symbol ---");

  // 1. Criando Symbols
  // Symbols são sempre únicos, mesmo com a mesma descrição.
  const sym1 = Symbol('id');
  const sym2 = Symbol('id');
  console.log('sym1 === sym2:', sym1 === sym2); // false
  console.log('Descrição de sym1:', sym1.description);

  // 2. Usando Symbols como chaves de propriedade de objeto
  // Isso evita colisões de nomes de propriedades.
  const userID = Symbol('userID');
  const user = {
    name: 'Alice',
    [userID]: 'xyz-123'
  };

  console.log('Objeto user:', user);
  console.log('Acessando a propriedade com Symbol:', user[userID]);

  // Propriedades de Symbol não são enumeradas em for...in ou Object.keys
  console.log('Object.keys(user):', Object.keys(user)); // ['name']
  for (const key in user) {
    console.log(`Chave no for...in: ${key}`); // Apenas 'name'
  }

  // Para obter as propriedades de Symbol, use Object.getOwnPropertySymbols
  const symbolKeys = Object.getOwnPropertySymbols(user);
  console.log('Object.getOwnPropertySymbols(user):', symbolKeys);
  console.log('Valor da chave Symbol:', user[symbolKeys[0]]);

  console.log("--------------------------\n");
}
