

function opCode_2() {

var code = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,6,19,23,1,13,23,27,1,6,27,31,1,31,10,35,1,35,6,39,1,39,13,43,2,10,43,47,1,47,6,51,2,6,51,55,1,5,55,59,2,13,59,63,2,63,9,67,1,5,67,71,2,13,71,75,1,75,5,79,1,10,79,83,2,6,83,87,2,13,87,91,1,9,91,95,1,9,95,99,2,99,9,103,1,5,103,107,2,9,107,111,1,5,111,115,1,115,2,119,1,9,119,0,99,2,0,14,0];

  code[1] = 12;
  code[2] = 2;

  for (i = 0; i < code.length; i = i + 4) {
    console.log("i " + i);
    if (code[i] == 1) {

      //These should be grabbing the number then applying them to the place in the array
      int1 = code[code[i + 1]];
      int2 = code[code[i + 2]];

      //This adds the two numbers found at the places in the array
      sum = int1 + int2;
      //This finds the number at i + 3, then puts the sum from above in that place in the array
      code[code[i + 3]] = sum;

    } else if (code[i] == 2) {
      int1 = code[code[i + 1]];
      int2 = code[code[i + 2]];
      //This adds the two numbers found at the places in the array
      prod = int1 * int2;
      //This finds the number at i + 3, then puts the sum from above in that place in the array
      code[code[i + 3]] = prod;
    } else if (code[i] == 99) {
      break;
    }
    console.log("" + code);
    console.log("Position 0: " + code[0]);
  }
}
