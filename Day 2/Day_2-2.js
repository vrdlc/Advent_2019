
//What fresh new hell is this

//WHERE I AM STUCK: I don't know where 100 comes from! Why is that in the problem? Does my output here need to be checkginf for code[0] === 19690720/100?
//I think I'm going about this all wrong. In each loop, I'm taking pos 1 and 2, assigning them to the code[1] and code[2], then seeing if the new pos 1 and 2 equal the number in question. Obviously this isn't right. 

function opCode2() {

var code = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,6,19,23,1,13,23,27,1,6,27,31,1,31,10,35,1,35,6,39,1,39,13,43,2,10,43,47,1,47,6,51,2,6,51,55,1,5,55,59,2,13,59,63,2,63,9,67,1,5,67,71,2,13,71,75,1,75,5,79,1,10,79,83,2,6,83,87,2,13,87,91,1,9,91,95,1,9,95,99,2,99,9,103,1,5,103,107,2,9,107,111,1,5,111,115,1,115,2,119,1,9,119,0,99,2,0,14,0];
//This var will allow the code to reset after every attempt
var initCode = code;
  code[1] = 12;
  code[2] = 2;

  for (i = 0; i < code.length; i = i + 4) {
    console.log("i " + i);
    if (code[i] == 1) {

      //These should assign the appropriate inputs to "noun" and "verb" before assiging the same numbers to positions 1 and 2
      // noun = code[code[i + 1]];
      // verb = code[code[i + 2]];
      code[1] = code[code[i + 1]];
      code[2] = code[code[i + 2]];
      noun = code[1];
      verb = code[2];
      //This adds the two numbers found at the places in the array
      sum = noun + verb;
      //This finds the number at i + 3, then puts the sum from above in that place in the array
      code[code[i + 3]] = sum;
      if (code[0] == 19690720) {
        console.log("Noun: " + noun + " Verb: " + verb);
        break;
      } else {
      code = initCode;
    }
    } else if (code[i] == 2) {

      // noun = code[code[i + 1]];
      // verb = code[code[i + 2]];
      code[1] = code[code[i + 1]];
      code[2] = code[code[i + 2]];
      noun = code[1];
      verb = code[2];
      //This adds the two numbers found at the places in the array
      prod = noun * verb;
      //This finds the number at i + 3, then puts the sum from above in that place in the array
      code[code[i + 3]] = prod;
      if (code[0] === 19690720/100) {
        console.log("Noun: " + noun + " Verb: " + verb);
        break;
      } else {
      code = initCode;
    }
    } else if (code[i] == 99) {
      break;
    }
    console.log("" + code);
    console.log("Position 0: " + code[0]);
  }
}
//At the end, refactor to streamline process
