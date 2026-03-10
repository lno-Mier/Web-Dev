// 3.2 Coding Style

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n <= 0) {
  alert(`Power ${n} is not supported,
    please enter an integer number greater than zero`);
} else {
  alert( pow(x, n) );
}

// --- 3.5 Automated testing with Mocha ---
// Example of a test spec (usually goes in a separate test.js file, but included here for completeness)
/* describe("Pow", function() {
  it("raises to n-th power", function() {
    assert.equal(pow(2, 3), 8);
  });
});
*/