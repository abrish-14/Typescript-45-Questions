"use strict";
/*Question 1 Instalations:
all done*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
//Question 2 personal messege:
var person = "abrish";
var persnol_messege = "hellow";
console.log(person + persnol_messege);
//Question 3 Name case:
var Name = "abrish";
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());
console.log(Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase());
//Question 4 famouse Quote: 
var Quote = " 'life is journey not a destination' ";
var Auther = " Ralph Waldo Emerson,";
console.log(Auther + Quote);
//Question 5 Famous Quote 2:
var famouse_person = "Mark Twain,";
var messege = "Countniuos improvment is better then delayed perfection ";
console.log(famouse_person + messege);
//Question 6  : stripping names :
var identity = "\t \n kamran rathoor \t\n";
console.log("identity with whitespace:" + identity);
identity = identity.trim();
console.log("idetity without whitespace:" + identity);
//Question 7 Number Eight://
//Question 8 You should create four lines that look like this:
var a = 5;
var b = 3;
console.log("The addition is:" + (a + b));
var c = 11;
var d = 3;
console.log("the subtraction is" + (c - d));
var e = 2;
var f = 4;
console.log("the multiplication is " + (e * f));
var g = 16;
var h = 2;
console.log("the devision is" + (g / h));
// Question 9 Favorite Number: //
var favorite_number = 14;
var reveals = " is my favorite number";
console.log(favorite_number + reveals);
//Question 10 Adding Comments://
// (These all progrsams are written by Abrish rathoor);//
//(on the date 17 feb 2024 );//
// Question 11 Names://
var Friends = ["Madiha", "Arooba", "Rafea", "Maliha", "Laiba"];
for (var i = 0; i < Friends.length; i++) {
    console.log(Friends[i]);
}
;
//Question 12 Greetings://
var friends_names = ["Madiha", "Arooba", "Rafea", "Maliha", "Laiba"];
for (var i = 0; i < friends_names.length; i++) {
    console.log("Hello" + friends_names[i] + "How are you");
}
;
//Question 13 Your Own Array: 
var vehicles = ["Car", "Bicycle", "Motorcycle", "Scooter"];
for (var i = 0; i < vehicles.length; i++) {
    console.log("i would love to ride a " + vehicles[i] + "someday!");
}
//Question 14 guest list
//Question 15 changing guest list
//Question 16 more guest
//Question 17 shrinking guset list
var guestList = ["Aqsa", "amna", "rafia"];
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
console.log("amna can't make it to dinner.");
guestList[guestList.indexOf("amna")] = "madiha";
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
console.log("Great news! We found a bigger dinner table.");
guestList.unshift("maria");
guestList.splice(Math.ceil(guestList.length / 2), 0, "Nikola Tesla");
guestList.push("arooba");
for (var _b = 0, guestList_3 = guestList; _b < guestList_3.length; _b++) {
    var guest = guestList_3[_b];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
console.log("Sorry, we can only invite two people for dinner.");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner."));
}
for (var _c = 0, guestList_4 = guestList; _c < guestList_4.length; _c++) {
    var guest = guestList_4[_c];
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
}
guestList = [];
console.log("The guest list is now empty:", guestList);
//Question 18 Seeking the world:
var placesToVisit = ["Santorini", "Kyoto", "Machu Picchu", "Bora Bora", "Istanbul"];
console.log("Original Order:", placesToVisit);
console.log("Alphabetical Order:", __spreadArray([], placesToVisit, true).sort());
console.log("Original Order:", placesToVisit);
console.log("Reverse Alphabetical Order:", __spreadArray([], placesToVisit, true).sort().reverse());
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
var _guestList = ["madiha", "arooba", "laiba"];
for (var _d = 0, _guestList_1 = _guestList; _d < _guestList_1.length; _d++) {
    var guest = _guestList_1[_d];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
console.log("Total number of people invited to dinner: ".concat(_guestList.length));
//Question 20 Think of something you could store in a Aray;
var countries = ["USA", "Canada", "Australia", "Japan", "Brazil"];
var mountains = ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];
var rivers = ["Nile", "Amazon", "Mississippi", "Yangtze", "Ganges"];
console.log("List of countries:", countries);
console.log("List of mountains:", mountains);
console.log("List of rivers:", rivers);
//Question 21 Thing of something you could rite in typescript object:
// Define an object representing a mountain
var countriesInfo = [
    { country: "pakistan", captail: "Islamabad" },
    { country: "japan", captail: "Tokyo" },
    { country: "Unitedkingdom", captail: "London" },
];
console.log("countries and capitals: ", countriesInfo);
//Question 22 Intentinal erorr:
var vagetables = ["potato", "tomato", "chilli"];
console.log(vagetables[3]);
console.log(vagetables[1]);
//Question 23 Conditional test :
var x = 5;
var y = 10;
var str1 = 'hello';
var str2 = 'world';
var isRainyDay = true;
var hasSunshine = false;
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
var a_ = 5;
var b_ = 10;
var c_ = 5;
var d_ = 15;
var e_ = 'hello';
var f_ = 'world';
console.log("Is a equal to c? I predict true.");
console.log(a_ === c_);
console.log("Is b not equal to d? I predict true.");
console.log(b_ !== d_);
console.log("Is a less than or equal to c? I predict true.");
console.log(a_ <= c_);
console.log("Is d greater than or equal to a? I predict true.");
console.log(d_ >= a_);
console.log("Is e equal to 'hello'? I predict true.");
console.log(e_ === 'hello');
console.log("Is f not equal to 'hello'? I predict true.");
console.log(f_ !== 'hello');
console.log("Is a plus b equal to 15? I predict false.");
console.log(a_ + b_ === 15);
console.log("Is d minus c equal to 10? I predict true.");
console.log(d_ - c_ === 10);
console.log("Is the length of e greater than 5? I predict false.");
console.log(e_.length > 5);
console.log("Is the length of f less than 10? I predict true.");
console.log(f_.length < 10);
//Question 25 alien color#1:
//Question 26 alien color#2:
//Question 27 alien color#3:
// Exercise 25: Alien Colors #1
var alien_color_pass = 'green';
if (alien_color_pass === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
var alien_color_fail = 'yellow';
if (alien_color_fail === 'green') {
}
// Exercise 26: Alien Colors #2
var alien_color_if = 'green';
if (alien_color_if === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
var alien_color_else = 'red';
if (alien_color_else === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
// Exercise 27: Alien Colors #3
var alien_color_green = 'green';
if (alien_color_green === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (alien_color_green === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (alien_color_green === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
var alien_color_yellow = 'yellow';
if (alien_color_yellow === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (alien_color_yellow === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (alien_color_yellow === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
var alien_color_red = 'red';
if (alien_color_red === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (alien_color_red === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (alien_color_red === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
//Question 28 Stages of life :
var age = 30;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//Question 29 Favrit fruit :
var favoriteFruits = ['apple', 'banana', 'orange', 'strawberry'];
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
var user_names = ['maliha', 'madiha', 'maria', 'marahila', 'maham'];
for (var _e = 0, user_names_1 = user_names; _e < user_names_1.length; _e++) {
    var username = user_names_1[_e];
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
//Question 31 No user:
var usernames = ['ayesha', 'aqsa', 'amna', 'aiza', 'aima'];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _f = 0, usernames_1 = usernames; _f < usernames_1.length; _f++) {
        var username = usernames_1[_f];
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
// Remove all usernames
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
//Question 32 Cheking user:
var current_users = ['hania', 'alia', 'ayesha', 'aqsa', 'madiha'];
var new_users = ['marahila', 'moona', 'aimen', 'manal', 'riyaz'];
for (var _g = 0, new_users_1 = new_users; _g < new_users_1.length; _g++) {
    var new_user = new_users_1[_g];
    var is_duplicate = false;
    for (var _h = 0, current_users_1 = current_users; _h < current_users_1.length; _h++) {
        var current_user = current_users_1[_h];
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            is_duplicate = true;
            break;
        }
    }
    if (is_duplicate) {
        console.log("The username \"".concat(new_user, "\" is not available. Please enter a new username."));
    }
    else {
        console.log("The username \"".concat(new_user, "\" is available."));
    }
}
//Question 33 Ordinal Names :
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _j = 0, numbers_1 = numbers; _j < numbers_1.length; _j++) {
    var number = numbers_1[_j];
    var ordinal = '';
    if (number === 1) {
        ordinal = 'st';
    }
    else if (number === 2) {
        ordinal = 'nd';
    }
    else if (number === 3) {
        ordinal = 'rd';
    }
    else {
        ordinal = 'th';
    }
    console.log("".concat(number).concat(ordinal));
}
//Question 35 pizzas
var favoritePizzas = ['beaf', 'margherita', 'supreme'];
for (var _k = 0, favoritePizzas_1 = favoritePizzas; _k < favoritePizzas_1.length; _k++) {
    var pizza = favoritePizzas_1[_k];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("Pizza is one of my favorite foods, I really love it!");
//Question 35 Animals:
var animals = ['dog', 'cat', 'rabbit'];
for (var _l = 0, animals_1 = animals; _l < animals_1.length; _l++) {
    var animal = animals_1[_l];
    console.log("A ".concat(animal, " would make a great pet."));
}
console.log("Any of these animals would make a great pet!");
//Question 36 Tishirts
//Question 37 Large tishirt
function make_shirt(size, _message_) {
    if (size === void 0) { size = 'Large'; }
    if (_message_ === void 0) { _message_ = 'i love typescript'; }
    console.log("size: ".concat(size, " ,message ").concat(_message_));
}
make_shirt();
make_shirt('Medium');
make_shirt('small', 'coustom Message');
//Question 38 Cities :
function describe_city(city, country) {
    if (country === void 0) { country = 'default country'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city('Karachi', 'Pakistan');
describe_city('New York', 'USA');
describe_city('London');
//Question 39 city Names:
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Tokyo', 'Japan'));
console.log(city_country('Paris', 'France'));
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album('Artist1', 'Album Title 1');
var album2 = make_album('Artist2', 'Album Title 2', 12); // Including the number of tracks
var album3 = make_album('Artist3', 'Album Title 3');
console.log(album1);
console.log(album2);
console.log(album3);
// Exercise 41
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magiciansArray = ['Magician1', 'Magician2', 'Magician3'];
show_magicians(magiciansArray);
// Exercise 42
function make_great(magicians) {
    var greatMagicians = magicians.map(function (magician) { return "the Great ".concat(magician); });
    return greatMagicians;
}
var greatMagiciansArray = make_great(magiciansArray);
show_magicians(greatMagiciansArray);
// Exercise 43
var originalMagiciansArray = __spreadArray([], magiciansArray, true);
var newGreatMagiciansArray = make_great(__spreadArray([], originalMagiciansArray, true));
console.log('Original Magicians:');
show_magicians(originalMagiciansArray);
console.log('Great Magicians:');
show_magicians(newGreatMagiciansArray);
//Question 44 Sandwichies:
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- " + item);
    }
    console.log("Sandwich is ready!");
}
makeSandwich('bread', 'cheese', 'ham');
makeSandwich('bread', 'lettuce', 'tomato', 'bacon');
makeSandwich('bread', 'peanut butter', 'jelly');
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var _b = options_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
var myCar = createCar('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);
console.log(myCar);
