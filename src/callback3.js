export function runCallback3Examples() {
  console.log("--- Exemplos de Callbacks 3 ---");

// copy this code to the console and run it
// This code demonstrates how to use event listeners in JavaScript
document.getElementsByTagName('body')[0].onclick = function (event) {
  console.log("Evento de clique capturado:", event);
}

}
