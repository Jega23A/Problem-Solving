let bulb = false; // initial state: off

function toggleBulb() {
  bulb = !bulb; // toggle the state
  console.log(`Bulb is now ${bulb}`);
}

// Test the function
toggleBulb(); // Output: Bulb is now true
toggleBulb(); // Output: Bulb is now false
toggleBulb(); // Output: Bulb is now true
toggleBulb(); // Output: Bulb is now false