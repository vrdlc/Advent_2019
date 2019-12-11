
  function mapWires() {
    console.log("Hi guy!");

    var wire1 = [R8,U5,L5,D3];
    var wire2 = [U7,R6,D4,L4];
    var coordX = 0;
    var coordY = 0;

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");


//What this SHOULD do: grab first element of array if it starts with R or L. If it starts with R, change x in (x,y) to a positive int, if it's L, change it to negative
//TODO: write another set of statements that changes U and D to positive and negative ys. See if I can get them to draw the lines on the canvas. Even if it doesn't help, it's a look what I can do! 
    for (i=0;i<wire1.length;i++) {
      if (wire1[i].charAt(0) == 'R') {
      console.log("CharAt(0): " + wire1[i].charAt(0));
        wire[i] = wire1[i].substr(1);
        ctx.lineTo(Number(coordX), 0);
      } else if (wire1[i].charAt(0) == 'L') {
        console.log("CharAt(0): " + wire1[i].charAt(0));
        wire[i] = wire1[i].substr(1);
        ctx.lineTo(-(Number(coordX)), 0);

      }
    }

// PROSCUITTO CODE
//The idea: If the port is (0, 0), then:
  // * any 'R' will = (0++, 0)
  // * any 'L' will = (0--, 0)
  // * any 'U' will = (0, 0++)
  // * any 'D' will = (0, 0--)

  }

  //Code wasteland
  // var wire1x = [8, -5];
  // var wire1y = [5, -3];
  //
  // var wire2x = [6, -4];
  // var wire2y = [7, -4];
  //
  // var canvas = document.getElementById("myCanvas");
  // var ctx = canvas.getContext("2d");
  // ctx.moveTo(0,0);
  // ctx.lineTo(200,100);
  // ctx.stroke();
