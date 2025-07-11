export function runReducerExamples() {
  console.log("--- Exemplos Reducer ---");

  const students = [
    { name: 'João', grade: 7.3, scholarship: false },
    { name: 'Maria', grade: 9.2, scholarship: true },
    { name: 'Pedro', grade: 9.8, scholarship: false },
    { name: 'Ana', grade: 8.7, scholarship: true }
  ];

  console.log(students.map(s => s.grade)); // [ 7.3, 9.2, 9.8, 8.7 ]

  const results = students.map(s => s.grade).reduce(function(accumulator, current) {
      console.log(accumulator, current);
      return accumulator + current;
    },
    0 // Valor inicial do acumulador
  );
  // 0 7.3
// 7.3 9.2
// 16.5 9.8
// 26.3 8.7

  console.log(results); // 35

  console.log("\n------------------------------------\n");
}
