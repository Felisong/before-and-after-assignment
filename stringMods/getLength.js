// length() is the method to get length from a string.

const str = "I am hungry right now.";

console.log(`Before: ${str}`);
// I can mix and match the things I've done so far.
// console.log(str.indexOf("hungry")); it gave me 5.
let hungry = str.substring(5, 11);

console.log(`After: the length of ${hungry} is ${hungry.length}.`);
