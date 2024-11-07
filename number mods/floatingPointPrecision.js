// I want to make a number have limited number of numbers.

// assigning the variable a float.
let num = 14.356789;

console.log(`Before: ${num}`);

num = num.toPrecision(4);

// test how toPrecision works with it.
console.log(`After: ${num}`);
// end result is 14.36 which matches the 4 I assigned
