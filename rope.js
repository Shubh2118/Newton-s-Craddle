class Rope{
    constructor(bodyA,bodyB,offsetx,offsety)
    {
        var options = {
            bodyA:bodyA,bodyB:bodyB,pointB:{x:this.offsetx,y:this.offsety}
        }
this.offsetx=offsetx
this.offsety=offsety

        this.chain= Matter.Constraint.create(options)
        World.add(world,this.chain);
    }
display(){
    var pointA = this.chain.bodyA.position
    var pointB = this.chain.bodyB.position
var x = pointA.x ;
var y = pointA.y ;
var x2 = pointB.x+this.offsetx ;
var y2 = pointB.y+this.offsety ;
    strokeWeight(4)
    line (x,y,x2,y2)
    
}





}
