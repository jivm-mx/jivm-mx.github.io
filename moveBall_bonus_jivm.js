/*Constantes para que establecen los valores máximo y mínimos para cambio de color, velocidad, intervalo de tiempo, radio e indice Z*/
const rgbMin = 0;
const rgbMax = 256;
/*Cantidad minima y máxima (excluyente) de pixeles que se sumaran a la posición horizontal o vertical*/
const minVel = 10;
const maxVel = 31;
/*Valor de radio mínimo y máximo (excluyente) para cambio de forma */
const minRadio = 0;
const maxRadio = 101;
/*Valor de radio mínimo y máximo (excluyente) para cambio de profundidad (indice Z) */
const minIndiceZ = 0;
const maxIndiceZ = 501;

/*Hay que conocer el tamaño de la bola y con base en eso, establecer los límites*/
/*Parámetros no configurables*/
var bola = document.getElementById("bola");
var direccionX = 1;
var direccionY = 1;
var bolaId = 0;
var indiceZ = 0;
var rgb = [0, 0, 0];

/* Parámetros configurables*/
var velocidadX = 1;
var velocidadY = 1;
/*Tiempo para intervalos */
var tiempo = 20;
var tiempoduplicado = 1000;

const bolaAncho = bola.style.width.substring(0, bola.style.width.length - 2);
const bolaAlto = bola.style.height.substring(0, bola.style.height.length - 2);
/*límites para valores left (anchoMaximo) y top (altoMaximo)*/
var anchoMaximo = 800;
var altoMaximo = 600;
const limiteDerecho = anchoMaximo - bolaAncho;
const limiteInferior = altoMaximo - bolaAlto;
const limiteIzquierdo = Number(bola.style.left.substring(0, bola.style.left.length - 2));
const limiteSuperior = Number(bola.style.top.substring(0, bola.style.top.length - 2));
const radioInicial = Number(bola.style.borderRadius.substring(0, bola.style.borderRadius.length - 1));
/*Posiciones iniciales que dependen de los limites */
var posicionX = limiteIzquierdo;
var posicionY = limiteSuperior;
var radio = radioInicial;
/*
Al tocar límite derecho, cambia el color de la bola, al tocar el límite izquierdo cambia la velocidad, al todar el límite inferior, cambia el radio y al tocar el límite superior, cambia el índice Z. Hay dos intervalos, uno para actualizar la posición de la bola y otro para realizar una copia y preservar ese estado en pantalla.
Por hacer: detener la ejecución y modificar dinámicamente los intervalos,
*/

function rebota() {
  // console.log("posicion actual (x,y):" + posicionX + "," + posicionY);
  document.getElementById("posicionX").innerHTML = posicionX;
  document.getElementById("posicionY").innerHTML = posicionY;
  document.getElementById("velocidadX").innerHTML = velocidadX;
  document.getElementById("velocidadY").innerHTML = velocidadY;
  document.getElementById("direccionX").innerHTML = direccionX;
  document.getElementById("direccionY").innerHTML = direccionY;
  document.getElementById("indiceZ").innerHTML = indiceZ;
  document.getElementById("radio").innerHTML = radio;
  

  posicionX += velocidadX * direccionX;
  posicionY += velocidadY * direccionY;

  if (posicionX >= limiteDerecho) {
    posicionX = limiteDerecho;
    direccionX = -1;
    cambiaColor();
  }
  if (posicionX <= limiteIzquierdo) {
    posicionX = limiteIzquierdo;
    direccionX = 1;
    cambiaVelocidad();
  }
  if (posicionY >= limiteInferior) {
    posicionY = limiteInferior;
    direccionY = -1;
    cambiaForma();
  }
  if (posicionY <= limiteSuperior) {
    posicionY = limiteSuperior;
    direccionY = 1;
    cambiaIndiceZ();
  }

  bola.style.left = posicionX + "px";
  bola.style.top = posicionY + "px";
}

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//https://stackoverflow.com/questions/4427094/how-can-i-duplicate-a-div-onclick-event
function duplicate() {
  var clone = bola.cloneNode(true); // "deep" clone
  clone.id = "bola" + ++bolaId;
  // or clone.id = ""; if the divs don't need an ID
  bola.parentNode.appendChild(clone);
}

function cambiaColor() {
  rgb[0] = getRandomInt(rgbMin, rgbMax);
  rgb[1] = getRandomInt(rgbMin, rgbMax);
  rgb[2] = getRandomInt(rgbMin, rgbMax);
  bola.style.background = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
}

function cambiaVelocidad() {
  velocidadX = getRandomInt(minVel, maxVel);
  velocidadY = getRandomInt(minVel, maxVel);
}

function cambiaForma() {
  radio = getRandomInt(minRadio, maxRadio);
  bola.style.borderRadius = radio + "%";
}

function cambiaIndiceZ() {
  indiceZ = getRandomInt(minIndiceZ, maxIndiceZ);
  bola.style.zIndex = indiceZ;
}
function debug(){
  console.log(
    "posicion nueva (x,y):" +
      posicionX +
      "," +
      posicionY +
      " color:" +
      rgb +
      ", velocidadX: " +
      velocidadX +
      ", velocidadY: " +
      velocidadY +
      ", radio: " +
      radio +
      "%, indice-z: " +
      indiceZ
  );
}

function retraso() {
  console.log("Hay que esperar que inicie la grabación del video");
  setInterval(rebota, tiempo);
  setInterval(duplicate, tiempoduplicado);
}

setTimeout(retraso, 1500);
