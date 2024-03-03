//Question 14,15,16,17,19
// Exercise 14: Guest List
// Initial list of guests
var guestList = ["madiha", "maria", "maliha"];
// Invitation message function
function sendInvitation(guest) {
    return "Dear ".concat(guest, ",\nYou are cordially invited to dinner. Please let me know if you can attend.\n\nBest regards,\n[Abrish Rathoor]");
}
// Printing invitation messages
guestList.forEach(function (guest) {
    console.log(sendInvitation(guest));
});
// Someone can't make it
var guestCantMakeIt = "maria";
console.log("\nUnfortunately, ".concat(guestCantMakeIt, " can't make it to the dinner.\n"));
// Replace with a new guest
var newGuest = "rafea";
guestList[guestList.indexOf(guestCantMakeIt)] = newGuest;
// Print second set of invitation messages
guestList.forEach(function (guest) {
    console.log(sendInvitation(guest));
});
// Exercise 15: Changing Guest List
// Someone else can't make it
var guestCantMakeItAgain = "madiha";
console.log("\nUnfortunately, ".concat(guestCantMakeItAgain, " can't make it to the dinner.\n"));
// Replace with a new guest
var newGuestAgain = "affreen";
guestList[guestList.indexOf(guestCantMakeItAgain)] = newGuestAgain;
// Print second set of invitation messages
guestList.forEach(function (guest) {
    console.log(sendInvitation(guest));
});
// Exercise 16: More Guests
// Found a bigger dinner table
console.log("\nGreat news! We found a bigger dinner table.\n");
// Add one new guest to the beginning
guestList.unshift("hania");
// Add one new guest to the middle
guestList.splice(Math.floor(guestList.length / 2), 0, "Abrish");
// Add one new guest to the end
guestList.push("Alia");
// Print new set of invitation messages
guestList.forEach(function (guest) {
    console.log(sendInvitation(guest));
});
// Exercise 17: Shrinking Guest List
// Can only invite two people
console.log("\nSorry, we can only invite two people for dinner.\n");
// Remove guests until only two remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print message to remaining guests
guestList.forEach(function (guest) {
    console.log(sendInvitation(guest));
});
// Empty the list
guestList = [];
console.log("\nThe list is now empty:", guestList);
// Exercise 19: Dinner Guests
// Number of people invited to dinner
console.log("\nNumber of people invited to dinner: ".concat(guestList.length));
