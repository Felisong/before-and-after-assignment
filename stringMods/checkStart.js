// I found the startsWith() method to do this.

const str = "I want to eat a burrito.";

console.log(`Before:` + str);

console.log(`After: q1. Does it start with I ? ${str.startsWith("I")}`);
console.log(
  `After: q2. Does it start with burrito ? ${str.startsWith("burrito")}`
);
