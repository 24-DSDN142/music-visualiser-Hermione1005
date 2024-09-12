
let img;
let firstRun = true
let yMove = 0;
let yMove_2 = 0;
let yMove_3 = 0;
let yMove_4 = 0;
let yMove_5 = 0;
let yMove_6 = 0;
let yMove_7 = 0;
let xMove = 0;
let xMove_a = 0;
let seconds;


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun){ 
    img = loadImage('Plant.png');
    firstRun = false;
  }

  colorMode(RGB)
  // background colour
  background(34, 114, 168);
  

  // // Sliding color
  // push();
  // colorMode(RGB)

  // noStroke();
  // fill(120, 194, 245)
  // rect(0, 1024 - map(vocal, 0, 100, 0, 1200), 1024, map(vocal, 0, 100, 0, 1200))
  
  // fill(231, 255, 201)
  // rect(0, 1024 - map(vocal, 0, 100, 0, 1060), 1024, map(vocal, 0, 100, 0, 1060))
  
  // noStroke();
  // fill(51, 128, 176)
  // rect(0, 1024 - map(vocal, 0, 100, 0, 1024), 1024, map(vocal, 0, 100, 0, 1024))
  
  // fill(129, 197, 240);
  // rect(0, 1024 - map(vocal, 0, 100, 0, 800), 1024, map(vocal, 0, 100, 0, 800))

  // fill(204, 234, 255)
  // rect(0, 1024 - map(vocal, 0, 100, 0, 720), 1024, map(vocal, 0, 100, 0, 720))
  
  // fill(78, 155, 204);
  // rect(0, 1024 - map(vocal, 0, 100, 0, 600), 1024, map(vocal, 0, 100, 0, 600))

  // fill(255, 240, 201)
  // rect(0, 1024 - map(vocal, 0, 100, 0, 560), 1024, map(vocal, 0, 100, 0, 560))
  
  // fill(129, 197, 240);
  // rect(0, 1024 - map(vocal, 0, 100, 0, 500), 1024, map(vocal, 0, 100, 0, 400))

  // fill(85, 120, 89)
  // rect(0, 1024 - map(vocal, 0, 100, 0, 450), 1024, map(vocal, 0, 100, 0, 450))
  
  // fill(93, 186, 245);
  // rect(0, 1024 - map(vocal, 0, 100, 0, 400), 1024, map(vocal, 0, 100, 0, 400))

  // fill(166, 219, 252);
  // rect(0, 1024 - map(vocal, 0, 100, 0, 200), 1024, map(vocal, 0, 100, 0, 200))

  // fill(204, 234, 255)
  // rect(0, 1024 - map(vocal, 0, 100, 0, 150), 1024, map(vocal, 0, 100, 0, 150))
  
  // fill(119, 194, 247);
  // rect(0, 1024 - map(vocal, 0, 100, 0, 120), 1024, map(vocal, 0, 100, 0, 120))

  // fill(204, 234, 255)
  // rect(0, 1024 - map(vocal, 0, 100, 0, 100), 1024, map(vocal, 0, 100, 0, 100))
  
  // fill(156, 214, 255);
  // rect(0, 1024 - map(vocal, 0, 100, 0, 50), 1024, map(vocal, 0, 100, 0, 50))

  // pop();




  //image of the plant
  push();
  scale(0.5);
  image(img,0,0);

  pop();
  

  //rain drop part 1
  fill(100);

  ellipse(100, yMove, 3, 3);
  ellipse(800, yMove, 3, 3);
  
  if (counter > 0) {
    yMove = yMove + drum;
    if (yMove > 400) {
      yMove = 0;
    }
  }
  else {
    yMove = 0;
  }
  
  //another part of raindrop 2
  ellipse(700, yMove_2, 3, 3);

  if (counter > 0) {
    yMove_2 = yMove_2 + drum;
    if (yMove_2 > 200) {
      yMove_2 = 1;
    }
  }
  else {
    yMove_2 = 1;
  }

  //another part of raindrop 3
  ellipse(300, yMove_3, 3, 3);

  if (counter > 0) {
    yMove_3 = yMove_3 + drum;
    if (yMove_3 > 600) {
      yMove_3 = 2;
    }
  }
  else {
    yMove_3 = 2;
  }


  //another part of raindrop 4
  ellipse(500, yMove_4, 3, 3);
  ellipse(450, yMove, 3, 3);

  if (counter > 0) {
    yMove_4 = yMove_4 + drum;
    if (yMove_4 > 700) {
      yMove_4 = 3;
    }
  }
  else {
    yMove_4 = 3;
  }


  //another part of raindrop 5
  ellipse(850, yMove_5, 3, 3);

  if (counter > 0) {
    yMove_5 = yMove_5 + drum;
    if (yMove_5 > 800) {
      yMove_5 = 4;
    }
  }
  else {
    yMove_5 = 4;
  }

  //another part of raindrop 6
  ellipse(550, yMove_6, 3, 3);

  if (counter > 0) {
    yMove_6 = yMove_6 + drum;
    if (yMove_6 > 900) {
      yMove_6 = 5;
    }
  }
  else {
    yMove_6 = 5;
  }

  //another part of raindrop 7
  ellipse(200, yMove_7, 3, 3);
  ellipse(450, yMove_7, 3, 3);

  if (counter > 0) {
    yMove_7 = yMove_7 + drum;
    if (yMove_7 > 1000) {
      yMove_7 = 6;
    }
  }
  else {
    yMove_7 = 6;
  }



  //Delay setting
  // The ripples on the water
  if (counter > 50) {
    xMove = xMove + drum;
    if (xMove > 200) {
      xMove = 0;
    }
  }
  else {
    xMove = 0;
  }
  
  noFill();
  stroke(255)
  ellipse(500, 700, xMove, 10);
  ellipse(800, 300, xMove, 10);
  ellipse(300, 500, xMove, 10);


  
}

