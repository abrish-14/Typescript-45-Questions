/*Question 4Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s
 name in a variable called famous_person. Then compose your message and
  store it in a new variable called message. Print your message.*/
var famousPerson = "Albert Einstein";
var quote = "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.";
var message = "\"".concat(quote, "\" - ").concat(famousPerson);
console.log(message);
