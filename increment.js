/* I will be making a modification to a number, to Increment. 

1. I need a value and a starting point of 0. 
2. I know shorthand is val++ or v-- for adding or subtracting 1.
3. I need to make a loop to keep it going.*/

function increment() {
  let num = 0;
  console.log(`Before: ${num}`);
  while (num < 100) {
    num = num + 1;
    console.log(`After: ${num}`);
  }
}

increment();
