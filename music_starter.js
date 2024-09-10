
let img;
let firstRun = true
let yMove = 0;


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun){ 
    img = loadImage('Plant.png');
    firstRun = false;
  }

  

  colorMode(HSB, 100)
  //background(words,20,20);

  // let MyBlue = color(160, 194, 250)
  // let MyYellow = color(190, 250, 170)

  // let interA = lerpColor(MyBlue,MyYellow,0.2)
  


  background(60,50,vocal);


  push();
  scale(0.5);
  image(img,0,0);

  pop();
  
  fill(100);
  ellipse(10, yMove, 5, 5);
  ellipse(800, yMove, 5, 5);
  ellipse(450, yMove, 5, 5);
  
  if (counter > 0) {
    yMove = yMove + 1;
    if (yMove > 400) {
      yMove = 0;
    }
  }
  else {
    yMove = 0;
  }
  
  ellipse(700, yMove, 5, 5);

  if (counter > 0) {
    yMove = yMove + 1;
    if (yMove > 300) {
      yMove = 0;
    }
  }
  else {
    yMove = 0;
  }

  fill(255,0,0)

  //// image fill the screen



  //   
}



// //shape movement
// var Xmove = 1;
// function draw() {
//   background(300);
//   ellipse(10+Xmove,100,20,20);

// Xmove = Xmove + 1;

// if(Xmove > 200){
//   Xmove = 0;
// }

// }
//


  //textFont('Verdana'); // please use CSS safe fonts
  // rectMode(CENTER)
  //textSize(24);
  // strokeWeight(9);
  // stroke(drum,80,80);
  
  // var drumMap = map(drum, 0,100, 30,90);
  // var lengthOfLine = 300;
  // var LineStart = 100;
  // var lineEnd = LineStart + lengthOfLine;

  // // line(LineStart, 300, lineEnd, 300);
  // // line(LineStart, 310, lineEnd, 310);
  // // line(LineStart, 320, lineEnd, 320);

  // for(var i = 1; i <= drumMap; i++){
    
  //   var linestep = i * 10;
  //   line (LineStart, linestep, lineEnd, linestep);
  // }






  // let bar_spacing = height / 10;
  // let bar_height = width / 12;
  // let bar_pos_x = width / 2;
  
  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);
