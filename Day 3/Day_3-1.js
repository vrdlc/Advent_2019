//
//         //TODO!
//         //  * In each iteration, the previous x,y values need to move foward (prevCoordX, prevCoordY?)
//         //  * Then I need to determine the difference between prevCoordX and coordX and prevCoordY and coordY
//         //  * then I need to insert a pair of coords into an array for EVERY SINGLE point between prevCoord and current coord (ie 0, 0 to 3, 0 needs a 1,0 and a 2,0 and a 3,0). I think I need to stringify these. Do this for both wires
//         //  * Then I need to compare the arrays
//         //  * Then I need to convert the pairs found in both wires into numbers
//         //  * Then I need to take the pair with the smallest sum. That's the answer
//         //  * PS: Change all negative numbers to not miscalculate
//         // LET'S TRY THIS ONE MORE TIME
function loadWires() {
  mapWires(wire1Array);
  mapWires(wire2Array);
}


function mapWires() {

  dirFilter(wireArray)
  console.log("I'm a wire!")
}

function dirFilter(wireArray) {
  var dir;
  while(wireArray < wireArray.length) {
    dir = wire[i].charAt(0);
    console.log("I go this way! " + dir)
  }
}




//
//   function mapWires() {
//     console.log("Hi guy!");
//
//     var input1 = "R8,U5,L5,D3";
//     var input2 = "U7,R6,D4,L4";
//     var wire1 = input1.split(",");
//     var wire2 = input2.split(",");
//
//     var dir;
//     var coordX = 0;
//     var coordY = 0;
//     var coordDiff = 0;
//     var prevCoordX = 0;
//     var prevCoordY = 0;
//     //
    var wire1Array = [];
//     var wire2Array = [];
//     // var wireMatchArray = [];
//
//
//     // var canvas = document.getElementById("myCanvas");
//     // var ctx = canvas.getContext("2d");
//     // //This tells the canvas to be ready to draw
//     // ctx.beginPath();
//     // console.log("All vars " + wire1 + " " + wire2 + " " + coordX + " " + coordY + " " + canvas + " " + ctx);
//     for (i = 0; i < wire1.length; i++) {
//       dir = wire1[i].charAt(0);
//       if (dir == "R") {
//         console.log("CharAt(0): " + dir);
//         wire1[i] = wire1[i].substr(1);
//         coordX = coordX + Number(wire1[i])
//         console.log("coordX: " + coordX);
//
//       } else if (dir == "L") {
//         console.log("CharAt(0): " + dir);
//         wire1[i] = wire1[i].substr(1);
//         coordX = coordX + (Number(wire1[i]) * -1);
//         console.log("coordX: " + coordX);
//
//       } else if (dir == "U") {
//         console.log("CharAt(0): " + dir);
//         wire1[i] = wire1[i].substr(1);
//         coordY = coordY + Number(wire1[i]);
//         console.log("coordY: " + coordY);
//
//       } if (dir == "D") {
//         console.log("CharAt(0): " + dir);
//         wire1[i] = wire1[i].substr(1);
//         coordY = coordY + (Number(wire1[i]) * -1);
//         console.log("coordY: " + coordY);
//       } //If Statement End
//       // wire1Array.push({x : coordX, y : coordY});
//       console.log("Final dir " + dir);
//
//
//       if (dir == "L" || dir == "R") {
//         console.log("I'm in the LR!");
//         console.log("coordX: " + coordX);
//         console.log("coordY: " + coordY);
//         console.log("PrevcoordX: " + prevCoordX);
//         console.log("PrevCoordY: " + prevCoordY);
//
//
// //MY PROBLEM: I don't know how to handle negative numbers in this loop (all L and D results will be negative... I didn't want to put all my array building in each if statement, but maybe I have to... Althought that's what made it break last time...)
//         for (p = prevCoordX; p < coordX + 1; p++) {
//           console.log("p " + p);
//           wire1Array.push({x : p, y : prevCoordY});
//           prevCoordX = coordX;
//           console.log("Wire1Array Object " + [p] + ": " + wire1Array[p].x + "," + wire1Array[p].y);
//         }
//         for (v = 0; v < wire1Array.length; v++) {
//           console.log("Array Object" + v + ": " + wire1Array[v].x + " " + wire1Array[v].y);
//         }
//       // } else {
//       //     console.log("coordX: " + coordX);
//       //     console.log("coordY: " + coordY);
//       //     console.log("PrevcoordX: " + prevCoordX);
//       //     console.log("PrevCoordY: " + prevCoordY);
//       //
//       //     for (p = prevCoordY; p < coordY + 1; p++) {
//       //       wire1Array.push({x : prevCoordX, y : coordY});
//       //       prevCoordY = coordY;
//       //       console.log("Wire1Array Object " + [i] + ": " + wire1Array[i].x + "," + wire1Array[i].y);
//       //     }
//       }
//       //This for loop is just to check every object pushed into the array this round
//       // for (f=0; f<wire1Array.length; f++) {
//       //   console.log("Wire1Array Object " + [f] + ": " + wire1Array[f].x + "," + wire1Array[f].y);
//       // }
//       console.log("Wire1Array length: " + wire1Array.length);
//     } //Wire1 For Loop End
//
//     // coordX = 0;
//     // coordY = 0;
//     //
//     // for (j = 0; j < wire2.length; j++) {
//     //   if (wire2[j].charAt(0) == 'R') {
//     //     console.log("CharAt(0): " + wire2[j].charAt(0));
//     //     wire2[j] = wire2[j].substr(1);
//     //     coordX = coordX + Number(wire2[j])
//     //     prevCoordX = coordX;
//     //     console.log("coordX: " + coordX);
//     //
//     //   } else if (wire2[j].charAt(0) == 'L') {
//     //     console.log("CharAt(0): " + wire2[j].charAt(0));
//     //     wire2[j] = wire2[j].substr(1);
//     //     coordX = coordX + (Number(wire2[j]) * -1);
//     //     prevCoordX = coordX;
//     //     console.log("coordX: " + coordX);
//     //
//     //   } else if (wire2[j].charAt(0) == 'U') {
//     //     console.log("CharAt(0): " + wire2[j].charAt(0));
//     //     wire2[j] = wire2[j].substr(1);
//     //     coordY = coordY + Number(wire2[j]);
//     //     prevCoordY = coordY;
//     //     console.log("coordY: " + coordY);
//     //
//     //   } if (wire2[j].charAt(0) == 'D') {
//     //     console.log("CharAt(0): " + wire2[j].charAt(0));
//     //     wire2[j] = wire2[j].substr(1);
//     //     coordY = coordY + (Number(wire2[j]) * -1);
//     //     prevCoordY = coordY;
//     //     console.log("coordY: " + coordY);
//     //   } //If Statement End
//     //   // wire2Array.push({x : coordX, y : coordY});
//     //
//     //
//     //   if (coordX - prevCoordX == 0) {
//     //     for (p = prevCoordY; p < coordY + 1; p++) {
//     //       wire2Array.push({x : prevCoordX, y : coordY});
//     //       console.log("Wire2Array Object " + [j] + ": " + wire2Array[j].x + "," + wire2Array[j].y);
//     //     }
//     //   } else {
//     //     for (p = prevCoordX; p < coordX + 1; p++) {
//     //       wire2Array.push({x : coordX, y : prevCoordY});
//     //       console.log("Wire2Array Object " + [j] + ": " + wire2Array[j].x + "," + wire2Array[j].y);
//     //     }
//     //   }
//     //   for (f=0; f<wire2Array.length; f++) {
//     //     console.log("Wire2Array Object " + [f] + ": " + wire2Array[f].x + "," + wire2Array[f].y);
//     //   }
//     // } //Wire2Array For loop end
//   } //Func End
//
//
//
//
//     //Working for loop test...
//     // for (fuck = 0; fuck < 5; fuck++) {
//     //   coordX = coordX+ 1;
//     //   coordY = coordY + 1;
//     //   wire1Array.push({x : coordX, y : coordY});
//     //   console.log("Fuck " + fuck);
//     //   console.log("Push test " + wire1Array[fuck].x + " " + wire1Array[fuck].y);
//     //   console.log("Array " + wire1Array);
//     // }
//
//     //These for loops will go through each element in the wire arrays, converting them into a point on the canvas. Each if statement will grab an element, determine the direction, cut off the first char, convert the next char(s) into a number, and will plot the point on the canvas.
//     // for (i=0;i<wire1.length;i++) {
//     //   console.log("i: " + i + " wire pos: " + wire1[i]);
//     //   console.log("coords: " + coordX + " " + coordY);
//     //   console.log("Prev X: " + prevCoordX);
//     //   console.log("Prev Y: " + prevCoordY);
//     //   coordDiff = 0;
//     //   ctx.moveTo(coordX,coordY);
//     //
//     //
//     //   if (wire1[i].charAt(0) == 'R') {
//     //     console.log("CharAt(0): " + wire1[i].charAt(0));
//     //
//     //     //This trims the letter off the front of the element of the array
//     //     wire1[i] = wire1[i].substr(1);
//     //     coordX = coordX + Number(wire1[i])
//     //     //This plots the line from the prev coord to the next one
//     //
//     //     console.log("CoordX: " + coordX);
//     //       for (r = prevCoordX; r < coordX + 1; r++) {
//     //         console.log("R: " + r)
//     //         wire1Array.push({x : r, y : coordY});
//     //         console.log("Wire1Array x " + wire1Array[r].x + " y " + wire1Array[r].y);
//     //       }
//     //       console.log("Entire WireArray1: " + wire1Array);
//     //     //This updates prevCoordX to be the current state of coordX for the next time coordX is needed
//     //     prevCoordX = coordX;
//     //     ctx.lineTo(coordX, coordY);
//     //     ctx.stroke();
//     //
//     //   }
//     //   if (wire1[i].charAt(0) == 'U') {
//     //     console.log("CharAt(0): " + wire1[i].charAt(0));
//     //
//     //     //This trims the letter off the front of the element of the array
//     //     wire1[i] = wire1[i].substr(1);
//     //     coordY = coordY + Number(wire1[i])
//     //     //This plots the line from the prev coord to the next one
//     //
//     //     console.log("CoordY: " + coordY);
//     //       for (u = prevCoordY; u < coordY + 1; u++) {
//     //         console.log("U: " + u)
//     //         wire1Array.push({x : prevCoordX, y : u});
//     //         console.log("Wire1Array x " + wire1Array[u].x + " y " + wire1Array[u].y);
//     //       }
//     //       console.log("Entire WireArray1: " + wire1Array);
//     //     //This updates prevCoordX to be the current state of coordX for the next time coordX is needed
//     //     prevCoordY = coordY;
//     //     ctx.lineTo(coordX, coordY);
//     //     ctx.stroke();
//
//
//       // if (wire1[i].charAt(0) == 'U') {
//       //   console.log("CharAt(0): " + wire1[i].charAt(0));
//       //
//       //   wire1[i] = wire1[i].substr(1);
//       //   coordY = coordY + Number(wire1[i]);
//       //
//       //     for (u = prevCoordY; u < coordY + 1; u++) {
//       //       console.log("U: " + u)
//       //       console.log("prevCoordX: " + prevCoordX + " type: " + typeof(prevCoordX));
//       //       wire1Array.push({x : prevCoordX, y : u});
//       //
//       //       console.log("Wire1Array " + u + " x " + wire1Array[u].x + " y " + wire1Array[u].y);
//       //     }
//       //     console.log("Entire WireArray1: " + wire1Array);
//       //
//       //   //prevCoordY holds the current y coordinate for the next round
//       //   prevCoordY = coordY;
//       //   ctx.lineTo(coordX,coordY);
//       //   ctx.stroke();
//
//       // } else if (wire1[i].charAt(0) == 'L') {
//       //   console.log("CharAt(0): " + wire1[i].charAt(0));
//       //   prevCoordX =coordX;
//       //   wire1[i] = wire1[i].substr(1);
//       //   coordX = coordX + -(Number(wire1[i]))
//       //     for (l = prevCoordX; l < coordX + 1; l++) {
//       //       console.log("L: " + l)
//       //       wire1Array.push({x : l, y : prevCoordY});
//       //       console.log("Wire1Array x " + wire1Array[l].x + " y " + wire1Array[l].y);
//       //     }
//       //     console.log("Entire WireArray1: " + wire1Array);
//       //   ctx.lineTo(coordX, coordY);
//       //   ctx.stroke();
//       //
//       // } else if (wire1[i].charAt(0) == 'D') {
//       //   console.log("CharAt(0): " + wire1[i].charAt(0));
//       //   prevCoordY = coordY;
//       //   wire1[i] = wire1[i].substr(1);
//       //   coordY = coordY + -(Number(wire1[i]));
//       //     for (d = prevCoordY; d < coordY + 1; d++) {
//       //       console.log("D: " + d)
//       //       wire1Array.push({x : prevCoordX, y : d});
//       //       console.log("Wire1Array x " + wire1Array[d].x + " y " + wire1Array[coordY].y);
//       //     }
//       //     console.log("Entire WireArray1: " + wire1Array);
//       //   ctx.lineTo(coordX,coordY);
//       //   ctx.stroke();
//       // }
//       // console.log("1 Array x,y: " + wire1Array[i].x + "," + wire1Array[i].y);
//     // }
//     // console.log("1Array len: " + wire1Array.length)
//
//     // //Reinitialize the coords (may need to make different vars for each wire?)
//     // coordX = 0;
//     // coordY = 0;
//     //
//     // for (i=0;i<wire2.length;i++) {
//     //   console.log("i: " + i + " wire pos: " + wire2[i]);
//     //   console.log("coords: " + coordX + " " + coordY);
//     //   ctx.moveTo(coordX,coordY);
//     //   if (wire2[i].charAt(0) == 'R') {
//     //   console.log("CharAt(0): " + wire2[i].charAt(0));
//     //     wire2[i] = wire2[i].substr(1);
//     //     coordX = coordX + Number(wire1[i])
//     //       for (r = prevCoordX; r < coordX + 1; r++) {
//     //         console.log("R: " + r)
//     //         wire2Array.push({x : r, y : prevCoordY});
//     //         console.log("Wire2Array x " + wire2Array[r].x + " y " + wire2Array[r].y);
//     //       }
//     //       console.log("Entire WireArray2: " + wire2Array);
//     //
//     //     ctx.lineTo(coordX, coordY);
//     //     ctx.stroke();
//     //   } else if (wire2[i].charAt(0) == 'L') {
//     //     console.log("CharAt(0): " + wire2[i].charAt(0));
//     //     wire2[i] = wire2[i].substr(1);
//     //     coordX = coordX + -(Number(wire1[i]))
//     //       for (l = prevCoordX; l < coordX + 1; l++) {
//     //         console.log("L: " + l)
//     //         wire2Array.push({x : l, y : prevCoordY});
//     //         console.log("Wire2Array x " + wire2Array[l].x + " y " + wire2Array[l].y);
//     //       }
//     //       console.log("Entire WireArray2: " + wire2Array);
//     //     ctx.lineTo(coordX, coordY);
//     //     ctx.stroke();
//     //
//     //   } else if (wire2[i].charAt(0) == 'U') {
//     //     console.log("CharAt(0): " + wire2[i].charAt(0));
//     //     wire2[i] = wire2[i].substr(1);
//     //     coordY = coordY + Number(wire2[i]);
//     //       for (u = prevCoordY; u < coordY + 1; u++) {
//     //         console.log("U: " + u)
//     //         wire2Array.push({x : prevCoordX, y : u});
//     //         console.log("Wire1Array x " + wire2Array[u].x + " y " + wire2Array[u].y);
//     //       }
//     //       console.log("Entire WireArray2: " + wire2Array);
//     //     ctx.lineTo(coordX,coordY);
//     //     ctx.stroke();
//     //   } else if (wire2[i].charAt(0) == 'D') {
//     //     console.log("CharAt(0): " + wire2[i].charAt(0));
//     //     wire2[i] = wire2[i].substr(1);
//     //     coordY = coordY + -(Number(wire2[i]));
//     //       for (d = prevCoordY; d < coordY + 1; d++) {
//     //         console.log("D: " + d)
//     //         wire2Array.push({x : prevCoordX, y : d});
//     //         console.log("Wire2Array x " + wire2Array[d].x + " y " + wire2Array[d].y);
//     //       }
//     //     console.log("Entire WireArray2: " + wire2Array);
//     //     ctx.lineTo(coordX,coordY);
//     //     ctx.stroke();
//     //   }
//     // }
//     // console.log("1Array Len: " + wire1Array.length);
//     // console.log("2Array Len: " + wire2Array.length);
//     // for (k = 0; k < wire1Array.length; k++) {
//     //   console.log("Wire1Array: " + wire1Array[k].x + "," + wire1Array[k].y + " 2Array: " + wire2Array[k].x + "," + wire2Array[k].y);
//     //   if (wire1Array[k].x == wire2Array[k].x &&
//     //       wire1Array[k].y == wire2Array[k].y) {
//     //     wireMatchArray.push({x : wire1Array[k].x, y : wire1Array[k].y});
//     //     console.log("Match Array: " + wireMatchArray[k].x + " " + wireMatchArray[k].y);
//     //   }
//     // }
//   // }
//
//   //Code wasteland
//   // var wire1x = [8, -5];
//   // var wire1y = [5, -3];
//   //
//   // var wire2x = [6, -4];
//   // var wire2y = [7, -4];
//   //
//   // var canvas = document.getElementById("myCanvas");
//   // var ctx = canvas.getContext("2d");
//   // ctx.moveTo(0,0);
//   // ctx.lineTo(200,100);
//   // ctx.stroke();
