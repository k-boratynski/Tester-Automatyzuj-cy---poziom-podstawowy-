/*W TypeScript (i JavaScript) istnieją różne sposoby deklarowania zmiennych: 
var, let, const, oraz zmienne globalne:

let:
Zakres (Scope): Zmienne zadeklarowane za pomocą let mają zakres blokowy (block scope), co oznacza, 
że są dostępne tylko w obrębie bloku, w którym zostały zadeklarowane.
*/
function letExample() {
    // console.log(y); // ReferenceError: y is not defined
    let y = 10;
    console.log(y); // 10
  }

/* 
const:
Zakres (Scope): Zmienne zadeklarowane za pomocą const również mają zakres blokowy (block scope) jak let.
Stałość (Immutability): Zmienne zadeklarowane za pomocą const muszą być zainicjalizowane podczas deklaracji i nie można im przypisać nowej wartości. 
Jednakże, jeśli const odnosi się do obiektu lub tablicy, można zmieniać ich właściwości lub elementy.
*/  
const z = 10;
// z = 20; // TypeError: Assignment to constant variable.
const obj = { name: 'John' };
obj.name = 'Doe'; // To jest dozwolone

/* Generalnie:
Używaj let dla zmiennych, które mogą zmieniać wartość.
Używaj const dla zmiennych, które nie powinny zmieniać wartości.
Unikaj używania var.
*/


/*
TypeScript udostępnia nam trzy typy proste:

boolean
number
string
*/

let amount: number;
let surname: string;
let empty: boolean;

amount= 10;
surname = "Kowalski";
empty = true;

/*
 Typy  złożone. W tym przypadku do dyspozycji mamy:

array
object
tuple nazywane również krotkami
*/

let tab1: number[];
let tab2: Array<number>;
tab1 = [1, 2, 3];
tab2 = [1, 2, 3];

/*Przejście przez elementy tablicy:*/

// Użycie pętli for
for (let i = 0; i < tab1.length; i++) {
    console.log(tab1[i]);
}

// Użycie metody forEach
tab2.forEach((num) => {
    console.log(num);
});

/* Dodawanie/usuwanie elementów z tablicy: */
let fruits: string[] = ["apple", "banana", "orange"];

// Dodawanie nowego owocu na koniec tablicy
fruits.push("grape");

// Usuwanie ostatniego owocu z tablicy
fruits.pop();

// Dodawanie nowego owocu na początek tablicy
fruits.unshift("pear");

// Usuwanie pierwszego owocu z tablicy
fruits.shift();

/* Wyszukiwanie elementów w tablicy: */
let numbers: number[] = [10, 20, 30, 40, 50];

// Wyszukiwanie indeksu liczby 30
let index = numbers.indexOf(30);

console.log(index); // Wyświetli: 2




let tuple: [number, boolean, string];
tuple = [1, true, 'three'];
/*
Powyższy zapis oznacza, że pod indeksem 0 musi znajdować się wartość typu number, pod indeksem 1 boolean a 2 string.
*/

//object
{
let person: {
    name: string;
    age: number;
  };
  
  person = {
    name: 'John',
    age: 25,
  }; 

}
