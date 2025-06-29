export function runReduceExamples() {
  console.log("--- Exemplos Avançados de Array.reduce ---");

  // O `reduce` executa uma função "redutora" para cada elemento do array,
  // resultando em um único valor de retorno.
  // Sintaxe: arr.reduce((acumulador, valorAtual, indice, array) => { ... }, valorInicial);

  // =================================================================
  // 1. Agrupando itens por uma propriedade (ex: por idade)
  // =================================================================
  console.log("\n1. Agrupando pessoas por idade:");
  const pessoas = [
    { nome: 'Ana', idade: 30 },
    { nome: 'João', idade: 20 },
    { nome: 'Carlos', idade: 30 },
    { nome: 'Beatriz', idade: 20 },
  ];

  const agrupadoPorIdade = pessoas.reduce((acc, pessoa) => {
    const key = pessoa.idade;
    // Se a chave (idade) ainda não existe no acumulador, inicializa com um array vazio.
    // A sintaxe `|| []` é um atalho para `if (!acc[key]) { acc[key] = [] }`
    acc[key] = acc[key] || [];
    // Adiciona o nome da pessoa ao array correspondente à sua idade.
    acc[key].push(pessoa.nome);
    return acc; // Sempre retorne o acumulador!
  }, {}); // O valor inicial é um objeto vazio, que será nosso acumulador.

  console.log(agrupadoPorIdade);
  // Resultado esperado: { '20': ['João', 'Beatriz'], '30': ['Ana', 'Carlos'] }

  // =================================================================
  // 2. Convertendo um array em um objeto indexado por ID
  // =================================================================
  console.log("\n2. Indexando produtos por ID:");
  const produtos = [
    { id: 'p1', nome: 'Caneta', preco: 2.50 },
    { id: 'p2', nome: 'Caderno', preco: 15.00 },
    { id: 'p3', nome: 'Borracha', preco: 1.75 },
  ];

  const produtosIndexados = produtos.reduce((acc, produto) => {
    // Usa o ID do produto como chave e o objeto inteiro como valor.
    acc[produto.id] = produto;
    return acc;
  }, {});

  console.log(produtosIndexados);
  // Resultado: { p1: { id: 'p1', ... }, p2: { id: 'p2', ... }, p3: { id: 'p3', ... } }
  console.log("Acessando produto 'p2':", produtosIndexados.p2);

  // =================================================================
  // 3. Composição de funções com `reduceRight`
  // =================================================================
  console.log("\n3. Compondo funções (compose):");

  const toUpperCase = str => str.toUpperCase();
  const addExclamation = str => `${str}!`;
  const reverse = str => str.split('').reverse().join('');

  // `reduceRight` funciona como o reduce, mas itera do final para o começo do array.
  // Isso é perfeito para composição, pois f(g(h(x))) aplica h, depois g, depois f.
  const compose = (...fns) => initialValue =>
    fns.reduceRight((accValue, fn) => fn(accValue), initialValue);

  // A ordem é importante: reverse -> toUpperCase -> addExclamation
  const gritarAoContrario = compose(addExclamation, toUpperCase, reverse);
  const resultadoComposicao = gritarAoContrario('javascript');

  console.log(`Resultado de compose(addExclamation, toUpperCase, reverse) com "javascript":`);
  console.log(resultadoComposicao); // Resultado esperado: "TPIRCSAVAJ!"

  // =================================================================
  // 4. Calculando múltiplas estatísticas de uma vez
  // =================================================================
  console.log("\n4. Calculando estatísticas de um array de notas:");
  const notas = [8.5, 9.0, 7.2, 6.5, 8.8, 10.0];

  const estatisticas = notas.reduce((stats, nota) => {
    stats.soma += nota;
    stats.maior = Math.max(stats.maior, nota);
    stats.menor = Math.min(stats.menor, nota);
    return stats;
  }, {
    soma: 0,
    maior: -Infinity, // Inicia com o menor valor possível
    menor: Infinity,  // Inicia com o maior valor possível
    contagem: notas.length // Podemos calcular a média depois
  });

  // Adicionamos a média após o reduce para evitar recálculos a cada iteração
  estatisticas.media = estatisticas.soma / estatisticas.contagem;

  // Arredondando para melhor visualização
  estatisticas.soma = parseFloat(estatisticas.soma.toFixed(2));
  estatisticas.media = parseFloat(estatisticas.media.toFixed(2));

  console.log(estatisticas);
  // Resultado esperado: { soma: 50, maior: 10, menor: 6.5, contagem: 6, media: 8.33 }

  console.log("\n------------------------------------------\n");
}
