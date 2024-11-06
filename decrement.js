// decrementing below

function decrement() {
  let num = 100;
  console.log(`Before: ${num}`);
  while (num > 0) {
    num = num - 1;
    console.log(`After: ${num}`);
  }
}

decrement();
