class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
this.visibilty =255;
  }
  display(){
console.log(this.body.speed);


if(this.body.speed < 7){
  super.display();
} else{
  push();
   World.remove(world, this.body);
   this.visibility=this.visibility -5;
   tint(255, this.visibility);
   image(this.image, this.body.position.x, this.body.position.y, 50,50);
   pop();
}
}
}