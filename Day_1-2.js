
function fuelAndFuelSum(list) {
  //Divide by 3, round down, subtract 2
//   for (i = 0; i < list.length; i++){
//
//     //if statement to check to see if value is 0. When it is, move to next step in the loop
//     //Test loop against values in example
//     var value = list[i];
//     if (value != 0) {
//       value = value / 3;
//       value = Math.floor(value);
//       value = value - 2;
//       total = total + value;
//       console.log("Value " + i + " - " + value);
//       console.log("Total " + i + " - " + total);
//     }
//   }
//   console.log("" + total);
//   alert("Total" + total);
//   total = 0;
// }

//I NEED THIS TO KICK BACK TO IT'S FOR
    var value = 100756;
    if (value != 0) {
      value = value / 3;
      value = Math.floor(value);
      value = value - 2;
      total = total + value;
      console.log("Value " + i + " - " + value);
      console.log("Total " + i + " - " + total);
    }

  }
//   console.log("" + total);
//   alert(total);
// }

var total = 0;
var list = [73617,
104372,
131825,
85022,
105514,
78478,
87420,
118553,
97680,
89479,
146989,
79746,
108085,
117895,
143811,
102509,
102382,
92975,
72978,
94208,
130521,
83042,
138605,
107566,
63374,
71176,
129487,
118408,
115425,
63967,
98282,
121829,
92834,
61084,
70122,
87221,
132773,
141347,
133225,
81199,
94994,
60881,
110074,
63499,
143107,
76618,
86818,
135394,
106908,
96085,
99801,
112903,
51751,
56002,
70924,
62180,
133025,
68025,
122660,
64898,
77339,
62109,
133891,
134460,
84224,
54836,
59748,
125540,
67796,
71845,
92899,
130103,
74612,
136820,
96212,
132002,
97405,
82629,
63717,
62805,
112693,
147810,
139827,
116220,
69711,
50236,
137833,
103743,
147456,
112098,
84867,
75615,
132738,
81072,
89444,
58443,
94465,
112494,
82127,
132533
];