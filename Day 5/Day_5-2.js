
//1148 is the answer BUT WHY
//I need to not do this one right now. Moving on to Day 5.

const range = {min: 156218, max: 652527}
// const range = {min: 156218, max: 156778}
const numArray = [];
// const incrArray = [];
const dupeArray = [];
const solutions = [];

function getPassword2() {
  let i = range.min;

  if (numArray[0] < numArray[1] || (numArray[0] == numArray[1] && numArray[1] !== numArray[2])) {
      if (numArray[1] < numArray[2] || (numArray[1] == numArray[2] && numArray[2] !== numArray[3])) {
          // console.log("1 and 2 " + i);
          if (numArray[2] < numArray[3] || (numArray[2] == numArray[3] && numArray[3] !== numArray[4])) {
              // console.log("2 and 3 " + i);
              if (numArray[3] < numArray[4] || (numArray[3] == numArray[4] && numArray[4] !== numArray[5])) {
                  // console.log("3 and 4 " + i);
                  if (numArray[4] < numArray[5] || numArray[4] == numArray[5]) {
            console.log("numArray " + numArray);
            console.log("4 and 5 " + numArray[4] + numArray[5]);



            if (j === 0) {
                if (numArray[j] <= numArray[j + 1]) {
                    if (numArray[j] !== numArray[j + 1] || numArray[j] == numArray[j + 1] && numArray[j] !== numArray[j + 2]) {
                        j++;
                      } else {
                          i++;
                          break;
                        }
                      } else {
                          break;
                        }
                      } else if (j === numArray.length) {
                          if (numArray[j] !== numArray[j - 1]) {
                              j++
                            } else {
                                i++;
                                break;
                              }
                            } else {
                                if (numArray[j] <= numArrayj + 1]) {
                                    if (numArray[j] !== numArray[j - 1] && numArray[j] == numArray[j + 1] && numArray[j] !== numArray[j + 2]) {
                                        j++
                                      } else {
                                          i++;
                                          break;
                                        }
                                    }
                                      i++
                                      break;
                                    } else {
                                        i++;
                                      }
                                      }
                                      console.log("dupeArray " + dupeArray.length);
                                      }

  // }
  }
  for (k = 0; k < solutions.length; k++) {
    console.log("solutions " + solutions[k]);
  }
  console.log("solutions " + solutions.length);
}

  // let k = 0;
  // while (k < dupeArray.length) {
  //   const indNum = Array.from(String(dupeArray[k]), Number);
  //   for (l = 0; l < indNum.length; l++) {
  //     if (indNum[l] <= indNum[l + 1]) {
  //       if (k < indNum.length) {
  //         l++
  //       } else {
  //         solutions.push(indNum);
  //       }
  //    } else {
  //      k++;
  //      break;
  //    }
  //   }

  // }
  //   console.log("Number of Solutions: " + solutions.length);
  // console.log("i " + i);
// }

// //This function checks each digit against the next one in the number. The console logs are still in each if statement for debugging purposes.
// function digitCount2(number) {
//   // console.log("I'm in digitCount " + number);
//   console.log("digitCount" + number);
//   let k = 0;
//   let indNumArray = [];
//   indNumArray = Array.from(String(number), Number);
//   // for (k = 0; k < numArray.length + 1; k++) {
//   while (k < indNumArray.length) {
//     console.log("k " + k);
//     if (indNumArray[k] <= indNumArray[k + 1]) {
//       console.log("I'm in the if " + k);
//       k++;
//     } else if (indNumArray[k] > indNumArray[k + 1]) {
//       console.log("I'm in the else " + k);
//       // k++;
//       break;
//       // console.log("I'm equal to the next number. Num: " + numArray[k] + " pos: " + k);
//     } else {
//       console.log("Why are you here?")
//       k++
//     }
//   }
//     solutions.push(number);
// }




// while (i < range.max) {
//   const numArray = Array.from(String(i), Number);
//   // console.log("in the while ");
//   for (j = 0; j < numArray.length; j++) {
//     // console.log("In the j for");
//
//     if (numArray[j] == numArray[j + 1]) {
//       dupeArray.push(i);
//       i++;
//       break;
//     }
//   }
//   i++;
// }
// console.log("dupeArray " + dupeArray.length);
// // for (x = 0; x < dupeArray.length; x++) {
// //   console.log("dupes " + dupeArray[x]);
// // }
// // console.log("before the second loop");
// let k = 0;
// // console.log("dupeArray length " + dupeArray.length);
// while (k < dupeArray.length) {
//   const incrArray = Array.from(String(dupeArray[k]), Number);
//     if (incrArray[0] == incrArray[1] &&)
//
//
//     if ((incrArray[5] > incrArray[4] || incrArray[5] == incrArray[4]) && incrArray[4] != incrArray[3]) {
//       if ((incrArray[4] > incrArray[3] || incrArray[4] == incrArray[3]) && incrArray[3] != incrArray[2]) {
//         // console.log("4 and 3 " + dupeArray[k]);
//         if ((incrArray[3] > incrArray[2] || incrArray[3] == incrArray[2]) && incrArray[2] != incrArray[1]) {
//           // console.log("3 and 2 " + dupeArray[k]);
//           if ((incrArray[2] > incrArray[1] || incrArray[2] == incrArray[1]) && incrArray[1] != incrArray[0]) {
//             // console.log("2 and 1 " + dupeArray[k]); //61
//             if (incrArray[1] > incrArray[0] || incrArray[1] == incrArray[0]) {
//               // console.log("1 and 0 " + dupeArray[k])
//                 solutions.push(dupeArray[k]);
//                 k++;
//               } else {
//                 k++;
//               }
//             } else {
//               k++;
//             }
//           } else {
//             k++;
//           }
//         } else {
//           k++;
//         }
//       } else {
//         k++;
//     }
