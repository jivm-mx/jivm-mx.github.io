/*Constantes para que establecen los valores máximo y mínimos para cambio de color, velocidad, intervalo de tiempo, radio e indice Z*/
  const rgbMin = 0;
  const rgbMax = 256;
  const minVel = 30;
  const maxVel = 301;
  const minRadio = 0;
  const maxRadio = 101;
  const minIndiceZ = 0;
  const maxIndiceZ = 501;

  /*Hay que conocer el tamaño de la bola y con base en eso, establecer los límites*/
  /*Parámetros no configurables*/
  var bola = document.getElementById("bola");
  var direccionX = 1;
  var direccionY = 1;
  var rgb = [0, 0, 0];
  var bolaId = 0;
  var indiceZ = 0;

  /* Parámetros configurables*/
  var velocidadX = 100;
  var velocidadY = 100;
  var tiempo = 10;
  var posicionX = 0;
  var posicionY = 0;
  var radio = 0;
  const minTiempodup = 10;
  const maxTiempodup = 300;
  const bolaAncho = bola.style.width.substring(0, bola.style.width.length - 2);
  const bolaAlto = bola.style.height.substring(0, bola.style.height.length - 2);
  /*límites para valores left (anchoMaximo) y top (altoMaximo)*/
  var anchoMaximo = 1366;
  var altoMaximo = 768;
  const limiteDerecho = anchoMaximo - bolaAncho;
  const limiteInferior = altoMaximo - bolaAlto;
  const limiteIzquierdo = 0;
  const limiteSuperior = 0;
  /*
Al tocar límite derecho, cambia el color de la bola, al tocar el límite izquierdo cambia la velocidad, al todar el límite inferior, cambia el radio y al tocar el límite superior, cambia el índice Z. Hay dos intervalos, uno para actualizar la posición de la bola y otro para realizar una copia y preservar ese estado en pantalla.
Por hacer: detener la ejecución y modificar dinámicamente los intervalos,
*/

  function rebota() {
    posicionX += velocidadX * direccionX;
    posicionY += velocidadY * direccionY;

    if (posicionX >= limiteDerecho) {
      posicionX = limiteDerecho;
      direccionX = -1;
      rgb[0] = getRandomInt(rgbMin, rgbMax);
      rgb[1] = getRandomInt(rgbMin, rgbMax);
      rgb[2] = getRandomInt(rgbMin, rgbMax);
      //cambiar color
      bola.style.background =
        "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
    }
    if (posicionX <= limiteIzquierdo) {
      posicionX = limiteIzquierdo;
      direccionX = 1;
      //cambiar velocidad
      velocidadX = getRandomInt(minVel, maxVel);
      velocidadY = getRandomInt(minVel, maxVel);
    }
    if (posicionY >= limiteInferior) {
      posicionY = limiteInferior;
      direccionY = -1;
      //cambiar forma
      radio = getRandomInt(minRadio, maxRadio);
      bola.style.borderRadius = radio + "%";
    }
    if (posicionY <= limiteSuperior) {
      posicionY = limiteSuperior;
      direccionY = 1;
      //cambiar indice Z
      indiceZ = getRandomInt(minIndiceZ, maxIndiceZ);
      bola.style.zIndex = indiceZ;
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
  function retraso() {
    console.log("Hay que esperar que inicie la grabación del video");
    setInterval(rebota, tiempo);
    setInterval(duplicate, getRandomInt(minTiempodup, maxTiempodup));
  }

  setTimeout(retraso, 3000);

