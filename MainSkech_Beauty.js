/*
Author: Pem Zhipeng Xie
Name: Muisc Bubbles


*/

var sound;
var amplitude;




var ratio;
var ratio2;
var ratio3;


var sound;
var amplitude;
var galaxy = 8;
var flower = 1;


//inital postion of the slider
var xFlower = 1200 - 300;
var a = 1200 - 360;
var b = 1200 - 50;

var goCrazy = 1;

//star
var stars = [];
var speed;



function preload() {
    sound = loadSound(' [No Copyright Music] Journey - Jay Hifive & Broken Elegance.mp3 ');
}




function setup() {
    createCanvas(windowWidth, windowHight);
    sound.loop();
    amplitude = new p5.Amplitude();


    //star
    for (var i = 0; i < 100; i++) {
        stars[i] = new Star();
    }
}



function draw() {
    background(23, 35, 55, 99);
    TYPE("029","05 NOV 2017");


    //slider 

 
   

     xFlower = mouseX;


    zoom = map(xFlower, 0, width, 0.4, 30);
 


  

 

    var level = amplitude.getLevel();

    //    star
    //    var rs = map(level, 0, width/50, 16, 0);
    speed = map(level, 0, 0.5, 0, 20);
    push();
    translate(800 / 2, height / 2);
    scale(zoom);
    for (var i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].show();
    }
    pop();





    //part one universe
    if (random() > 0.6) {
        galaxy += 2;
    } else {
        galaxy - +1;
    }

    if (galaxy > 16) {
        galaxy = 3;
    } else if (galaxy < 3) {
        galaxy = 16;
    }


    //ratio for the change of level inside of " function universe()"
    ratio2 = map(level, 0.0, 0.4, 0, 0.70);


    push();
    //level 200 space for control panel 
    translate(800 / 2, height / 2)


    //scale to see 
    scale(zoom);
    push()
    for (i = 0; i < galaxy * 2; i++) {
        recursion(400);
        rotate(PI / galaxy);
    }
    pop();
    pop();



    //part two gene
    var h = 50 / 270;
    if (level > 0.05) {
        flower = flower + 1;
    } else if (level > 0.8) {
        flower += 3;
    }

    if (flower > 30) {
        flower -= 10;
    }
    push();

    //roate the gene shape
    for (var i = 0; i < flower; i++) {
        push();
        translate(800 / 2, height / 2);
        scale(zoom);
        rotate(i * 2 * PI / flower);

        //one gene shape
        for (var j = 10; j < 120; j += 8) {
            var lengths = map(level, 0, 0.4, 0.5, 5);
            var l = lengths * 4 * sin(radians(j * 2 - frameCount * 2) + PI / 4);

            blendMode(REPLACE);
            if (goCrazy == 1) {
                stroke(74, 224, 242);
                strokeWeight(0.1);
                line(-l, (j * h + l / 2), l, j * h + l / 2);
                fill(233, 2, 146);
                strokeWeight(0.1);
                noStroke();
                ellipse(-l, (j * h + l / 2), 0.3, 0.3);
                ellipse(l, j * h + l / 2, 0.3, 0.3);
            } else {
                stroke(74, 224, 242);
                strokeWeight(0.1);
                line(-l, (j * h), l, j * h + l / 2);
                fill(233, 2, 146);
                strokeWeight(0.1);
                noStroke();
                ellipse(-l, (j * h), 0.3, 0.3);
                ellipse(l, j * h + l / 2, 0.3, 0.3);
            }

        }
        pop();
    }
    pop();

}

