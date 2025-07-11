export function runCallback2Examples() {
  console.log("--- Exemplos de Callbacks 2 ---");
  const grades = [7.7, 6.5, 5.2, 8.9, 3.6, 7.0, 9.0];

  //  without Callback
  const lowGrades = []
  for (let i in grades) {
    if (grades[i] < 7) {
      lowGrades.push(grades[i]);
    }
  }
  console.log("Notas 1:", lowGrades);

  // With Callback from now on
  const lowGrades2 = grades.filter(function (grade) {
    return grade < 7;
  })
  console.log("Notas 2:", lowGrades2);


  const lowGrades3 = grades.filter(grade => grade < 7)
  console.log("Notas 3:", lowGrades3);


  const gradesLowThan7 = grade => grade < 7
  const lowGrades4 = grades.filter(gradesLowThan7)
  console.log("Notas 4:", lowGrades4);
}
