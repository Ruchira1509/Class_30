class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255;
  }
  
  display(){
    console.log(this.body.speed);
    super.display();
    if(this.body.speed < 3){ // threshold as 3.. below it pigs are displayed. above 3 speed - remove the pig 
      super.display();
    } else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility-5;
      tint(255, this.visibility);
      image(this.image, this.body.position.x, this.body.position.y,50,50);
      pop();
    }
  }
};