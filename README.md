# 🚀 JS ES6+ Advanced Playground

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![ES Modules](https://img.shields.io/badge/ES_Modules-✅-4CAF50?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge)

## 📖 Descrição

Um playground educacional para explorar e demonstrar recursos fundamentais e avançados do JavaScript moderno (ES6+). Este projeto contém exemplos práticos e bem comentados de funcionalidades poderosas que todo desenvolvedor JavaScript deveria conhecer.

## ✨ Recursos Demonstrados

### 🚀 **Fundamentos de JavaScript Moderno**
- **Funções**:
  - Funções Anônimas (`anonymousFunction.js`)
  - Padrão Callback (`callback1.js`, `callback2.js`, `callback3.js`)
  - Padrão Builder (`builderFunction.js`)
- **Array.map**:
  - Transformação de dados e criação de novos arrays (`mapBasic.js`, `mapBasic2.js`, `mapBasic3.js`)
- **Array.filter**:
  - Filtragem de elementos com base em condições (`filter.js`, `filter2.js`)
- **Array.reduce**:
  - Agregação de dados e redução de um array a um único valor (`reduce_basic.js`, `reduce2_basic.js`, `reduce3_basic.js`)
- **Recursos do ES6+** (`esNext.js`, `esNext2.js`):
  - `let` e `const` para escopo de bloco
  - Template Strings para interpolação de strings
  - Destructuring de arrays e objetos
  - Arrow Functions e o comportamento do `this` léxico

**Casos de Uso**: Manipulação de coleções, programação assíncrona básica, transformações de dados.

---

### 🔧 **Tópicos Avançados de JavaScript**

### 🔧 **Proxy** (`proxy.js` & `proxy2.js`)
- **Interceptação de Operações**: Captura e personaliza operações realizadas em objetos (get, set, etc.)
- **Validação de Dados**: Implementa validação automática ao definir propriedades
- **Logging Transparente**: Monitora acesso e modificação de propriedades
- **Tratamento de Propriedades Inexistentes**: Retorna mensagens customizadas para propriedades não encontradas

**Casos de Uso**: Validação de formulários, logging de debug, criação de APIs reativas

### ⚡ **Generators** (`generator.js`)
- **Funções Pausáveis**: Controle de execução com `yield` para pausar e resumir
- **Sequências Infinitas**: Geração de IDs únicos e sequências sob demanda
- **Controle de Fluxo Avançado**: Iteração lazy e processamento eficiente de dados
- **Estado Mantido**: Preserva estado entre chamadas

**Casos de Uso**: Paginação, geração de IDs, processamento de grandes datasets

### 🔑 **Symbols** (`symbol.js`)
- **Identificadores Únicos**: Criação de chaves verdadeiramente únicas
- **Propriedades Privadas**: Implementação de encapsulamento em objetos
- **Evitar Colisões**: Prevenção de conflitos de nomes de propriedades
- **Metadados Ocultos**: Propriedades não enumeráveis em loops

**Casos de Uso**: Criação de bibliotecas, propriedades privadas, metadados

### 📊 **Array.reduce Avançado** (`reduce.js`)
- **Agrupamento de Dados**: Organização de arrays por critérios específicos
- **Transformações Complexas**: Conversão de estruturas de dados
- **Composição de Funções**: Implementação de padrões funcionais
- **Cálculos Estatísticos**: Processamento de múltiplas métricas simultaneamente

**Casos de Uso**: Análise de dados, transformações ETL, programação funcional

### 🗺️ **Map** (`map.js`)
- **Chaves de Qualquer Tipo**: Uso de objetos, funções ou primitivos como chaves
- **Ordem de Inserção**: Mantém a ordem dos elementos inseridos
- **Contagem de Frequências**: Implementação eficiente de contadores
- **Conversões Flexíveis**: Transformação entre Map e Object

**Casos de Uso**: Cache de dados, mapeamento de relacionamentos, contadores

### 💾 **WeakMap** (`weakmap.js`)
- **Dados Privados**: Implementação de propriedades privadas em classes
- **Referências Fracas**: Permite garbage collection automático
- **Cache Inteligente**: Prevenção de memory leaks em sistemas de cache
- **Encapsulamento**: Proteção de dados sensíveis

**Casos de Uso**: Dados privados, cache sem vazamentos, metadados de objetos

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- Suporte a ES Modules

### Instalação e Execução
```bash
# Clone o repositório
git clone <url-do-repositorio>

# Navegue até o diretório
cd JsAdvancedPlayground

# Execute o playground
npm start
```

### Executando Exemplos Específicos
No arquivo `index.js`, você pode comentar/descomentar as linhas para executar exemplos específicos:

```javascript
// --------------- Fundamentals JavaScript Examples ---------------
// runAnonymousFunctionExamples();
// runCallbackExamples();
// runCallback2Examples();
// runCallback3Examples();
// runBuilderFunctionExamples();
// runMap1Examples();
// runMap2Examples();
// runMap3Examples();
// runFilterExamples();
// runFilter2Examples();
// runReducerExamples();
// runReducer2Examples();
// runReducer3Examples();
// runEsNextExamples();
runEsNext2Examples();


// --------------- Advanced JavaScript Examples ---------------
// runSymbolExamples();
// runGeneratorExamples();
// runProxyExamples();
// runProxyExamples2();
// runReduceExamples();
// runMapExamples();
// runWeakMapExamples();
```

## 📁 Estrutura do Projeto

```
JsAdvancedPlayground/
├── index.js              # Arquivo principal - orquestra os exemplos
├── package.json           # Configurações do projeto
├── package-lock.json      # Lock de dependências
├── README.md             # Este arquivo
└── src/                  # Diretório com os exemplos
    ├── anonymousFunction.js # Exemplos de Funções Anônimas
    ├── builderFunction.js   # Exemplo de Função Builder
    ├── callback1.js         # Exemplos de Callback
    ├── callback2.js         # Exemplos de Callback com filter
    ├── callback3.js         # Exemplo de Callback no Browser (evento de clique)
    ├── esNext.js            # Exemplos de recursos do ESNext (let, const, destructuring)
    ├── esNext2.js           # Exemplos de recursos do ESNext (arrow functions)
    ├── filter.js            # Exemplos de Array.filter
    ├── filter2.js           # Implementação customizada de Array.filter
    ├── generator.js      # Exemplos de Generator Functions
    ├── map.js           # Exemplos de Map
    ├── mapBasic.js          # Exemplos de Array.map
    ├── mapBasic2.js         # Exemplos de Array.map
    ├── mapBasic3.js         # Implementação customizada de Array.map
    ├── proxy.js         # Exemplos básicos de Proxy
    ├── proxy2.js        # Exemplos avançados de Proxy
    ├── reduce.js        # Exemplos avançados de Array.reduce
    ├── reduce_basic.js      # Exemplos de Array.reduce
    ├── reduce2_basic.js     # Exemplos de Array.reduce
    ├── reduce3_basic.js     # Implementação customizada de Array.reduce
    ├── symbol.js        # Exemplos de Symbol
    └── weakmap.js       # Exemplos de WeakMap
```

## 🎯 Objetivos de Aprendizado

Este playground foi criado para demonstrar:

- **Metaprogramação** com Proxy
- **Programação Assíncrona** com Generators
- **Encapsulamento** com Symbols e WeakMap
- **Programação Funcional** com reduce avançado
- **Estruturas de Dados Modernas** com Map e WeakMap
- **Boas Práticas** de JavaScript ES6+

## 🤝 Contribuindo

Sinta-se à vontade para contribuir com novos exemplos ou melhorias:

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📚 Recursos Adicionais

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [ES6 Features](http://es6-features.org/)
- [JavaScript.info](https://javascript.info/)

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo package.json para mais detalhes.

---

**Desenvolvido com ❤️ para a comunidade JavaScript**
