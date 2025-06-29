export function runWeakMapExamples() {
  console.log("--- Exemplos Avançados de WeakMap ---");

  // `WeakMap` é similar ao `Map`, mas com três diferenças cruciais:
  // 1. As chaves DEVEM ser objetos.
  // 2. Ele mantém referências "fracas" (weak) às chaves. Isso significa que se
  //    um objeto-chave não tiver mais nenhuma outra referência no código, o
  //    coletor de lixo (Garbage Collector) pode removê-lo da memória, e a
  //    entrada correspondente no WeakMap também será removida.
  // 3. Não é iterável (não tem .forEach, .keys, etc.), para não impedir o GC.

  // =================================================================
  // 1. Criando dados privados para classes (Encapsulamento)
  // =================================================================
  console.log("\n1. Usando WeakMap para dados privados em classes:");

  const dadosPrivados = new WeakMap();

  class Pessoa {
    constructor(nome, idade) {
      // 'this' é o objeto (a instância da classe), que serve como chave.
      // O valor é um objeto contendo os dados que queremos manter privados.
      dadosPrivados.set(this, { nome, idade });
    }

    getNome() {
      // Acessamos os dados privados usando 'this' como chave.
      return dadosPrivados.get(this).nome;
    }

    apresentar() {
      const { nome, idade } = dadosPrivados.get(this);
      console.log(`  Olá, meu nome é ${nome} e tenho ${idade} anos.`);
    }
  }

  const pessoa1 = new Pessoa('Ricardo', 35);
  pessoa1.apresentar();
  console.log(`  Nome obtido via método público: ${pessoa1.getNome()}`);
  console.log("  Tentando acessar 'nome' diretamente no objeto:", pessoa1.nome); // undefined
  console.log("  Objeto pessoa1:", pessoa1); // Não mostra as propriedades privadas

  // =================================================================
  // 2. Cache de resultados sem vazamento de memória (memory leak)
  // =================================================================
  console.log("\n2. Implementando cache sem memory leaks:");

  const cache = new WeakMap();

  // Função "pesada" hipotética cujo resultado queremos cachear.
  function computacaoPesada(obj) {
    console.log("  -> EXECUTANDO COMPUTAÇÃO PESADA...");
    // Simula um processamento caro baseado nas propriedades do objeto.
    return obj.valor * 10;
  }

  function processar(obj) {
    if (cache.has(obj)) {
      console.log("  <- Retornando do CACHE.");
      return cache.get(obj);
    }

    const resultado = computacaoPesada(obj);
    cache.set(obj, resultado);
    return resultado;
  }

  let objetoDeDados = { id: 1, valor: 5 };
  console.log("Primeira chamada:", processar(objetoDeDados));
  console.log("Segunda chamada:", processar(objetoDeDados));

  // Agora, o ponto principal: se perdermos a referência a `objetoDeDados`,
  // o GC pode limpá-lo da memória, e a entrada no `cache` será removida
  // automaticamente, evitando um memory leak que ocorreria com um `Map` normal.
  objetoDeDados = null; // Removemos a única referência forte ao objeto.
  console.log("\n  Referência ao objeto removida. O GC pode limpar a entrada do cache agora.");

  console.log("\n-------------------------------------\n");
}
