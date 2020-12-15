class DUS {
    constructor(x, y) {
      var options = {
           'isStatic':false,
          'restitution':0.8,
          'friction':1.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,5, options);
     this.diameter=5
      crush=loadImage("crushed ball.jpg");

      if(keyDown("Up")){
        Velocity.X=-5;
        velocity.Y=5;

      }
      
      World.add(world, this.body);     
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill("blue");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  