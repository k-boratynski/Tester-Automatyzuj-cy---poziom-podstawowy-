/* Operatory logiczne */
/*
&& (AND), || (OR) oraz ! (NOT).

&& (AND)
Operator && zwraca true tylko wtedy, gdy oba operandy są prawdziwe. */
const a = true;
const b = false;

console.log(a && b); // false
console.log(a && true); // true
console.log(b && false); // false

/* || (OR)
Operator || zwraca true, jeśli przynajmniej jeden z operandów jest prawdziwy.
*/
const c = true;
const d = false;

console.log(c || d); // true
console.log(c || false); // true
console.log(d || false); // false


/* ! (NOT)
Operator ! zwraca true, jeśli operand jest fałszywy, i false, jeśli operand jest prawdziwy.
*/
const e = true;
const f = false;

console.log(!e); // false
console.log(!f); // true

/* Przykłady */
const x = 5;
const y = 10;

// Operator AND
if (x > 0 && y > 0) {
  console.log('Both x and y are positive'); // Wykona się, ponieważ oba warunki są prawdziwe
}

// Operator OR
if (x > 0 || y < 0) {
  console.log('At least one of x or y is positive'); // Wykona się, ponieważ jeden z warunków jest prawdziwy
}

// Operator NOT
if (!false) {
  console.log('This will always execute'); // Wykona się, ponieważ !false to true
}