// .substring() is for extracting part of the substring

let str = "Oh to be the house cat sleeping...";

console.log(`Before: ${str}`);

let the = str.substring(9, 12);
let cat = str.substring(19, 22);
let eepy = str.substring(23, 31);

console.log(`After: ${the} ${cat} is ${eepy} `);
