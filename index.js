import { carFleet } from './src/tests/carFleet.js';

console.log("🚀 Iniciando Playground de JavaScript Moderno 🚀\n");

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
// carFleet();

console.log("--- Iniciando Testes ---");

// Teste 1: Exemplo 1 do PDF
let target1 = 12;
let position1 = [10, 8, 0, 5, 3]; // [cite: 15]
let speed1 = [2, 4, 1, 1, 3]; // [cite: 15]
let expected1 = 3; // [cite: 16]
let result1 = carFleet(target1, position1, speed1);
console.log(`Exemplo 1: (Target: ${target1}, Posições: [${position1}], Velocidades: [${speed1}])`);
console.log(`   Resultado: ${result1}, Esperado: ${expected1} -> ${result1 === expected1 ? '✅ PASSOU' : '❌ FALHOU'}`);
console.log("---");

// Teste 2: Exemplo 2 do PDF
// let target2 = 10;
// let position2 = [3]; // [cite: 22]
// let speed2 = [3]; // [cite: 22]
// let expected2 = 1; // [cite: 23]
// let result2 = carFleet(target2, position2, speed2);
// console.log(`Exemplo 2: (Target: ${target2}, Posições: [${position2}], Velocidades: [${speed2}])`);
// console.log(`   Resultado: ${result2}, Esperado: ${expected2} -> ${result2 === expected2 ? '✅ PASSOU' : '❌ FALHOU'}`);
// console.log("---");

// Teste 3: Exemplo 3 do PDF
// let target3 = 100;
// let position3 = [0, 2, 4]; // [cite: 27]
// let speed3 = [4, 2, 1]; // [cite: 27]
// let expected3 = 1; // [cite: 28]
// let result3 = carFleet(target3, position3, speed3);
// console.log(`Exemplo 3: (Target: ${target3}, Posições: [${position3}], Velocidades: [${speed3}])`);
// console.log(`   Resultado: ${result3}, Esperado: ${expected3} -> ${result3 === expected3 ? '✅ PASSOU' : '❌ FALHOU'}`);
// console.log("---");

// --------------- Advanced JavaScript Examples ---------------
// runSymbolExamples();
// runGeneratorExamples();
// runProxyExamples();
// runProxyExamples2();
// runReduceExamples();
// runMapExamples();
// runWeakMapExamples();

console.log("✅ Playground finalizado. ✅");
