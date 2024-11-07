// Number.NaN is used to compare.
let num = 5.5;

console.log(`Before: is 5.5 a number? ${isNumNaN(num)}`);

// if
function isNumNaN(x) {
  if (isNaN(x)) {
    return "not a number!";
  } else {
    return "it's a number!";
  }
}
num = "abc";

console.log(`After: is "abc" a number? ${isNumNaN(num)}`);
