class Tube{
    constructor(canvasX){
      this._imgWidth = 78;
      this._imgHeight = 480;
      this.canvasX = canvasX;
      this.canvasY = 0;
      this.canvasWidth = 100;
      this.canvasHeight = 350;
      this.distance = 150;
      this.speedTube = 2.5;
    }
  
    drawTubeOne(imgX, imgY){
      ctx.drawImage(img, imgX, imgY, this._imgWidth, -this._imgHeight, this.canvasX, this.canvasY, this.canvasWidth, this.canvasHeight);
    }
  
    drawTubeTwo = (imgX, imgY) => {
      ctx.drawImage(img, imgX, imgY, this._imgWidth, this._imgHeight, this.canvasX, this.canvasHeight + this.distance, this.canvasWidth, canvas.height);
    }
}
  
const tubesCanvas = [new Tube(canvas.width), new Tube(canvas.width + 260)]