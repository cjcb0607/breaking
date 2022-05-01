class square{
    constructor(x,y)
	{
		var options={
			isStatic:false			
			}
		this.x=x;
		this.y=y;
		this.w=50;
		this.h=50;
		this.body=Bodies.rectangle(this.x, y,this.w,this.h, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		
            var angle = this.body.angle;
			push()
			translate(groundPos.x, groundPos.y);
            rotate(angle);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}