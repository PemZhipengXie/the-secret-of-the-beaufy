// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

function Star() {
  var sk=100;
  this.x = random(-width/sk, width/sk);
  this.y = random(-height/sk, height/sk);
  this.z = random(width/sk);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width/sk;
      this.x = random(-width/sk, width/sk);
      this.y = random(-height/sk, height/sk);
      this.pz = this.z;
    }
  }

  this.show = function() {
      
blendMode(OVERLAY);
    fill(255);
    noStroke();
      
    

    var sx = map(this.x / this.z, 0, 1, 0, width/sk);
    var sy = map(this.y / this.z, 0, 1, 0, height/sk);

    var r = map(this.z, 0, width/sk, 0.05, 0);
     ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width/sk);
    var py = map(this.y / this.pz, 0, 1, 0, height/sk);

    this.pz = this.z;

    stroke(255);
    strokeWeight(0.01);
    line(px, py, sx, sy);

  }
}
