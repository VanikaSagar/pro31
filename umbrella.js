class umbrella{
    constructor(x,y){
        var options={
            'restitution':1,
            'isStatic':true
        }

        this.body=Bodies.circle(x,y,5,options)

        this.radius=5
        this.image=loadImage("walking_1.png")
 
         World.add(world,this.body)
     }

     display(){
         var pos=this.body.position

         
         
         imageMode(CENTER)
         image(this.image,pos.x,pos.y-130,370,400)
         
     }
    }

