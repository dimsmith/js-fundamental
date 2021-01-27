'use strict';

/**
 * While-do
 * @type {number}
 * 0, 1, 2
 */
let i = 0;
while (i < 3) {
    console.log(`while-do(1): ${i}`);
    i++;
}

/**
 * if i = 0, it become falsy and the loop stops
 * @type {number}
 */
i = 3;
while (i) {
    console.log(`while-do(2): ${i}`);
    i--;
}

const fruits = ["Banana", "Apple", "Mango"]
/**
 * if i = 0, it become falsy and the loop stops
 * @type {number}
 */
i = 0;
while (i < fruits.length) {
    console.log(`while-do(3): ${fruits[i]}`);
    i++;
}
console.log(`==========================================================`);

/**
 * do-while
 * @type {number}
 */
i = 0;
do {
    console.log(`do-while(1): ${i}`);
    i++;
} while (i < 3);

i = 0;
do {
    console.log(`do-while(2): ${fruits[i]}`);
    i++;
} while (i < fruits.length);
