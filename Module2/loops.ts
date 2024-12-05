/* Pętle */

/* for
Pętla for jest używana, gdy znana jest liczba iteracji.
*/
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
  }

/* while
Pętla while wykonuje blok kodu tak długo, jak warunek jest prawdziwy.
*/
let i = 0;
while (i < 5) {
  console.log(i); // 0, 1, 2, 3, 4
  i++;
}

/* do...while
Pętla do...while jest podobna do pętli while, ale sprawdza warunek po wykonaniu bloku kodu.
*/
let j = 0;
do {
  console.log(j); // 0, 1, 2, 3, 4
  j++;
} while (j < 5);

/* for...of
Pętla for...of iteruje po wartościach iterowalnych obiektów (np. tablicach, stringach).
*/
const array = [10, 20, 30];
for (const value of array) {
  console.log(value); // 10, 20, 30
}

/* for...in
Pętla for...in iteruje po kluczach obiektów.
*/
const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
  console.log(key); // a, b, c
  console.log(object[key]); // 1, 2, 3
}