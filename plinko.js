class Plinko
{
    constructor(x, y) 
    {
        var options = {
           
          isStatic: true,
          restitution: 1.0,
          friction:  0,
         
            
        }

      this.body = Bodies.circle(x, y,10,options);
      
        this.x = x;
        this.y = y;
        this.radius = 10;

      World.add(world, this.body);
      
}
display()
{
    var pos = this.body.position;
    ellipseMode(RADIUS);

    push()

    translate (pos.x , pos.y)

    fill("white");

    

    ellipse(0, 0, this.radius);

    pop()
  }



}