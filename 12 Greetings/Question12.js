/*Question 12Greetings: Start with the array you used in Exercise 11,
 but instead of just printing each person’s name, print a message to them.
 The text of each message should be the same, but each message should be personalized
 with the person’s name.*/
var Girls = ["Madiha", "Rafea", "Maliha", "Alia"];
for (var i = 0; i < Girls.length; i++) {
    console.log("Hello, ".concat([i], "!Girls Have a great day!"));
}
