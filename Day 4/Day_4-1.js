// var index = "";
// var codes = index.split(",")
var numArray = [];
var indNumArray = [];
var dupeNum = [];
var solutions = [];


function getPassword() {
//First we take the given min and max and run them through a for loop
  for (i= 156218; i < 652527; i++) {
    //This calls the below function
    digitDupe(i);
    }
    //This for loop runs through pushed solutions to ensure that the right numbers are going in
    // for (v = 0; v < solutions.length; v ++ ){
      // console.log("Solutions Array: " + solutions[v]);
    // }
    //This logs the solutions, by individual number and total, returned from the lower two functions
    console.log("i " + i);
    console.log("Number of Solutions: " + solutions.length);
}

//We rule out non-dupe featuring numbers this way. It is not clear if triplicates count or not... THEY DO
function digitDupe(number) {
  numArray = Array.from(String(number), Number);
  for (j = 0; j < numArray.length; j++) {
    //If there are dupes, the number gets kicked to the next function, which will check each digit against the next one in the number
    if (numArray[j] == numArray[j + 1]) {
      digitCount(number);
      break;
    }
  }
}

//This function checks each digit against the next one in the number. The console logs are still in each if statement for debugging purposes.
function digitCount(number) {
  numArray = Array.from(String(number), Number);
  for (k=0; k < numArray.length; k++) {
    if (k != numArray.length - 1) {
      if (numArray[k] < numArray[k + 1]) { //If the first number is less than the next, keep going
        // console.log("I'm less than the next number. Num: " + numArray[k] + "pos: " + k);
      } else if (numArray[k] > numArray[k + 1]) { //If the first number is more than the next, break out of the loop
        // console.log("I'm more than the next number. Num: " + numArray[k] + "pos: " + k);
        break;
      } else if (numArray[k] == numArray[k+ 1]) { //If the numbers match, keep going
        // console.log("I'm equal to the next number. Num: " + numArray[k] + "pos: " + k);
      }
    } else {
      solutions.push(number); //Any number that makes it through all rounds goes into this array, which is totalled up at the end
    }
  }
}
