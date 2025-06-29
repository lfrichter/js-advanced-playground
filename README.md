# 🚀 JS ES6+ Advanced Playground

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![ES Modules](https://img.shields.io/badge/ES_Modules-✅-4CAF50?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge)

## 📖 Descrição

Um playground educacional para explorar e demonstrar recursos avançados do JavaScript moderno (ES6+). Este projeto contém exemplos práticos e bem comentados de funcionalidades poderosas que todo desenvolvedor JavaScript deveria conhecer.

## ✨ Recursos Demonstrados

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
// Descomente a linha do exemplo que deseja executar
runSymbolExamples();     // Exemplos de Symbol
runGeneratorExamples();  // Exemplos de Generator
runProxyExamples();      // Exemplos de Proxy (básico)
runProxyExamples2();     // Exemplos de Proxy (avançado)
runReduceExamples();     // Exemplos de Array.reduce
runMapExamples();        // Exemplos de Map
runWeakMapExamples();    // Exemplos de WeakMap
```

## 📁 Estrutura do Projeto

```
JsAdvancedPlayground/
├── index.js              # Arquivo principal - orquestra os exemplos
├── package.json           # Configurações do projeto
├── package-lock.json      # Lock de dependências
├── README.md             # Este arquivo
└── src/
    ├── generator.js      # Exemplos de Generator Functions
    ├── map.js           # Exemplos de Map
    ├── proxy.js         # Exemplos básicos de Proxy
    ├── proxy2.js        # Exemplos avançados de Proxy
    ├── reduce.js        # Exemplos avançados de Array.reduce
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
