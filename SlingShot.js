class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);

    }
    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA =null;
        
    }
    display(){
        if (this.body.speed < 3){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
             imageMode(CENTER);
            image(this.image,0,0 , this.width, this.height); 
            pop();
          }
          else{
            World.remove(world,this.body);
            push();
            this.Visibility=this.visibility-5;
            tint(255,this.visiblity);
            pop();
          }
        }
  };