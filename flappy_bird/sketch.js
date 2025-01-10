let cnv;
let bird;
let slider_birdsize;
let img1, img2;

function preload(){
    img1 = loadImage('flappy_bird_1.png');
    img2 = loadImage('flappy_bird_2.png');
}


function setup(){
    imageMode(CENTER);
    cnv = createCanvas(720,480);
    cnv.parent('myCanvas');
    
    slider_birdsize = createSlider(0, 120, 60); // min, max, start
    slider_birdsize.parent('slider_bird');

    bird = new Bird();
}

function draw(){
    background(160,202,176);
    cnv.style('border-radius', '20px');
    cnv.style('box-shadow', '3px 3px 7px 2px rgba(87, 92, 85, 0.8)')
    bird.show();
    bird.update();
    bird.size = slider_birdsize.value();
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
      bird.up();
      //console.log("SPACE");
    }
  }

