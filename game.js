function setup() {
  var scene = 1;
  createCanvas(600, 700);
  var title = function() {
    background(255, 0, 0);
    fill(255, 255, 255);
    textSize(50);
    text("Epic Gamers", 150, 200);
    var x = 200;
    var y = 350;
    rect(x, y, 200, 100);
    fill(0, 0, 0);
    textSize(20);
    text("Press Space to Start", x + 10, y + 50);
  };
  
 
    
  if (scene === 1) {
    title();
  } 
  
}

function keyPressed() {
   var info = function() {
    background(255, 0, 0);
    fill(255, 255, 255);
    textSize(30);
    text("Menu", 250, 100);
    textSize(20);
    fill(0, 0, 0);
    var a = 125;
    var b = 200;
    text("Instructions", a, b);
    text("About Us", a, b + 100);
    text("Play", a, b + 200);
   
   
  };
  
  if (key === ' ') {
    scene = 2;
    if (scene ===2) {
      info();
    }
  }
  
}

// function draw() {
//   background(220);
// }


<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.sound.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />

  </head>
  <body>
    <script src="sketch.js"></script>
    <p align = "center"><strong>Epic Gamers!!!</strong></p>
  </body>
</html>


html, body {
  margin: 0;
  padding: 0;
}
canvas {
  display: block;
}
