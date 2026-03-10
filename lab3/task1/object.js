<<<<<<< HEAD
// --- 4.1 Objects ---
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
// alert(sum); // 390

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

// 4.4 Object methods, "this" (like in java constructor)
let calculator = {
  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

// 4.5 Constructor, operator "new"
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt('How much to add?', 0);
  };
}
// let accumulator = new Accumulator(1);
// accumulator.read();
=======
// --- 4.1 Objects ---
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
// alert(sum); // 390

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

// 4.4 Object methods, "this" (like in java constructor)
let calculator = {
  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

// 4.5 Constructor, operator "new"
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt('How much to add?', 0);
  };
}
// let accumulator = new Accumulator(1);
// accumulator.read();
>>>>>>> 55e63d972fe763ca051aa3f346640e86dfbd13f6
// alert(accumulator.value);