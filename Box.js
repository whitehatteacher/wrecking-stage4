class Box {
    constructor(x, y) {
      var options = {
          restitution:0.8,
          friction:1.0,
          density:0.04
      }
      this.body = Bodies.rectangle(x, y, 90, 90, options);
      World.add(world, this.body);

      this.img = loadImage("img/b3.jpg")
    }

    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      angleMode(RADIANS)
      rotate(this.body.angle);
      imageMode(CENTER);
      //strokeWeight(2);
      //stroke("white");
      //fill("green");
      //rect(0, 0, 90, 90);
      image(this.img, 0, 0, 90, 90);
      pop();
    }
  }
  