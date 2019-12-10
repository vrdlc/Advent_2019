function opCode2() {
var initCode = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,6,19,23,1,13,23,27,1,6,27,31,1,31,10,35,1,35,6,39,1,39,13,43,2,10,43,47,1,47,6,51,2,6,51,55,1,5,55,59,2,13,59,63,2,63,9,67,1,5,67,71,2,13,71,75,1,75,5,79,1,10,79,83,2,6,83,87,2,13,87,91,1,9,91,95,1,9,95,99,2,99,9,103,1,5,103,107,2,9,107,111,1,5,111,115,1,115,2,119,1,9,119,0,99,2,0,14,0];

var thirdPos;
var finalTotal = 19690720;
var code = [];
  for (noun = 0; noun < 100; noun++) {
    for (verb = 0; verb < 100; verb++) {
      //This slice was needed because JavaScript doesn't copy variables like I thought it did. Instead, all instances were pointing back to the original, so my attempts at reinitializing were failing and I didn' tknow.
      code = initCode.slice();
      //This puts the values of noun and verb into the first and second positions of the array
      code[1] = noun;
      code[2] = verb;
      for (i = 0; i < code.length; i = i + 4) {
        if (code[i] == 1) {
          //This grabs the first and second positions of this set of 4 positions, adds them together, and places them into the position indicated in this set's third position
          code[code[i+3]] = code[code[i+1]] + code[code[i+2]];
        } else if (code[i] == 2) {
          //This is like above, but does the product instead of the sum
          code[code[i+3]] = code[code[i+1]] * code[code[i+2]];
        } else if (code[i] == 99) {
          break;
        }

      }
      //The next two if statements search for the requested total, then calculate the answer the puzzle was looking for
      if (code[0] == finalTotal) {
        answer = 100 * noun + verb;
        break;
      }
    }
    if (code[0] == finalTotal) {
      answer = 100 * noun + verb;
      break;
    }
  }
}

console.log(opCode2());
