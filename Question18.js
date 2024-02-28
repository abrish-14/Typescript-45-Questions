//Question 18 seeking the world:
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Itlay", "London", "India", "Dubai", "Disney land"];
console.log("Original order:");
console.log(placesToVisit);
console.log("\nAlphabetical order:");
console.log(__spreadArray([], placesToVisit, true).sort());
console.log("\nOriginal order is maintained:");
console.log(placesToVisit);
console.log("\nReverse alphabetical order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
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
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit);
