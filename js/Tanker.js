class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.x = x;
     this.y = y;
     this.width = width;
     this.height = height;
    };

    display(){
      var pos = this.body.position;
      rect(pos.x,pos.y,50,100);
      fill(rgb(165, 82, 82));
      rect(pos.x,pos.y - 50,this.width,this.height);
      fill(rgb(150, 73, 73));
      rect(pos.x,pos.y - 70,this.width - 10,20);
      fill(rgb(132, 132, 132));
      rect(pos.x + 30, pos.y - 80, 50,20);

    };
}
