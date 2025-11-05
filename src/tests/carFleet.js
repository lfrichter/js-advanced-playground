// https://leetcode.com/problems/car-fleet/description/
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const n = position.length;

    // 1. Combinar os dados e calcular o tempo de chegada (TTA)
    // Criamos um array de pares: [posição, tempo_para_chegar]
    const cars = [];
    for (let i = 0; i < n; i++) {
        const timeToArrival = (target - position[i]) / speed[i];
        cars.push({ position: position[i], tta: timeToArrival });
    }

    // 2. Classificar os carros pela posição inicial, do mais próximo ao
    //    destino (maior posição) para o mais distante (menor posição).
    cars.sort((a, b) => b.position - a.position);

    let fleets = 0;
    let currentFleetTime = -1; // Rastreia o tempo de chegada da frota mais à frente

    // 3. Iterar dos carros mais próximos do destino para os mais distantes
    for (let i = 0; i < n; i++) {
        const car = cars[i];

        // Se o TTA deste carro for MAIOR que o TTA da frota à sua frente...
        // ...significa que este carro é mais lento e NUNCA alcançará a frota.
        // Portanto, ele deve formar sua própria, nova frota.
        if (car.tta > currentFleetTime) {
            fleets++; // Nova frota detectada
            currentFleetTime = car.tta; // Este é o novo tempo de chegada a ser batido
        }
        // Se car.tta <= currentFleetTime:
        // Este carro é rápido o suficiente para alcançar a frota à frente.
        // Ele se juntará a essa frota e não conta como uma nova frota.
        // Ele será forçado a diminuir a velocidade  e chegará no
        // 'currentFleetTime'.
    }

    return fleets;
};

export { carFleet };


// Teste 1: Exemplo 1 do PDF
// let target1 = 12;
// let position1 = [10, 8, 0, 5, 3]; // [cite: 15]
// let speed1 = [2, 4, 1, 1, 3]; // [cite: 15]
// let expected1 = 3; // [cite: 16]
// let result1 = carFleet(target1, position1, speed1);
// console.log(`Exemplo 1: (Target: ${target1}, Posições: [${position1}], Velocidades: [${speed1}])`);
// console.log(`   Resultado: ${result1}, Esperado: ${expected1} -> ${result1 === expected1 ? '✅ PASSOU' : '❌ FALHOU'}`);
// console.log("---");

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
