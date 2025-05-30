let x
let y
function setup() {
  createCanvas(800, 800);
  x = random(800);
  x = int(x)
  y = random(800);
  y= int(y)
  
}

function draw() {
  background("black")
 circle(x,y,10)
  x = x + random(-2,2)
  y = y + random(-2,2)
 
  let distanciax
  let distanciay
  let distancia;
  
distanciaX = mouseX - x
  distanciaY = mouseY - y
distancia = sqrt(distanciaX * distanciaX + distanciaY *distanciaY)
  
  fill("rgb(88,84,84)")
  circle(mouseX, mouseY , distancia)
  fill("rgb(0,0,0)")
  
  if(distancia < 3){
    fill("pink")
    text("Encontrei!", 400, 400);
    
    noLoop()
  }
}