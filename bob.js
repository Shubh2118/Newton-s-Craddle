class Bob{
    constructor(x, y, r) {
        var options = {
            'restitution':1,
            'friction':0,
            'density':1.0,
            isStatic:true
        }
        this.body = Bodies.circle(x, y, 20 , options);
        this.x = this.x;
        this.y = this.y;
        this.r = this.r;
       
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
       // push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);//
        ellipseMode(RADIUS);
       // console.log(this.r)
        ellipse( this.body.position.x, this.body.position.y, 20,20);
        //pop();
      }
}