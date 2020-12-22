class Ball {
  constructor(x, y, r) {
    var options = { 
      density: 1
    };

    this.body = Bodies.circle(x, y, r, options);
    World.add(world, this.body);
  }

  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    stroke('blue');
    fill('red');
    ellipseMode(RADIUS)
    ellipse(0, 0, this.body.circleRadius);
    pop();
  }
}
