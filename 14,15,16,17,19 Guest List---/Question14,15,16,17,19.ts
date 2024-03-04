//Question 14,15,16,17,19

// Exercise 14: Guest List
let guestList: string[] = ["madiha", "maria", "maliha"];

// Invitation message function
function sendInvitation(guest: string): string {
    return `Dear ${guest},\nYou are cordially invited to dinner. Please let me know if you can attend.\n\nBest regards,\n[Abrish Rathoor]`;
}

guestList.forEach(guest => {
    console.log(sendInvitation(guest));
});

const guestCantMakeIt: string = "maria";
console.log(`\nUnfortunately, ${guestCantMakeIt} can't make it to the dinner.\n`);

const newGuest: string = "rafea";
guestList[guestList.indexOf(guestCantMakeIt)] = newGuest;

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

console.log("\nGreat news! We found a bigger dinner table.\n");

guestList.unshift("hania");

guestList.splice(Math.floor(guestList.length / 2), 0, "Abrish");

guestList.push("Alia");


guestList.forEach(guest => {
    console.log(sendInvitation(guest));
});

// Exercise 17: Shrinking Guest List

console.log("\nSorry, we can only invite two people for dinner.\n");

while (guestList.length > 2) {
    const removedGuest: string = guestList.pop()!;
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
guestList.forEach(guest => {
    console.log(sendInvitation(guest));
});

guestList = [];
console.log("\nThe list is now empty:", guestList);

// Exercise 19: Dinner Guests

console.log(`\nNumber of people invited to dinner: ${guestList.length}`);


