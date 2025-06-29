export function runProxyExamples() {
  console.log("--- Exemplos de Proxy ---");

  // 1. Proxy com 'get' trap
  // Intercepta a leitura de propriedades.
  const targetGet = {
    message1: "olá",
    message2: "mundo"
  };

  const handlerGet = {
    get(target, prop, receiver) {
      if (prop in target) {
        return target[prop];
      } else {
        return `A propriedade '${prop}' não existe.`;
      }
    }
  };

  const proxyGet = new Proxy(targetGet, handlerGet);
  console.log('Acessando proxyGet.message1:', proxyGet.message1); // olá
  console.log('Acessando proxyGet.message3:', proxyGet.message3); // A propriedade 'message3' não existe.

  // 2. Proxy com 'set' trap
  // Intercepta a escrita de propriedades, útil para validação.
  const validator = {
    set(target, prop, value) {
      if (prop === 'age') {
        if (!Number.isInteger(value)) {
          throw new TypeError('A idade não é um número inteiro.');
        }
        if (value < 0) {
          throw new RangeError('A idade não pode ser negativa.');
        }
      }
      // Comportamento padrão para salvar o valor
      target[prop] = value;
      return true; // Indica que a atribuição foi bem-sucedida
    }
  };

  const person = new Proxy({}, validator);
  console.log('\nValidando dados com Proxy:');
  person.age = 30;
  console.log('Idade definida para:', person.age); // 30

  try {
    person.age = 'trinta';
  } catch (e) {
    console.error(e.message); // A idade não é um número inteiro.
  }

  try {
    person.age = -5;
  } catch (e) {
    console.error(e.message); // A idade não pode ser negativa.
  }

  console.log("-----------------------\n");
}
