var fuelTotal = 0;
var fuel = 0;

//This function will take a single item from the list and will then feed it into a second loop to determine total fuel
function getFuelTotal(list) {
  //This loop runs through all entries in the list
  for (i = 0; i < list.length; i++) {
    fuel = list[i];
    //The while loop takes the single list item from above and continues to do the math and add it to the previous value until fuel > 0
      while (fuel > 0) {
        console.log("i " + i);
        fuel = Math.floor(fuel/3)-2;
          if (fuel > 0) {
            //This ensures that if fuel > 0, it won't add the negative number to the total
            fuelTotal = fuelTotal + fuel;
          }
      }
  };
  //This console.log is what returns the final total
  console.log("Final Total: " + fuelTotal);
}

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
