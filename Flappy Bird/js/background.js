class DrawBg {
    constructor(jmageX, jmageY, jmageWidth, jmageHeight, canvasX, canvasY, canvasWidth, canvasHeight){
      this.jmageX = jmageX;
      this.jmageY = jmageY;
      this.jmageWidth = jmageWidth;
      this.jmageHeight = jmageHeight;
      this.canvasX = canvasX;
      this.canvasY = canvasY;
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
    }
  
    draw(){
      ctx.drawImage(img, this.jmageX, this.jmageY, this.jmageWidth, this.jmageHeight, this.canvasX, this.canvasY, this.canvasWidth, this.canvasHeight);
    }
}