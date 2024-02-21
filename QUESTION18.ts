//Question 18 Seeking the world:

let placesToVisit = ["Santorini", "Kyoto", "Machu Picchu", "Bora Bora", "Istanbul"];
console.log("Original Order:", placesToVisit);
console.log("Alphabetical Order:", [...placesToVisit].sort());
console.log("Original Order:", placesToVisit)
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());
console.log("Original Order:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
placesToVisit.reverse();
console.log("Original Order:", placesToVisit);
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);
placesToVisit.sort().reverse();
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
