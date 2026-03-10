<<<<<<< HEAD
//2.4 Variables
let admin, name;
name = "John";
admin = name;
alert( admin ); // "John"

let ourPlanetName = "Earth";
let currentUserName = "John";

//2.13 Loops: while and for
// Output prime numbers up to n = 10
let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }
  console.log( i ); // 2, 3, 5, 7
}

//2.14 The "switch" statement
// Rewrite "switch" into an "if"
let browser = 'Edge';
if (browser === 'Edge') {
  alert( "You've got the Edge!" );
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}

//.15 Functions
function min(a, b) {
  return a < b ? a : b;
}

function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

//2.17 Arrow functions
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
// Rewritten as arrow functions:
ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
=======
//2.4 Variables
let admin, name;
name = "John";
admin = name;
alert( admin ); // "John"

let ourPlanetName = "Earth";
let currentUserName = "John";

//2.13 Loops: while and for
// Output prime numbers up to n = 10
let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }
  console.log( i ); // 2, 3, 5, 7
}

//2.14 The "switch" statement
// Rewrite "switch" into an "if"
let browser = 'Edge';
if (browser === 'Edge') {
  alert( "You've got the Edge!" );
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}

//.15 Functions
function min(a, b) {
  return a < b ? a : b;
}

function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

//2.17 Arrow functions
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
// Rewritten as arrow functions:
ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
>>>>>>> 55e63d972fe763ca051aa3f346640e86dfbd13f6
);