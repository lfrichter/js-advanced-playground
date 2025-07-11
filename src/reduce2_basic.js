export function runReducer2Examples() {
  console.log("--- Exemplos Reducer ---");

  const students = [
    { name: 'João', grade: 7.3, scholarship: false },
    { name: 'Maria', grade: 9.2, scholarship: true },
    { name: 'Pedro', grade: 9.8, scholarship: true },
    { name: 'Ana', grade: 8.7, scholarship: false }
  ];
  console.log(students);

  const results1 = students.map(s => s.scholarship).reduce(function(acc, current) {
    return acc && current;
  });
  const results1b = students.map(s => s.scholarship).reduce((acc, current) => acc && current);
  console.log("Question 1: Todos os alunos são bolsista? A", results1);
  console.log("Question 1: Todos os alunos são bolsista? B", results1b);


  const results2a = students.map(s => s.scholarship).reduce(function(acc, current) {
    return acc || current;
  });
  const results2b = students.map(s => s.scholarship).reduce((acc, current) => acc || current);
  console.log("Question 2: Algum aluno é bolsista? A", results2a);
  console.log("Question 2: Algum aluno é bolsista? B", results2b);



  console.log("\n------------------------------------\n");
}
