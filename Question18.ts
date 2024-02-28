//Question 18 seeking the world:

let placesToVisit: string[] = ["Itlay", "London", "India", "Dubai", "Disney land"];

console.log("Original order:");
console.log(placesToVisit);

console.log("\nAlphabetical order:");
console.log([...placesToVisit].sort());

console.log("\nOriginal order is maintained:");
console.log(placesToVisit);

console.log("\nReverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());

console.log("\nOriginal order is maintained:");
console.log(placesToVisit);

placesToVisit.reverse();

console.log("\nReversed order:");
console.log(placesToVisit);

placesToVisit.reverse();

console.log("\nBack to original order:");
console.log(placesToVisit);

placesToVisit.sort();

console.log("\nSorted in alphabetical order:");
console.log(placesToVisit);

placesToVisit.sort((a, b) => b.localeCompare(a));

console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit);






