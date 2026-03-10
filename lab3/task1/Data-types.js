// 5.2 Numbers
function random(min, max) {
  return min + Math.random() * (max - min);
}

function randomInteger(min, max) {
  let rand = min + 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

// 5.3 Strings
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

function extractCurrencyValue(str) {
  return +str.slice(1);
}

// 5.4 Arrays
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log( styles.shift() );
styles.unshift("Rap", "Reggae");

function sumInput() {
  let numbers = [];
  while (true) {
    let value = prompt("A number please?", 0);
    if (value === "" || value === null || !isFinite(value)) break;
    numbers.push(+value);
  }
  let sum = 0;
  for (let number of numbers) sum += number;
  return sum;
}

// 5.5 Array methods
function camelize(str) {
  return str
    .split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}

function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

function copySorted(arr) {
  return arr.slice().sort();
}

function sortByAge(users) {
  users.sort((a, b) => a.age - b.age);
}

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

function unique(arr) {
  return Array.from(new Set(arr));
}

// 5.7 Map and Set
function aclean(arr) {
  let map = new Map();
  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }
  return Array.from(map.values());
}

// 5.10 Destructuring assignment
let userObj = { name: "John", years: 30 };
let {name: n, years: age, isAdmin = false} = userObj;

function topSalary(salaries) {
  let maxSalary = 0;
  let maxName = null;
  for(let [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }
  return maxName;
}

// 5.11 Date and time
function getWeekDay(date) {
  let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  return days[date.getDay()];
}

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

// 5.12 JSON 
let userJson = {
  name: "John Smith",
  age: 35
};
let json = JSON.stringify(userJson);
let userParsed = JSON.parse(json);