Basic command line -
  cmd - open command prompt
  cd - current location
  dir - to see all the files
  cd fileName - to enter a specific file
  cls- clean cmd
  cd ..- go up
  
  
spikker.js;
"USE STRICT MODE"
#message // to choose id
.message // to pick class
Number(); // turns inside result into a number
.concat() // merge arrays
.includes() // boolean if parameter is in object/array
.indexOf(); // where is it in an array
Math.trunc(); // gives a full number
Math.min(1, 2, 3, 4, 5); // = > 1
Math.max(1, 2, 3, 4, 5); // = > 5
Math.round(3.5); // ROUNDS NUMBER (4)
Math.floor(3.9); // ROUNDS DOWN
Math.ceil(3.1); /// ROUNDS UP
Math.random(); // 0 - 1
Math.floor(Math.random() * 6); // 0 - 5
Math.floor(Math.random() * 6) + 1; //1 - 6
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); // finds random number between min max
}
.date = new Date(); // CURRENT DATE
.forEach(); // PERFOMRS A FUCNTION FOR EACH ELEMENT IN AN ARRAy
-------------------------
.Map(); // PERFORMS  FUNCTION FOR EACH ELEMENT IN AN ARRAY, THEN STORES THE RETURNED VALUES IN A NEW ARRAY.
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]

const watchList = [
  {"Title": "Inception",
    "imdbRating": "8.8"},
  {"Title": "Interstellar",
   "Metascore": "74"
  }];

const ratings = watchList.map(item => ({
title: item["Title"],
rating: item["imdbRating"]
}));  
//output [{"title":"Inception","rating":"8.8"},{"title":"Interstellar","rating":"8.6"}];


.Filter(); // returns the elements of an array that meets a condition  specified in a function// array.filter(Boolean) = filters out non booleans from an array
.reduce(); // Reduces an array to a single value, the return vaue of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
.callback; // function passed as an argument to another function. Allows a function to invoke another function.
.document.querySelector('.class').textContent = 'text'; // DOM changing text in html, .value to change number type.
.Number(); // TO CHANGE TO A NUMBER VALUE IN DOM
.find()//method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undef is returned
.charAt(index)  // char at the argument position
object.assign(target, ...sources) //merge 2 objects and return a new   ///  object.assign({}, sources)  merges into new empty object

array.sort((a,b) => a-b) // to sort any array from smaller number to larger, b-a to sort from larger to smaller.


//DESTRUCTURING EXAMPLE
const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z)// 1, 2, 3
/////////////////////////////FUNCTION CONSTRUCTOR
function Dog() {
  this.name = "br";
  this.color = "green";
  this.numLegs = 4;
}
// Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object.
splice(start, deleteCount, item1 /*adds the item into the array*/ ) // splice syntax
let hound = new Dog();  // Creates hound object with Dog properties.
Dog.prototype.numLegs = 2; // add a new property
beagle.hasOwnProperty(property) // to check ownproperty prototypeProps // to check prototypeprops
Object.prototype.isPrototypeOf(Bird.prototype); //Object is a supertype for all objects in JavaScript.
Dog.prototype = Object.create(Animal.prototype); // instances of dog inherit from Animal
Bird.prototype.constructor = Bird; // reset so that all instances of bird will be constructed by bird not Animal
ChildObject.prototype.methodName = function() {...} // to set new unique function to childobject that was created from a parent

let glideMixin = (obj) => {
  obj.glide = () => {
    console.log('glide around');
  }
};
glideMixin(bird);
glideMixin(boat); // give unrelated objects same function. --------- MIXIN EXAMPLE
------------------------------------
let funModule =(()=> {
return {
 isCuteMixin : function(obj) {
  obj.isCute = function() {
    return true;
  };
},
  singMixin : function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
}}})();                   // creating a mixin module to keep all mixins
                                               
funModule.isCuteMixin(duck);
duck.iscute();            // Taking a property from a mixin module
                                               

                                               
                                               
----------------------------------------------------------------------------------------------------------------------------------------------------
____________________________________________________________________________________________________________________________________________________

                                               
player1El.classList.toggle('player--active');//automatically toggles either on or off
////////////////////////////////////////// TERNARY OPERATOR

function findGreaterOrEqual(a, b) {
  return a === b
    ? "a and b are equal"
    : a > b
    ? "a is greater"
    : "b is greater";
}

////////////////////////////////////////////////////////////////////////////////
/////////////////////////////SWITCH OPERATOR

let grade = "F";
switch (grade) {
  case "A":
    console.log("you did great");
    break;

  case "B":
    console.log("you did good");
    break;

  case "C":
    console.log("you did badly");
    break;

  default:
    console.log("teeb seda kui muud ei ole, default vastus");
}
///////////////////////////////////////////////////////////

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};
////////////SUM TAKES IN ANY NUMBER OF ARGUMENTS AND RETURNS THEIR SUM


////////////      ES6 DESTRUCTURING

const user = { name: "John Doe", age: 34 };

const name = user.name;
/* => */ const { name, age } = user;
const age = user.age;

/////////////////////////////////////////////////////////
////////////// MAP FUNCTION

let storeUSD = [5, 6, 7, 8, 9];
function toEuros(value) {
  value *= 0.85;
  return value;
}
let storeEUR = storeUSD.map(toEuros); // makes a new array , the old one stays

/////////////////////////////////////////////////////////////////////
//////////////DESTRUCTURING ASSIGN VARIABLES FROM NESTED OBJECTS

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};
const {
  today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST; //assign an object properties' values to variables with different names

////////////////////////////////////////////////////////////////////////
/////////////////////////// FILTER OPERATOR
let students = [15, 17, 18, 19, 20];

function checkAge(age) {
  if (age >= 18) {
    return age;
  }
}
let adultStudents = students.filter(checkAge); // adds over 18 students to a new array. MAP brings all , filter only specified by the function.
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
/*Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

Use an iterator method (any kind of loop) to get the desired output (shown below). */

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  const failureItems = arr.map(
    (item) => `<li class="text-warning">${item}</li>`
  );
  return failureItems;
}
const failuresList = makeList(result.failure);
///////////////////////////////////////////////////////////////////////
/////////FUNCTION DECLARATION

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

//////////FUNCTION EXPRESSION

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age1 = calcAge1(1991);

///////////ARROW FUNCTION

const calcAge3 = (birthYear) => 2037 - birthYear;
console.log(calcAge3(1994));
2;
/// multiple parameter arrow function
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // until retirement
  return `${firstName} retires in ${retirement} years`;
};

/////////////////////////////////////////////////////////////////////////
///// WHILE LOOP, USE IT IF YOU DON'T KNOW HOW MANY ITERRATIONS A LOOP WILL HAVE.

let rep = 1;
while (rep <= 10) {
  console.log(`pointless string text ${rep}`);
  rep++; // RUNDS 1 TO 10 SAME TEXT
}
/////////////////////////////////////////////////////////////////////////

let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice); // random number between 0 - 6

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1; // if dice is different from 6 console log and do continue loop, if rnadom number is 6 the loop stops
  if (dice === 6) console.log(`loop is about to end`);
}
//////////////////////////////////////////////////////////////////////////
/////// IN OPERATOR   -   The in operator returns true if the specified property is in the specified object or its prototype chain.

const car = { make: 'Honda', model: 'Accord', year: 1998 };

console.log('make' in car);
// expected output: true
///////////////////////////////////////////    generate number >= myMin and <= myMax
(myMin, myMax) => {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}
/* 1)   Math.random() = 0.8244326990411024
2)  (myMax - myMin + 1) = 10 - 1 + 1 -> 10
3)  a * b = 8.244326990411024
4)  c + myMin = 9.244326990411024
5)  Math.floor(9.244326990411024) = 9 */


///////////////////////////////////////////////////////////////////////////
///REVERSING A STRING
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");


////////////////////////////////////////////////////////////////////////////
//////SLICE METHOD

function truncateString(str, num) {
  
  return str.length > num ? str.slice(0, num) + '...' : str;
}

console.log(truncateString('Peter Piper picked a peck of pickled peppers', 11));


////////////////////////////////////////////////////////////////////

//FIND THE LONGEST WORD IN A SENTENCE, LOG THE LENGTH
function findLongestWordLength(str) {
  let words = str.split('');
  let longestWord = 0;
 
 for (let i = 0; i < words.length; i++) {
 if (words[i].length > longestWord) {
 longestWord = words[i].length;
   }
  }
  return longestWord;
 }
 
 findLongestWordLength("The quick brown fox jumped over the lazy dog")

//////////////////////////

 function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}

////////////////////////////////////////////////
//REPEAT A STRING

function repeatStringNumTimes(str, num) {
  let repeatingString = "";
  for ( let i = 0; i < num; i++) {
    repeatingString += str;
  }
  return repeatingString;
}
repeatStringNumTimes("abc", 3);
/////////////

function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}


///////////////////////////////////////////////
// IN OPERATOR   -   Return the provided string with the first letter of each word capitalized. rest of the word is in lower case.

function titleCase(str) {
  let splitStr = str.split(" ");
  let newArray = [];

  for ( let n in splitStr) {
    newArray[n] = splitStr[n][0].toUpperCase() + splitStr[n].slice(1).toLowerCase();
  }
  return newArray.join(" ");

}

titleCase("I'm a little tea pot");
//////////////////////////////////////////////////////////////////////////////////
/// adding an array into another from a specific point
function frankenSplice(arr1, arr2, n) {
let newArray = arr2.slice();
newArray.splice(n, 0, ...arr1)
return newArray;


};


console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


//////////////////////////////////////////////////////////////////////////////////////
//  arranging an array and returning the index where the num fits

function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}
-----
function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

///////////////////////////////    TURNING SINGLE ARRAY INTO 2 TIMENSIONAL with for loop

function chunkArrayInGroups(arr, size) {
  let newArray = [];
  for (let i = 0; i < arr.length; i+= size) {
    newArray.push(arr.slice(i, i + size));
  }
return newArray;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

//-------------- WITH WHILE

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
