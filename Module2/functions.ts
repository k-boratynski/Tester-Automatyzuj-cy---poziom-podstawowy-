/* Funkcje */

function add(a: number, b: number): number {
    return a + b;
  }
  
  const result = add(5, 3); // Output: 8

//Jeśli funkcja nie zwraca żadnej wartości, możemy określić typ zwracany jako void. 
function logMessage(message: string): void { 
    console.log(message); 
}

// Parametry opcjonalne
function greet(name: string, age?: number): string {
    if (age) {
      return `Hello, ${name}. You are ${age} years old.`;
    } else {
      return `Hello, ${name}.`;
    }
  }
  
  console.log(greet("Alice")); // Output: Hello, Alice.
  console.log(greet("Bob", 25)); // Output: Hello, Bob. You are 25 years old.

// Parametry domyślne
function multiply(a: number, b: number = 2): number {
    return a * b;
  }
  
  console.log(multiply(5)); // Output: 10
  console.log(multiply(5, 3)); // Output: 15
