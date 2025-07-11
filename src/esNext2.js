export function runEsNext2Examples() {
  console.log("--- Exemplos ES Next 2 Examples ---")
  // 1. Arrow functions
  const sum = (a, b) => a + b
  console.log('\n1) Arrow functions\n--------------------------')
  console.log('sum:', sum(2, 3)) // 5

  // 2. Arrow functions (this)
  const lexico1 = () => console.log(this === global)
  const lexico2 = lexico1.bind({})

  console.log('\n2. Arrow functions (this)\n--------------------------')
  lexico1() // true
  lexico2() // true
}
