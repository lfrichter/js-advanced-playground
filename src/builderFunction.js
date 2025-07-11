export function runBuilderFunctionExamples() {
  console.log("--- Exemplos de Função Construtora ---");

  // Função construtora para criar objetos Pessoa
  function Car(maxSpeed = 200, delta = 5) {
    // Atributos privados
    let currentSpeed = 0;

    // Método público para acelerar
    this.accelerate = function() {
      if (currentSpeed + delta <= maxSpeed) {
        currentSpeed += delta;
      } else {
        currentSpeed = maxSpeed;
      }
    };

    // Método público para frear
    this.brake = function() {
      if (currentSpeed - delta >= 0) {
        currentSpeed -= delta;
      } else {
        currentSpeed = 0;
      }
    };

    // Método público para obter a velocidade atual
    this.getCurrentSpeed = function() {
      return currentSpeed;
    };
  }

  // Criando um objeto Car
  const car = new Car;
  console.log("Velocidade atual:", car.getCurrentSpeed()); // 0
  car.accelerate();
  console.log("Velocidade atual:", car.getCurrentSpeed()); // 0


  const ferrari = new Car(350, 20);
  console.log("Velocidade atual da Ferrari:", ferrari.getCurrentSpeed()); // 0
  ferrari.accelerate();
  console.log("Velocidade atual da Ferrari:", ferrari.getCurrentSpeed()); //


  console.log('Car is: ', typeof Car); // function
  console.log('ferrari is:', typeof ferrari); // object
  console.log('ferrari instanceof Car: ', ferrari instanceof Car); // true
  console.log('ferrari instanceof Object: ', ferrari instanceof Object); // true

  console.log("---------------------------\n");
}
