function recursion(r) {
    //blendMode(OVERLAY);
    blendMode(SCREEN);
    // 
    // blendMode(BURN);
    
    if (goCrazy ==1){
        ratio = 0;
    } else {
        ratio = map(cos(frameCount / 60), 0, 1, PI / 4, 4 * PI);
    }
   
   

    r = r * ratio2;
    
    push();
    strokeWeight(0.5);
    noStroke();
    fill(74, 224, 242);
    ellipse(2 * r, 2 * r, 3, 3);
    ellipse(-2 * r, -2 * r, 3, 3)
    ellipse(-3 * r, -3 * r, 3, 3);
    pop();



    if (r > 30) {
        // branch 1
        push();
        translate(60, 0);
        rotate(ratio);
        recursion(r);
        pop();
        
        //branch 2
        push();
        translate(60, 0);
        rotate(-ratio);
        recursion(r);
        pop();
    }

}