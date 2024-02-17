/*Question 1 Instalations:
all done*/

import { listenerCount } from "stream";

//Question 2 personal messege:

let person= "abrish";
let persnol_messege= "hellow";
console.log(person+persnol_messege);


//Question 3 Name case:

let Name ="abrish";
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());
console.log(Name.charAt(0).toUpperCase()+Name.slice(1).toLowerCase());


//Question 4 famouse Quote: 

let Quote=" 'life is journey not a destination' ";
let Auther=  " Ralph Waldo Emerson,";
console.log(Auther+Quote);


//Question 5 Famous Quote 2:

  let famouse_person= "Mark Twain,";
  let messege= "Countniuos improvment is better then delayed perfection ";

  console.log(famouse_person+messege);

  
 //Question 6  : stripping names :

 let identity="\t \n kamran rathoor \t\n";
 console.log("identity with whitespace:" + identity);
 identity=identity.trim();
 console.log("idetity without whitespace:" + identity);

 //Question 7 Number Eight://
//Question 8 You should create four lines that look like this:

let a = 5;
let b = 3;
console.log("The addition is:"+(a+b));

let c= 11;
let d= 3;
console.log("the subtraction is"+(c-d));

let e= 2;
let f= 4;
console.log("the multiplication is "+(e*f));

let g= 16;
let h= 2;
console.log("the devision is" +(g/h));

// Question 9 Favorite Number: //

let favorite_number= 14;
let reveals= " is my favorite number";

console.log(favorite_number+reveals);

//Question 10 Adding Comments://

// (These all progrsams are written by Abrish rathoor);//
//(on the date 17 feb 2024 );//

// Question 11 Names://

 let Friends=["Madiha", "Arooba","Rafea","Maliha","Laiba"];
 for(let i = 0;i<Friends.length;i++)
 {console.log(Friends[i])};

 //Question 12 Greetings://

  let friends_names=["Madiha", "Arooba","Rafea","Maliha","Laiba"];
  for(let i = 0;i<friends_names.length;i++)
  {console.log("Hello" +friends_names[i]+"How are you")};

  //Question 13 Your Own Array: 

    let vehicles= ["Car","Bicycle","Motorcycle","Scooter"];
    for (let i =0; i < vehicles.length; i++)
    {console.log ("i would love to ride a "+ vehicles[i] + "someday!");
    }

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

console.log("The guest list is now empty:", guestList);

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

//Question 19 Guest list:

let _guestList = ["madiha", "arooba", "laiba"];
for (let guest of _guestList) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}
console.log(`Total number of people invited to dinner: ${_guestList.length}`);

//Question 20 Think of something you could store in a Aray;

let countries = ["USA", "Canada", "Australia", "Japan", "Brazil"];
let mountains = ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];
let rivers = ["Nile", "Amazon", "Mississippi", "Yangtze", "Ganges"];
console.log("List of countries:", countries);
console.log("List of mountains:", mountains);
console.log("List of rivers:", rivers);

//Question 21 Thing of something you could rite in typescript object:
// Define an object representing a mountain

let countriesInfo=[
   {country:"pakistan",captail:"Islamabad"},
   {country:"japan",captail:"Tokyo"},
   {country:"Unitedkingdom",captail:"London"},
];
console.log("countries and capitals: ",countriesInfo);

//Question 22 Intentinal erorr:

let vagetables=["potato","tomato","chilli"];
console.log(vagetables[3]);
console.log(vagetables[1]);

//Question 23 Conditional test :

let x = 5;
let y = 10;
let str1 = 'hello';
let str2 = 'world';
let isRainyDay = true;
let hasSunshine = false;

console.log("Is x less than y? I predict true.");
console.log(x < y);


console.log("Is x greater than y? I predict false.");
console.log(x > y);

console.log("Is str1 equal to str2? I predict false.");
console.log(str1 === str2);


console.log("Is str1 not equal to str2? I predict true.");
console.log(str1 !== str2);


console.log("Is it a rainy day? I predict true.");
console.log(isRainyDay);


console.log("Is it a sunny day? I predict false.");
console.log(hasSunshine);


console.log("Is it not a rainy day? I predict false.");
console.log(!isRainyDay);


console.log("Is it not a sunny day? I predict true.");
console.log(!hasSunshine);


console.log("Is x plus y equal to 15? I predict true.");
console.log(x + y === 15);


console.log("Is x minus y equal to -5? I predict false.");
console.log(x - y === -5);

//Question 24 More conditional test :

let a_ = 5;
let b_ = 10;
let c_ = 5;
let d_ = 15;
let e_ = 'hello';
let f_= 'world';


console.log("Is a equal to c? I predict true.");
console.log(a_ === c_);

console.log("Is b not equal to d? I predict true.");
console.log(b_ !== d_);


console.log("Is a less than or equal to c? I predict true.");
console.log(a_<= c_);


console.log("Is d greater than or equal to a? I predict true.");
console.log(d_ >= a_);


console.log("Is e equal to 'hello'? I predict true.");
console.log(e_ === 'hello');


console.log("Is f not equal to 'hello'? I predict true.");
console.log(f_!== 'hello');


console.log("Is a plus b equal to 15? I predict false.");
console.log(a_ + b_ === 15);


console.log("Is d minus c equal to 10? I predict true.");
console.log(d_ - c_=== 10);


console.log("Is the length of e greater than 5? I predict false.");
console.log(e_.length > 5);


console.log("Is the length of f less than 10? I predict true.");
console.log(f_.length < 10);

//Question 25 alien color#1:
//Question 26 alien color#2:
//Question 27 alien color#3:

// Exercise 25: Alien Colors #1
let alien_color_pass = 'green';
if (alien_color_pass === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
let alien_color_fail = 'yellow';
if (alien_color_fail === 'green') {
  
}
// Exercise 26: Alien Colors #2
let alien_color_if = 'green';
if (alien_color_if === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
    console.log("Congratulations! You just earned 10 points.");
}

let alien_color_else = 'red'; 
if (alien_color_else === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
    console.log("Congratulations! You just earned 10 points.");
}
// Exercise 27: Alien Colors #3
let alien_color_green = 'green';
if (alien_color_green === 'green') {
    console.log("Congratulations! You just earned 5 points.");
} else if (alien_color_green === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
} else if (alien_color_green === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
let alien_color_yellow = 'yellow';
if (alien_color_yellow === 'green') {
    console.log("Congratulations! You just earned 5 points.");
} else if (alien_color_yellow === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
} else if (alien_color_yellow === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}

let alien_color_red = 'red';
if (alien_color_red === 'green') {
    console.log("Congratulations! You just earned 5 points.");
} else if (alien_color_red === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
} else if (alien_color_red === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}

//Question 28 Stages of life :

let age = 30;
if (age < 2) {
  console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

//Question 29 Favrit fruit :

let favoriteFruits = ['apple', 'banana', 'orange', 'strawberry'];

if (favoriteFruits.includes('apple')) {
    console.log("I love apples!");
}

if (favoriteFruits.includes('banana')) {
    console.log("Bananas are one of my favorite fruits.");
}

if (favoriteFruits.includes('orange')) {
    console.log("Oranges are so refreshing!");
}

if (favoriteFruits.includes('strawberry')) {
    console.log("Strawberries are delicious!");
}

// Question 30 Hello admin:
let user_names = ['maliha', 'madiha', 'maria', 'marahila', 'maham'];
for (let username of user_names) {
  if (username === 'admin') {
      console.log("Hello admin, would you like to see a status report?");
  } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
  }
}

 //Question 31 No user:

  let usernames = ['ayesha', 'aqsa', 'amna', 'aiza', 'aima'];

if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let username of usernames) {
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}

// Remove all usernames
usernames = [];

if (usernames.length === 0) {
    console.log("We need to find some users!");
}

//Question 32 Cheking user:
let current_users = ['hania', 'alia', 'ayesha', 'aqsa', 'madiha'];
let new_users = ['marahila', 'moona', 'aimen', 'manal', 'riyaz'];

for (let new_user of new_users) {
    let is_duplicate = false;
    for (let current_user of current_users) {
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            is_duplicate = true;
            break;
        }
    }
    if (is_duplicate) {
        console.log(`The username "${new_user}" is not available. Please enter a new username.`);
    } else {
        console.log(`The username "${new_user}" is available.`);
    }
}

//Question 33 Ordinal Names :

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    let ordinal = '';
    if (number === 1) {
        ordinal = 'st';
    } else if (number === 2) {
        ordinal = 'nd';
    } else if (number === 3) {
        ordinal = 'rd';
    } else {
        ordinal = 'th';
    }
    console.log(`${number}${ordinal}`);
}

//Question 35 pizzas
let favoritePizzas = ['beaf', 'margherita', 'supreme'];

for (let pizza of favoritePizzas) {
  console.log(`I like ${pizza} pizza.`);
}

console.log("Pizza is one of my favorite foods, I really love it!");

//Question 35 Animals:

let animals = ['dog', 'cat', 'rabbit'];

for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");

//Question 36 Tishirts
//Question 37 Large tishirt


function make_shirt(size='Large',_message_='i love typescript') {
  console.log(`size: ${size} ,message ${_message_}`);
}
make_shirt()
make_shirt('Medium')
make_shirt('small','coustom Message');

//Question 38 Cities :
function describe_city(city: string, country: string = 'default country'): void {
  console.log(`${city} is in ${country}.`);
}

describe_city('Karachi', 'Pakistan');
describe_city('New York', 'USA');
describe_city('London');

//Question 39 city Names:

function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Tokyo', 'Japan'));
console.log(city_country('Paris', 'France'));

//Question 40 Album:
//Question 41 Megition:
//Question 42 Great magition:
//Question 43 Unchanged magition:

// Exercise 40
type Album = {
  artist: string;
  title: string;
  tracks?: number;
};

function make_album(artist: string, title: string, tracks?: number): Album {
  const album: Album = {
      artist: artist,
      title: title,
  };

  if (tracks !== undefined) {
      album.tracks = tracks;
  }

  return album;
}

const album1 = make_album('Artist1', 'Album Title 1');
const album2 = make_album('Artist2', 'Album Title 2', 12); // Including the number of tracks
const album3 = make_album('Artist3', 'Album Title 3');


console.log(album1);
console.log(album2);
console.log(album3);

// Exercise 41
function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
      console.log(magician);
  }
}


const magiciansArray = ['Magician1', 'Magician2', 'Magician3'];


show_magicians(magiciansArray);

// Exercise 42
function make_great(magicians: string[]): string[] {
  const greatMagicians = magicians.map((magician) => `the Great ${magician}`);
  return greatMagicians;
}

const greatMagiciansArray = make_great(magiciansArray);


show_magicians(greatMagiciansArray);

// Exercise 43

const originalMagiciansArray = [...magiciansArray];

const newGreatMagiciansArray = make_great([...originalMagiciansArray]);

console.log('Original Magicians:');
show_magicians(originalMagiciansArray);

console.log('Great Magicians:');
show_magicians(newGreatMagiciansArray);

//Question 44 Sandwichies:

function makeSandwich(...items: string[]): void {
  console.log("Making a sandwich with the following items:");
  for (const item of items) {
      console.log("- " + item);
  }
  console.log("Sandwich is ready!");
}

makeSandwich('bread', 'cheese', 'ham');
makeSandwich('bread', 'lettuce', 'tomato', 'bacon');
makeSandwich('bread', 'peanut butter', 'jelly');


//Question 45 Cars :
interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any; 
}

function createCar(manufacturer: string, model: string, ...options: [string, any][]): Car {
  let car: Car = { manufacturer, model };
  for (const [key, value] of options) {
      car[key] = value;
  }
  return car;
}

const myCar = createCar('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);
console.log(myCar);
