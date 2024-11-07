// found the indexOf() method ofr a string

let str = "Celldweller's With Upon a Blackstar Album slaps.";

console.log("Before: " + str);

let blackstar = str.indexOf("Blackstar");

// console.log(blackstar);
// used console log to reference the index of Black star.

console.log(
  `After: BlackStar's index is - ${blackstar}, and I used substring method to place here, ${str.substring(
    26,
    35
  )}`
);
