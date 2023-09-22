// // Q1
// var multidemarr = [];

// // Q2
// var matrix = [
//   [0, 1, 2, 3],
//   [2, 3, 1, 6],
//   [1, 5, 6, 8],
// ];

// console.log(matrix);

// // Q3

// for (var i = 1; i <= 10; i++) {
//   document.write("<h3>" + i + "<br></h3>");
// }

// // Q4

// var tableNumber = parseInt(prompt("Enter the number for the table:"));
// var tableLength = parseInt(prompt("Enter the length of the table:"));

// document.write("<h2>Multiplication Table for " + tableNumber + "</h2>");
// document.write("<ul>");

// for (var i = 1; i <= tableLength; i++) {
//   var result = tableNumber * i;
//   document.write("<li>" + tableNumber + " x " + i + " = " + result + "</li>");
// }

// document.write("</ul>");

// // Q5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// document.write("<h2>Fruits:</h2>");
// document.write("<ul>");

// for (var i = 0; i < fruits.length; i++) {
//   document.write("<h3><li>" + fruits[i] + "</li></h3>");
// }

// document.write("</ul>");
// document.write("<ul>");

// for (var i = 0; i < fruits.length; i++) {
//   document.write(
//     "<h3><li>Element at index " + i + " is " + fruits[i] + "</li></h3>"
//   );
// }

// // Q6

// function generatenumbers() {
//   var counting = [];
//   var reverseCounting = [];
//   var even = [];
//   var odd = [];
//   var series = [];

//   for (var i = 1; i <= 20; i++) {
//     counting.push(i);
//     reverseCounting.unshift(i);
//     if (i % 2 === 0) {
//       even.push(i);
//       series.push(i * 2 + "k");
//     } else {
//       odd.push(i);
//     }
//   }

//   document.write("<h2>Counting: " + counting.join(", ") + "</h2>");
//   document.write(
//     "<h2>Reverse counting: " + reverseCounting.join(", ") + "</h2>"
//   );
//   document.write("<h2>Even: " + even.join(", ") + "</h2>");
//   document.write("<h2>Odd: " + odd.join(", ") + "</h2>");
//   document.write("<h2>Series: " + series.join(", ") + "</h2>");
// }

// generatenumbers();

// // Q7

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search:");

// userInput = userInput.toLowerCase();

// var found = false;

// for (var i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === userInput) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   document.write("<h3>The item '" + userInput + "' is found in the list.</h3>");
// } else {
//   document.write(
//     "<h3>The item '" + userInput + "' is not found in the list.</h3>"
//   );
// }

// // Q8

// var A = [24, 53, 78, 91, 12];
// var largest = A[0];

// for (var i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i];
//   }
// }

// document.write("<h3>The largest number in the array is: " + largest + "</h3>");

// // Q9

// var B = [24, 53, 78, 91, 12];
// var smallest = B[0];

// for (var i = 1; i < B.length; i++) {
//   if (B[i] < smallest) {
//     smallest = B[i];
//   }
// }

// document.write("<h3>The largest number in the array is: " + smallest + "</h3>");

// // Q10

// var multiples = "";

// for (var i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     multiples += i;
//     if (i !== 100) {
//       multiples += ", ";
//     }
//   }
// }

// document.write("<p>" + multiples + "</p>");

// Q1

// var firstname = prompt("Enter your first name");
// var lastname = prompt("Enter your last name");

// var fullname = firstname + lastname;
// var greet = "Hello " + fullname + " Welcome to my Website";

// alert(greet);

// // Q2

// var favouritephone = prompt("Enter your Favourite phone model");
// var inputLength = favouritephone.length;

// document.write("<h3>My favourite is: " + favouritephone + "</h3>")
// document.write("<h3>The length of your input is: " + inputLength + "</h3>");

// // Q3

// var string = ("Pakistan");
// var indexofN = string.indexOf("n");

// document.write("<h3>The index of 'n' in the string '" + string + "' is: " + indexofN + "</h3>");

// // Q4

// var word = ("Hello World");
// var lastindexofl = word.lastIndexOf("l");

// document.write("<h3>The last index of 'l' in the word '" + word + "' is: " + lastindexofl + "</h3>");

// Q5

// var nationality = "Pakistani";
// var indexof3 = nationality.charAt(3);

// document.write("<h3>Character at index 3: " + indexof3 + "</h3>");

// // Q6

// var firstname = prompt("Enter your first name");
// var lastname = prompt("Enter your last name");
// var fullname = firstname.concat(" ", lastname);
// var greet = "Hello " + fullname + " Welcome to my Website";

// alert(greet);

// // Q7

// var city = "Hyderabad";
// var replacement = city.replace("Hyder", "Islam");

// document.write("<h3>City: " + city + "</h3>");
// document.write("<h3>After Replacement: " + replacement + "</h3>");

// // Q8

// var message =
//   "Ali and Sami are best friends. They play cricket and football together.";
// var replace = message.split("and").join("&");

// document.write("<h3>Original Message:</h3>");
// document.write("<h3>" + message + "</h3>");
// document.write("<h3>Replaced Message:</h3>");
// document.write("<h3>" + replace + "</h3>");

// // Q9

// var str = "472";
// var num = parseInt(str);

// document.write("<h3>Value: " + str + "</h3>");
// document.write("<h3>Type: " + typeof str + "</h3>");
// document.write("<h3>Value: " + num + "</h3>");
// document.write("<h3>Type: " + typeof num + "</h3>");

// // Q10

// var userInput = prompt("Please Enter");
// var transform = userInput.toUpperCase();

// document.write("<h3> User Input: " + userInput + "</h3>");
// document.write("<h3> Uppercase: " + transform + "</h3>");

// // Q11

// function toTitleCase(str) {
//   return str.replace(/\w\S*/g, function (txt) {
//     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//   });
// }

// var userInput = prompt("Please Enter");
// var transform = toTitleCase(userInput);

// document.write("<h3>Original Input: " + userInput + "</h3>");

// document.write("<h3>Title Case Input: " + transform + "</h3>");

// // Q12

// var num = 35.36;
// var numasString = num.toString().replace(".", "");

// document.write("<h3>Original Number: " + num + "</h3>");
// document.write("<h3>Modified String: " + numasString + "</h3>");

// Q13

// var username = prompt("Enter your username:");

// function containsSpecialSymbols(username) {
//   var specialSymbols = ["@", ".", ",", "!"];

//   for (var i = 0; i < username.length; i++) {
//     var charCode = username.charCodeAt(i);
//     if (specialSymbols.indexOf(username.charAt(i)) !== -1) {
//       return true;
//     }
//   }

//   return false;
// }

// if (containsSpecialSymbols(username)) {
//   alert("Please enter a valid username.");
// } else {
//   alert("Username is valid: " + username);
// }

// Q14

// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search:");

// function searchItem(arr, item) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i].toLowerCase() === item.toLowerCase()) {
//       return true;
//     }
//   }
//   return false;
// }

// if (searchItem(items, userInput)) {
//   alert("Yes, '" + userInput + "' is available in the list.");
// } else {
//   alert("No, '" + userInput + "' is not found in the list.");
// }

// Q15

// function validatePassword(password) {
//   var hasAlphabets = /[a-zA-Z]/.test(password);
//   var hasNumbers = /[0-9]/.test(password);
//   var doesNotStartWithNumber = /^[^0-9]/.test(password);
//   var isAtLeast6Characters = password.length >= 6;

//   return (
//     hasAlphabets && hasNumbers && doesNotStartWithNumber && isAtLeast6Characters
//   );
// }

// var userPassword = prompt("Enter a password:");

// if (validatePassword(userPassword)) {
//   alert("Password is valid.");
// } else {
//   alert("Password can not begin with a number.");
//   alert("Please enter a valid password");
// }

// Q16

var university = "University of Karachi";
var universityArray = university.split(" ");

document.write("<ul>");

for (var i = 0; i < university.length; i++) {
  var character = university.charAt(i);
  if (character !== " ") {
    document.write("<li>" + character + "</li>");
  }
}

document.write("</ul>");

// Q17

var userInput = prompt("Enter some text:");

if (userInput !== null && userInput !== "") {
  var lastCharacter = userInput.charAt(userInput.length - 1);

  alert("The last character of the input is: " + lastCharacter);
} else {
  alert("No input provided.");
}

// Q18

var inputString = "The quick brown fox jumps over the lazy dog";
var lowercaseInput = inputString.toLowerCase();
var wordToCount = "the";

function countOccurrences(input, word) {
  var words = input.split(" ");
  var count = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i] === word) {
      count++;
    }
  }

  return count;
}

var occurrences = countOccurrences(lowercaseInput, wordToCount);

alert(
  "The word '" +
    wordToCount +
    "' occurs " +
    occurrences +
    " times in the string."
);
