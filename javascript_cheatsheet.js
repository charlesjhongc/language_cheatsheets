// This is a cheat sheet which leveraging syntax highlighting, don't execute it
// String Quotes : single quote
// Style guide : Google JavaScript Style Guide

console.log('@@@@@@@@@@@@@@@@@@@@Section Breaker@@@@@@@@@@@@@@@@@@@@');
// [Object]
var sister = {
  name: 'Sarah',
  age: 23,
  parents: [ 'alice', 'andy' ],
  siblings: ['julia'],
  favoriteColor: 'purple',
  pets: true
};
/*
The syntax you see above is called object-literal notation.

Access an object:
  Bracket Notation : sister['parents']
  Dot Notation : sister.parents
*/
console.log('@@@@@@@@@@@@@@@@@@@@Section Breaker@@@@@@@@@@@@@@@@@@@@');
// [How to construct an object?]
function createNewPerson(name) {
  var obj = {};
  obj.name = name;
  obj.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
  return obj;
}
/*
This works well enough, but it is a bit long-winded
if we know we want to create an object, why do we need to explicitly
create a new empty object and return it?
*/
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}
/*
The constructor function is JavaScript's version of a class.
You'll notice that it has all the features you'd expect in a function,
although it doesn't return anything or explicitly create an object
it basically just defines properties and methods.

[Note]
A constructor function name usually starts with a capital letter
this convention is used to make constructor functions
easier to recognize in code.
*/
var person1 = new Person('Bob');
var person2 = new Person('Sarah');
console.log('@@@@@@@@@@@@@@@@@@@@Section Breaker@@@@@@@@@@@@@@@@@@@@');
// [Array]
var myarray = ['tree', 795, [0, 1, 2]];
/*
Access array:myarray[2]
myarray.length
*/
console.log('@@@@@@@@@@@@@@@@@@@@Section Breaker@@@@@@@@@@@@@@@@@@@@');
// [Functions and Anonymous Functions]
// Every JavaScript function is actually a Function object.
function myFunction() {
  alert('hello');
}
myFunction();


function() {
  alert('hello');
}
/*
This is called an anonymous function
it has no name! It also won't do anything on its own.
You will mainly use anonymous functions to just run a load of code in
response to an event firing
like a button being clicked using an event handler.
*/
var myGreeting = function() {
  alert('hello');
}// <----no;.....
myGreeting();
/*
You can also assign an anonymous function to be the value of a variable
*/
console.log('@@@@@@@@@@@@@@@@@@@@Section Breaker@@@@@@@@@@@@@@@@@@@@');
//this vs self




typeof();

var test = 10;
// 變數宣告不用給予型態

// string 可以比大小(每一個char的ascii number去比)

// Escaping characters using \ (backslash)

JavaScript is known as a loosely typed language.
Basically, this means that when you’re writing JavaScript code, you do not need to specify data types. Instead, when your code is interpreted by the JavaScript engine it will automatically be converted into the "appropriate" data type. This is called implicit type coercion and you’ve already seen examples like this before when you tried to concatenate strings with numbers.
Example : "Hello" + 5*10 => "Hello50"
Example : "1" == 1 >> true
Example : 0 == false >> true

DEFINITION: A strongly typed language is a programming language that is more likely to generate errors if data does not closely match an expected type. Because JavaScript is loosely typed, you don’t need to specify data types; however, this can lead to errors that are hard to diagnose due to implicit type coercion.


Strict equality
Instead, in JavaScript it’s better to use strict equality to see if numbers, strings, or booleans, etc. are identical in type and value without doing the type conversion first. To perform a strict comparison, simply add an additional equals sign = to the end of the == and != operators.




 A parameter is always going to be a variable name and appears in the function declaration. On the other hand, an argument is always going to be a value (i.e. any of the JavaScript data types - a number, a string, a boolean, etc.) and will always appear in the code when the function is called or invoked.



javascript has 3 kind of scope:global scope & function scope & block scope


Hoisting:執行前，函式、變數的宣告，在執行前，會自動調整位置到上方，因此不用擔心宣告位置是否有在使用之前，notice:Variable assignments are not hoisted.(不建議把玩這個feature.......)


var catSays = function(max) {
};
=====>>>>function expression.(instead of function declaratioin)
=====>>>>anonymous function ,a function with no name, and you've stored it in a variable called catSays.，事實上也是可以再給function name，但call的時候還是用var的名稱去call!!!!!!

!!!All function declarations are hoisted and loaded before the script is actually run. Function expressions are not hoisted, since they involve variable assignment, and only variable declarations are hoisted. The function expression will not be loaded until the interpreter reaches it in the script.



Functions as parameters
Being able to store a function in a variable makes it really simple to pass the function into another function. A function that is passed into another function is called a callback. Let's say you had a helloCat() function, and you wanted it to return "Hello" followed by a string of "meows" like you had with catSays. Well, rather than redoing all of your hard work, you can make helloCat() accept a callback function, and pass in catSays.

基本上，function expression/anonymous/function as parameters的用途就是inline function，有一種define的概念，針對只會被使用一次的function


foreach loop(注意,第一個arg只是copy，要改array內容還是要用arrary[i])
注意array.map用法，要return


JavaScript is single threaded, meaning that two bits of script cannot run at the same time; they have to run one after another.
