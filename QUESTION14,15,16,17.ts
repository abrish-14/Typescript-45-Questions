
//Question 14 guest list
//Question 15 changing guest list
//Question 16 more guest
//Question 17 shrinking guset list


let guestList = ["Aqsa", "amna", "rafia"];

for (let guest of guestList) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

console.log("amna can't make it to dinner.");

guestList[guestList.indexOf("amna")] = "madiha";

for (let guest of guestList) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

console.log("Great news! We found a bigger dinner table.");

guestList.unshift("maria");

guestList.splice(Math.ceil(guestList.length / 2), 0, "Nikola Tesla");

guestList.push("arooba");

for (let guest of guestList) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

console.log("Sorry, we can only invite two people for dinner.");

while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

for (let guest of guestList) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}
guestList = [];

console.log("The guest list is now empty:", guestList)