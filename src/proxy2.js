export function runProxyExamples2() {
  console.log("--- Exemplos de Proxy 2 ---");

  const pessoa = {
    nome: "Ana",
    idade: 25
  };

  const proxyPessoa = new Proxy(pessoa, {
    get(target, prop) {
      console.log(`🔎 Lendo propriedade ${prop}`);
      return target[prop];
    },
    set(target, prop, value) {
      if (prop === 'idade' && typeof value !== 'number') {
        throw new TypeError('Idade deve ser número');
      }
      console.log(`✏️ Alterando ${prop} para ${value}`);
      target[prop] = value;
      return true;
    }
  });

  proxyPessoa.nome; // trigger get
  proxyPessoa.idade = 30; // trigger set

  try {
    proxyPessoa.idade = "velho"; // Isso vai lançar um erro
  } catch (error) {
    console.error("Erro ao definir idade:", error.message);
  }

  console.log("-----------------------\n");
}
