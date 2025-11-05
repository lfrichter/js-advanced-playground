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
