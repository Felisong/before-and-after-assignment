let number = 13.5;

console.log(`Before: ${isNumInteger(number)}`);

//parseInt() is for parsing
function isNumInteger(num) {
  // added parse integer inside so it always attempts to convert it to an integer
  if (Number.isInteger(parseInt(num))) {
    return "Yipee it is an integer";
  }
  return "is not an integer!";
}

number = "abc";
console.log(`After: ${isNumInteger(number)}`);
