img.src = imgURL;

// добаляем отрисовку счета игры
const drawScore = () => {
  ctx.fillStyle = 'white'
  ctx.font ='40px serif'
  ctx.fillText(score , canvas.width/2, 40)
}

// отрисовка игры на canvas
const render = () => {
  let anim = requestAnimationFrame(render);
  let closeAnimation = () => window.cancelAnimationFrame(anim)
  index += 0.3;
  backgroudX = -((index * SPEED) % canvas.width);

  const bgOneDraw = new DrawBg(0, 0, canvas.width, canvas.height, backgroudX + canvas.width, 0, canvas.width, canvas.height)
  const bgTwoDraw = new DrawBg(0, 0, canvas.width, canvas.height, backgroudX, 0, canvas.width, canvas.height)
  
  bgOneDraw.draw()
  bgTwoDraw.draw()


  birdDraw.jmageY = Math.floor((index % 9) / 3) * SIZE[1]
  birdDraw.draw()

  tubesCanvas.forEach(tube => {
    tube.drawTubeOne( 432, 590)
    tube.drawTubeTwo( 510, 110)
    tube.canvasX = tube.canvasX - tube.speedTube
   
    const isTubeOutOfScreen = tube.canvasX + tube.canvasWidth < 0
    if (isTubeOutOfScreen){
      tube.canvasX = canvas.width
      tube.canvasHeight = Math.random() * 250 + 50
      score = score + 1
    }

    const isTubeBirdX = tube.canvasX - birdDraw.canvasWidth  <= birdDraw.canvasX && (tube.canvasX + tube.canvasWidth > birdDraw.canvasX)
    if (isTubeBirdX){
      const isTubeBirdY = (tube.canvasHeight + tube.distance - birdDraw.canvasHeight < birdDraw.canvasY) || (tube.canvasHeight > birdDraw.canvasY) 
      if (isTubeBirdY){
        const modal = $.modal(score)
        const resetBtn = document.querySelector('.modal-reset')

        modal.open()
        closeAnimation()
        resetBtn.addEventListener('click',() => {window.location.reload()})
      }
    }
  })
  
  drawScore()

  birdDraw.canvasY = birdDraw.canvasY + birdDraw.gravity
  birdDraw.gravity = birdDraw.gravity + .3
};

img.onload = render;