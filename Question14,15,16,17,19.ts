//Question 14,15,16,17,19

// Exercise 14: Guest List

// Initial list of guests
let guestList: string[] = ["madiha", "maria", "maliha"];

// Invitation message function
function sendInvitation(guest: string): string {
    return `Dear ${guest},\nYou are cordially invited to dinner. Please let me know if you can attend.\n\nBest regards,\n[Abrish Rathoor]`;
}

// Printing invitation messages
guestList.forEach(guest => {
    console.log(sendInvitation(guest));
});

// Someone can't make it
const guestCantMakeIt: string = "maria";
console.log(`\nUnfortunately, ${guestCantMakeIt} can't make it to the dinner.\n`);

// Replace with a new guest
const newGuest: string = "rafea";
guestList[guestList.indexOf(guestCantMakeIt)] = newGuest;

// Print second set of invitation messages
guestList.forEach(guest => {
    console.log(sendInvitation(guest));
});

// Exercise 15: Changing Guest List

// Someone else can't make it
const guestCantMakeItAgain: string = "madiha";
console.log(`\nUnfortunately, ${guestCantMakeItAgain} can't make it to the dinner.\n`);

// Replace with a new guest
const newGuestAgain: string = "affreen";
guestList[guestList.indexOf(guestCantMakeItAgain)] = newGuestAgain;

// Print second set of invitation messages
guestList.forEach(guest => {
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
guestList.forEach(guest => {
    console.log(sendInvitation(guest));
});

// Exercise 17: Shrinking Guest List

// Can only invite two people
console.log("\nSorry, we can only invite two people for dinner.\n");

// Remove guests until only two remain
while (guestList.length > 2) {
    const removedGuest: string = guestList.pop()!;
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print message to remaining guests
guestList.forEach(guest => {
    console.log(sendInvitation(guest));
});

// Empty the list
guestList = [];
console.log("\nThe list is now empty:", guestList);

// Exercise 19: Dinner Guests

// Number of people invited to dinner
console.log(`\nNumber of people invited to dinner: ${guestList.length}`);


