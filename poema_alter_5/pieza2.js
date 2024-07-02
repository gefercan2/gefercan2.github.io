let circles=[];
class Circles {

	constructor(x1,y1, r1){
		this.x=x1;
		this.y=y1;
		this.r=r1;
		print(this.x);
	}
	move(){
		this.x = this.x + random(-5,5);
		this.y = this.y + random(-5,5);
	}
	show(){
		stroke(200,120,100,50);
		strokeWeight(4);
		noFill();
		ellipse(this.x,this.y,this.r);
	}
	
	randomVectorGenerator(){
		let v=createVector(this.x + random(-100,100),this.y+random(-100,100));
		strokeWeight(24);
		stroke(200,100,100,20);
		line(this.x,this.y,v.x,v.y);
	}
}


