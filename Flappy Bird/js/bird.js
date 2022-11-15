class Bird {
    constructor(jmageX, jmageY, jmageWidth, jmageHeight, canvasX, canvasY, canvasWidth, canvasHeight){
      this.jmageX = jmageX;
      this.jmageY = jmageY;
      this.jmageWidth = jmageWidth;
      this.jmageHeight = jmageHeight;
      this.canvasX = canvasX;
      this.canvasY = canvasY;
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.gravity = 0;
    }
   
    draw(){
      ctx.drawImage(img, this.jmageX, this.jmageY, this.jmageWidth, this.jmageHeight, this.canvasX, this.canvasY, this.canvasWidth, this.canvasHeight);
    }
  
    fly(){
      this.gravity = -5.5
    }
}
  
const birdDraw = new Bird(432, '', 51, 36, 150, 250, 51, 36)

// создаем полет птицы при нажатии на клавиши
window.onkeydown = () => birdDraw.fly()