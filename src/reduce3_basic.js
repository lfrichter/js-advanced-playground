export function runReducer3Examples() {
  console.log("--- Exemplos Reducer ---");

  Array.prototype.reduce = function(callback, initialValue) {
    let accumulator = initialValue || this[0];
    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
  }

  const sum = [1, 2, 3, 4, 5, 6].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.log("Soma usando reduce:", sum); // 15


  console.log("\n------------------------------------\n");
}
