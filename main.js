var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//  task 2
console.log("hello world");
//  Task 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "nazar baloch";
// step1 lowercase name
var LowercaseName = personName.toLowerCase();
console.log(LowercaseName);
// step2 Uppercase Name
var uppercaseName = personName.toUpperCase();
console.log(uppercaseName);
// step3 littlecase Name
var words = personName.split(" ");
var titlecaseName = "";
for (var i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecaseName);
/* task4 . Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
following, including the quotation marks:
Albert Einstein once said, “A person who never made a mistake never tried anything new.”
 # Getting Started Exercises with TypeScript and Node.js*/
console.log('once Quaid e Azam Muhammad Ali Jinnah Said "Think 100 times before yoy take a decision, But once that decision is taken, stand by it as a man."');
// task5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Quaid e Azam Muhammad Ali Jinnah";
var message = famous_person + ' once Said, "Think 100 times before yoy take a decision, But once that decision is taken, stand by it as a man."';
console.log(message);
// task6 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var personName1 = ("\t Nazar Ali \n");
console.log("Name with whitespace:", personName1);
var strippedName = personName1.trim();
console.log("strippedName:", strippedName);
// task7 Number Eight: Write addition, subtraction, multiplication, and division operations that
//  each result in the number 8. Be sure to enclose your operations in print statements to see the results. 
// addition:
var additionResult = 4 + 4;
console.log("additionResult: " + additionResult);
// substraction:
var subtractionResult = 12 - 4;
console.log("SubtractionResult:" + subtractionResult);
// multiplication:
var multplicationResult = 2 * 4;
console.log("MultiplicationResult:" + multplicationResult);
// division:
var divisionResult = 64 / 8;
console.log("DivisionResult:" + divisionResult);
// Task8 You should create four lines that look like this:
// _____________________________________________
console.log(5 + 3);
// _____________________________________________
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log("-".repeat(80));
console.log(5 + 3);
console.log("-".repeat(80));
console.log(12 - 4);
console.log("-".repeat(80));
console.log(2 * 4);
console.log("-".repeat(80));
console.log(64 / 8);
// Task 9 Favorite Number: Store your favorite number in a variable. Then, using that variable, 
// create a message that reveals your favorite number. Print that message.
var favoriteNumber = 100;
var message1 = "my favourite number is ".concat(favoriteNumber);
console.log(message1);
// task 10 Adding Comments: Choose two of the programs you’ve written, and add at least one comment
//  to each. If you don’t have anything specific to write because your programs are too simple at 
//  this point, just add your name and the current date at the top of each program file. Then write one
//   sentence describing what the program does.
console.log("Nazar Ali:" + "17/2/2024");
console.log('once Quaid e Azam Muhammad Ali Jinnah Said "Think 100 times before yoy take a decision, But once that decision is taken, stand by it as a man."');
console.log("Nazar Ali:" + "17/2/2024");
var favoriteNumber1 = 100;
var message2 = "my favourite number is ".concat(favoriteNumber);
console.log(message2);
// Task 11 . Names: Store the names of a few of your friends in a array called names. Print each person’s
//  name by accessing each element in the list, one at a time.
var names = ['Shahid', 'Noman', 'Parvaiz', 'Siraj'];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
// tak12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each
//  person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.
var names1 = ['Shahid', 'Noman', 'Parvaiz', 'Siraj'];
for (var _i = 0, names1_1 = names1; _i < names1_1.length; _i++) {
    var name_1 = names1_1[_i];
    // print a personalize message for each
    console.log("Assalam o alaikum ".concat(name_1, " I hope you are fine where are you"));
}
// Task 13 . Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
//  and make a list that stores several examples. Use your list to print a series of statements about these
//   items, such as “I would like to own a Honda motorcycle.”
function favoriteTransportation(transport, brand) {
    console.log("I would like to own a ".concat(transport, " ").concat(brand));
}
;
favoriteTransportation("Motorcycle", "Honda");
favoriteTransportation("car", "rolsroie");
favoriteTransportation("bicycle", "sohrab");
// Task 14 . Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//  Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ['Shahid', 'Noman', 'Parvaiz', 'Siraj'];
for (var _a = 0, guestList_1 = guestList; _a < guestList_1.length; _a++) {
    var name_2 = guestList_1[_a];
    //  print a personalize message for each
    console.log("Assalam o alaikum ".concat(name_2, " I hope today night you will join dinner with us"));
}
// Task 15 Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.
// step1
var guestList1 = ['Shahid', 'Noman', 'Parvaiz', 'Siraj'];
for (var _b = 0, guestList1_1 = guestList1; _b < guestList1_1.length; _b++) {
    var name_3 = guestList1_1[_b];
    //  print a personalize message for each
    console.log("Assalam o alaikum ".concat(name_3, " I hope today night you will join dinner with us"));
}
// step2
var guestListcannotmake = ['Siraj'];
for (var _c = 0, guestListcannotmake_1 = guestListcannotmake; _c < guestListcannotmake_1.length; _c++) {
    var name_4 = guestListcannotmake_1[_c];
    //  print a personalize message for each
    console.log("Assalam o alaikum ".concat(name_4, " can not make dinner with us"));
}
// step3
var newGuest = ['SanaUllah'];
for (var _d = 0, newGuest_1 = newGuest; _d < newGuest_1.length; _d++) {
    var name_5 = newGuest_1[_d];
    //  print a personalize message for each
    console.log("Assalam o alaikum ".concat(name_5, " I hope today night you will join dinner with us"));
}
//   step4
var finalguestList = ['Shahid', 'Noman', 'Parvaiz', 'SanaUllah'];
for (var _e = 0, finalguestList_1 = finalguestList; _e < finalguestList_1.length; _e++) {
    var name_6 = finalguestList_1[_e];
    //  print a personalize message for each
    console.log("Assalam o alaikum ".concat(name_6, " I hope today night you will join dinner with us"));
}
// Task 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
var guestList2 = ['Shahid', 'Noman', 'Siraj'];
for (var _f = 0, guestList2_1 = guestList2; _f < guestList2_1.length; _f++) {
    var guest = guestList2_1[_f];
    //  print a personalize message for each
    console.log("Assalam o Alaikum ".concat(guest, "  we found a bigger dinner table"));
}
// step2
var newGuestslist = ['SanaUllah', 'Yaseen', 'Asif'];
for (var _g = 0, newGuestslist_1 = newGuestslist; _g < newGuestslist_1.length; _g++) {
    var name_7 = newGuestslist_1[_g];
    console.log("".concat(name_7));
}
// step3 Add one new guest to the beginning of your array.
var newGuestAtBeginning = "Sana Ullah";
guestList.unshift(newGuestAtBeginning);
console.log(guestList);
var newGuestInMiddle = "Yaseen";
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestInMiddle);
console.log(guestList);
var newGuestAtEnd = "Asif";
guestList.push(newGuestAtEnd);
console.log(guestList);
// Task 17 . More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
var guestList3 = ['Shahid', 'Noman', 'Parvaiz', 'SanaUllah'];
// step 1  More Guests: You just found a bigger dinner table, so now more space is
for (var _h = 0, guestList3_1 = guestList3; _h < guestList3_1.length; _h++) {
    var guest = guestList3_1[_h];
    console.log("Assalam o alaikum, ".concat(guest, ", we found a bigger dinner table"));
}
// step2 Add one new guest to the beginning of your array.
var newGuestAtBeginning1 = "Nabi Dost";
guestList.unshift(newGuestAtBeginning1);
console.log(guestList);
// step 3  • Add one new guest to the middle of your array.
var newGuestInMiddle1 = "Asif Nawaz";
var middleIndex1 = Math.floor(guestList.length / 2);
guestList3.splice(middleIndex, 0, newGuestInMiddle1);
console.log(guestList3);
// step 4 Use append() to add one new guest to the end of your list.
var newGuestAtEnd1 = "Meer Dost";
guestList.push(newGuestAtEnd1);
console.log(guestList1);
// step 5 Print a new set of invitation messages, one for each person in your list.
console.log("New set of invitiation message");
for (var _j = 0, guestList_2 = guestList; _j < guestList_2.length; _j++) {
    var guest = guestList_2[_j];
    console.log("Assalam o alaikum ".concat(guest, " i hope you all you accept my invitiation"));
}
// Task 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its
// order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// step 1 Think of at least five places in the world you’d like to visit
var travelDestinations = ["Madina Munwara", "Iraq", "Iran", "Singa pur", "England"];
// step 2 Store the locations in a array. Make sure the array is not in alphabetical order. Print your array in its original order.
console.log("Original order:");
console.log(travelDestinations);
// step 3 Print your array in alphabetical order without modifying the actual list.
console.log("/n alphabetical order without modifying the actual list ");
console.log(__spreadArray([], travelDestinations, true).sort());
// step 4 Show that your array is still in its original order by printing it again.
console.log("\n showing that array is still in its original order");
console.log(travelDestinations);
// Step 5  Reverse the order of your list. Print the array to show that its
// order has changed.
console.log("\n showing that order has changed");
console.log(__spreadArray([], travelDestinations, true).sort());
// step 6  Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\n showing that array is still in its original order");
console.log(travelDestinations);
// step 7  Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\n showing that order has changed");
console.log(__spreadArray([], travelDestinations, true).sort());
// step 8 Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\n showing that array is still in reverse alphabetical order");
console.log(travelDestinations);
// Task 19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.
var numberOfDinnerGuests = 6;
var message3 = "numberOfDinnerGuests is ".concat(numberOfDinnerGuests);
console.log(message3);
// Task 20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, 
// languages, or anything else you’d like. Write a program that creates a list containing these items.
var countriesILike = ["Madina Munwara", "Iraq", "Iran", "Singa pur", "England"];
console.log(countriesILike);
// Task 21. They think of something you could store in a TypeScript Object. Write a program
//  that creates Objects containing these items. 
var personInfo = { name: "Nazar Baloch", Sex: "male", age: 18, education: "intermidiate" };
console.log(personInfo);
// task 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program. 
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//  console.log( days{7})
console.log(days[6]);
// Task 23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// step 1 
var car = 'subaru';
// step 2
console.log("Is car == 'subaru'? I predict True.");
// step 3
console.log(car == 'subaru');
// final step  • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
console.log("Is car! == 'Subaru'? I predict True.");
console.log(car == 'Subaru');
console.log("Is car == 'SUBARU'? I predict True.");
console.log(car == 'SUBARU');
console.log("Is car == 'kia'? I predict True.");
console.log(car == 'kia');
console.log("car.length == 6? predict true.");
console.log(car.length == 6);
console.log("car.length! == 10? predict true.");
console.log(car.length !== 10);
console.log("is 34 > 23 ? predict true.");
console.log(34 > 23);
console.log(" 58 < 30? i predict true.");
console.log(58 < 30);
console.log(" 20 > 13? i predict true");
console.log(20 > 13);
console.log("24 > 29? i predict true");
console.log(24 > 29);
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// step 1  Tests for equality and inequality with strings
var str1 = "Nazar Sahab";
var str2 = "nazar sahab";
console.log("str1 === str2");
// //  step 2 Tests using the lower case function tsx function
var text1 = "HAZART ALI KARAM ULLAH";
var text2 = "HAZART ALI KARAM ULLAH";
console.log(text1.toLowerCase() === text2);
// step 3  • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less 
// than or equal to
var num1 = 26;
var num2 = 15;
console.log("num1 === num2");
console.log("num1 != num2");
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
// step 4  Tests using "and" and "or" operators
var a = 12;
var b = 90;
var c = 29;
console.log(a > b && b > c);
console.log(a < b || b > c);
console.log(a > b || b < c);
console.log(a < b && b > c);
// step 5 Test whether an item is in a array
var vehicles = ['kia', 'Altu', 'Toyota GLI', 'Mehran'];
console.log(vehicles.includes('Toyota GLI'));
console.log(vehicles.includes('XLI'));
// final step Test whether an item is not in a array
var person = ['Ali', 'Kashif', 'Khuram', 'Muhammad Nawaz'];
console.log(person.includes('Muhammad Nawaz'));
console.log(person.includes('Ali Muhammad'));
// Task 25 Alien Colors #1: Imagine an alien was just shot down in a game.
// Create a variable called alien_color and assign it a value of 'green',
// 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. 
// If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another
// that fails. (The version that fails will have no output.)
// step 1 Create a variable called alien_color and assign it a value of 'green',
// 'yellow', or 'red'.
// 1st version
var alien_color = 'green';
if (alien_color == 'green') {
    console.log("congratulations you have earned 5 points");
}
// 2nd version
alien_color = 'yellow';
if (alien_color == 'yellow') {
    console.log("congratulations you have earned 5 points");
}
// 3rd version 
alien_color = 'yellow';
if (alien_color == 'yellow') {
    console.log("congratulations you have earned 5 points");
}
;
// Tak 26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// 1st version to show if statement
var alien_color1 = 'green';
if (alien_color1 == 'green') {
    console.log("congratulations you have earned 5 points for shooting the alien.");
}
else {
    console.log(" the player just earned 10 points for shooting the alien.");
}
;
// 2nd version to show 1st version
alien_color = 'yellow';
if (alien_color == 'green') {
    console.log("congratulations you have earned 5 points for shooting the alien.");
}
else {
    console.log(" the player just earned 15 points for shooting the alien.");
}
;
// Task 27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// 1st version If the alien is green, print a message that the player earned 5 points.
var alien_color2 = 'green';
if (alien_color2 == 'green') {
    console.log("congratulations you have earned 5 points for shooting the alien.");
}
else {
    console.log(" the player just earned 10 points for shooting the alien.");
}
;
// 2nd version If the alien is yellow, print a message that the player earned 10 points.
alien_color = 'yellow';
if (alien_color == 'green') {
    console.log("congratulations you have earned 10 points for shooting the alien.");
}
else {
    console.log(" the player just earned 10 points for shooting the alien.");
}
;
// 3rd version If the alien is yellow, print a message that the player earned 10 points.
alien_color = 'red';
if (alien_color == 'green') {
    console.log("congratulations you have earned 5 points for shooting the alien.");
}
else {
    console.log(" the player just earned 15 points for shooting the alien.");
}
// Task 29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for\
//  certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the 
// if block should print a statement,
// such as You really like bananas!
var favoriteFruits = ["cherry", "blue berry", "apple", "Bananas", "Olive"];
if (favoriteFruits.includes('cherry')) {
    console.log("I enjoy to eat cherry");
}
if (favoriteFruits.includes('blue berry')) {
    console.log("I like to eat blue berry");
}
if (favoriteFruits.includes('apple')) {
    console.log("I like  apple");
}
if (favoriteFruits.includes('Olive')) {
    console.log("I love to eat Olive");
}
if (favoriteFruits.includes('Bananas')) {
    console.log("I like to eat Bananas");
}
// Task 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var users = ["admin", "Muhammad Ali", "Karam Ali", "Shah Ali", "Nazar Ali"];
for (var _k = 0, users_1 = users; _k < users_1.length; _k++) {
    var user = users_1[_k];
    if (user === "admin") {
        console.log('Hello admin, would you like to see a status report? ');
    }
    else {
        console.log("Hello ".concat(user, ", Thank you for logging in again"));
    }
}
//Task 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed
var users1 = ["admin", "Muhammad Ali", "Karam Ali", "Shah Ali", "Nazar Ali"];
if (users1.length === 0) {
    console.log('We need to find some users!');
    for (var _l = 0, users1_1 = users1; _l < users1_1.length; _l++) {
        var user = users1_1[_l];
        if (user === "admin") {
            console.log("hello ".concat(user, " would you like to see a status report?"));
        }
    }
}
users1 = [];
if (users1.length === 0) {
    console.log('We need to find some users!');
}
// Task 32 . Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will 
// need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_user = ["Waleed", "Abdullah", "Shafique", "Nomi", "Rehman"];
var new_users = ["Rehman", "Ahmed", "Nomi", "Mujtaba", "Sadiq"];
var current_user_lower = current_user.map(function (user) { return user.toLowerCase(); });
for (var _m = 0, new_users_1 = new_users; _m < new_users_1.length; _m++) {
    var new_user = new_users_1[_m];
    if (current_user_lower.includes(new_user.toLowerCase())) {
        console.log("sorry ".concat(new_user, ", the name is is taken."));
    }
    else {
        console.log("yes ".concat(new_user, ", is available"));
    }
}
//Task 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, 
// except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read
//  "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _o = 0, numbers_1 = numbers; _o < numbers_1.length; _o++) {
    var number = numbers_1[_o];
    if (number === 1) {
        console.log("".concat(number, "st"));
    }
    else if (number === 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(number, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
}
// Task 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.
// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!
var favourite_pizza = ['Detroit-style Pizza', 'California-style Pizza', 'Miami / Cuban Pizza'];
for (var _p = 0, favourite_pizza_1 = favourite_pizza; _p < favourite_pizza_1.length; _p++) {
    var pizza = favourite_pizza_1[_p];
    console.log(pizza);
}
console.log("\n");
for (var _q = 0, favourite_pizza_2 = favourite_pizza; _q < favourite_pizza_2.length; _q++) {
    var pizza = favourite_pizza_2[_q];
    console.log("I really love to eat ".concat(pizza));
}
console.log("\n I really like pizza!");
//Task 35.  Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!
var animals = ['snake', 'pig', 'lion'];
for (var _r = 0, animals_1 = animals; _r < animals_1.length; _r++) {
    var animal = animals_1[_r];
    console.log(animal);
}
for (var _s = 0, animals_2 = animals; _s < animals_2.length; _s++) {
    var animal = animals_2[_s];
    console.log("".concat(animal, " is hard to make it pet"));
}
for (var _t = 0, animals_3 = animals; _t < animals_3.length; _t++) {
    var animal = animals_3[_t];
    console.log("".concat(animal, " always harms human being"));
}
console.log("\n all of these animals are hard to make these pet but i like lion");
// Task 36 . T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
function makeShirt(size, text) {
    console.log("\n shirt ".concat(size, " printed ").concat(text));
}
makeShirt('large', "i love you Father");
makeShirt('extra largr', "I love you mom");
// Task 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function makeShirt1(size, text) {
    console.log("\n your shirt size is ".concat(size, " printed ").concat(text));
}
makeShirt('large', "i love you type script");
makeShirt('medium', "I love my life");
makeShirt('extra largr', "I love you mom");
// Task 38. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
function describe_city(city, country) {
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Karachi", "Pakistan");
describe_city("kashmore", "Sindh");
// Task 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned.
function city_country(city, country) {
    console.log("\"".concat(city, ", ").concat(country, "\""));
}
city_country("Karachi", "Pakistan");
city_country("france", "England");
city_country("Riyadh", "Saudia");
// Task40.
// Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.
function make_album(artist, title) {
    var dictionaries = {
        title: title.charAt(0).toUpperCase() + title.slice(1),
        artist: artist.charAt(0).toUpperCase() + artist.slice(1)
    };
    return dictionaries;
}
var album = make_album("Fahad Mustafa", "Actor in law");
console.log(album);
album = make_album("Nabi Dost", "Light");
console.log(album);
album = make_album("Dr Munwar", "Funny");
console.log(album);
// Task 41.
// Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
var magiciansnames = ['Doug Henning (Canadian) (1947-2000)', 'Siegfried & Roy (German / American)', ' Max Maven (American) (1950-2022)', 'Eugene Burger (American) (1939-2017)', 'David Copperfield (American) (born 1956)'];
for (var _u = 0, magiciansnames_1 = magiciansnames; _u < magiciansnames_1.length; _u++) {
    var magicianname = magiciansnames_1[_u];
    console.log("".concat(magicianname));
}
// Task 42. "use strict";
// Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
var magiciansNames1 = ['Doug Henning (Canadian) (1947-2000)', 'Siegfried & Roy (German / American)', ' Max Maven (American) (1950-2022)', 'Eugene Burger (American) (1939-2017)', 'David Copperfield (American) (born 1956)'];
function show_magicians(Magicians) {
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) {
        var list = Magicians_1[_i];
        console.log("".concat(list));
    }
}
function make_great(magicians) {
    var great_magicians = magicians.map(function (magician) { return "Hello ".concat(magician); });
    return great_magicians;
}
var greatmagicianNames = make_great(magiciansNames1);
console.log("original magicians:");
show_magicians(magiciansNames1);
console.log("\n original magicians:");
show_magicians(greatmagicianNames);
// Task 43. 
// . Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
var magicians = ['Doug Henning (Canadian) (1947-2000)', 'Siegfried & Roy (German / American)', ' Max Maven (American) (1950-2022)', 'Eugene Burger (American) (1939-2017)', 'David Copperfield (American) (born 1956)'];
for (var _v = 0, magicians_1 = magicians; _v < magicians_1.length; _v++) {
    var magician = magicians_1[_v];
    console.log("Hello ".concat(magician, " I hope that you all are fine"));
}
// Task 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
function makeSanwichs() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("sandwhichs summary:");
    if (item.length === 0) {
        console.log("-You ardered an empty sandwich please order some items.");
    }
    else {
        item.forEach(function (item, i) {
            console.log(" ".concat(i + 1, ". ").concat(item));
        });
    }
    console.log("\n");
}
makeSanwichs("Veggie", "Hummus");
makeSanwichs("Chickpea Salad", "Cream Cheese");
makeSanwichs("White Bean", "Avocado");
makeSanwichs("Pickle Sub", "Turkey & Cheddar");
// Task 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.
function createCar(manufacturer, model) {
    var properties = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        properties[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (var _a = 0, properties_1 = properties; _a < properties_1.length; _a++) {
        var _b = properties_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
var mycar = createCar("Kia", "Toyota", ["color", "White"], ["optionalFeatures", "bloutProof"]);
console.log(mycar);
