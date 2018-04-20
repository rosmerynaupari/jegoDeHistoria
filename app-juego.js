// Declarando las variables
var startGame = "";

setTimeout(function(){
  startGame = prompt('¿Deseas jugar?', 'Si');
startGame= startGame.toUpperCase();

var elemento = document.getElementById('title');

if (startGame === "SI") {
  alert('Responde con a, b, c');
  document.getElementById("boton1").style.visibility = "visible";
  document.getElementById("boton2").style.visibility = "visible";
  document.getElementById("boton3").style.visibility = "visible";
  elemento.innerHTML = "Historia del Perú";
  document.getElementById("tabla").style.visibility = "visible";
  document.getElementById("show").style.visibility = "visible";
  document.getElementById("posicion").style.visibility = "visible";
  document.getElementById("title").style.visibility = "visible";
  
  //respuesta1 .b
  var respuesta1 = prompt('La participación política de la mujer, mediante el ejercicio del sufragio, se logró durante el gobierno de... \n a. Manuel Prado \n b. Manuel Odría \n c. Ricardo Pérez Godoy');
  //respuesta2 .b
  var respuesta2 = prompt('La jornada de las 8 horas en el Perú se implantó definitivamente durante el gobierno de... \n a. Oscar R. Benavides \n b. José Pardo \n c. Augusto B. Leguía' );
  //respuesta3 .a
  var respuesta3 = prompt('Durante el segundo Gobierno de Ramón Castilla las tropas peruanas invadieron la república de... \n a. Ecuador \n b. Colombia \n c. Chile');
} else if (startGame === "NO") {
  elemento.innerHTML = " Ok Nos vemos otro día :( ";
  document.getElementById("tabla").style.visibility = "hidden";
  document.getElementById("show").style.visibility = "hidden";
  document.getElementById("posicion").style.visibility = "hidden";
  document.getElementById("title").style.visibility = "hidden";
  
} else {
  elemento.innerHTML = "Solo puedes contestar con \"Si\" o \"No\". ¡Refresque la página y responda nuevamente!";
  document.getElementById("tabla").style.visibility = "hidden";
  document.getElementById("show").style.visibility = "hidden";
  document.getElementById("posicion").style.visibility = "hidden";
   document.getElementById("title").style.visibility = "hidden";
  
}

// Selecciono los elementos del html por ID y asigno la respuesta del usuario
var elemento1 = document.getElementById('prob1');
elemento1.innerHTML = respuesta1.toUpperCase();
var elemento2 = document.getElementById('prob2');
elemento2.innerHTML = respuesta2.toUpperCase();
var elemento3 = document.getElementById('prob3');
elemento3.innerHTML = respuesta3.toUpperCase();



var acertadas = 0;
var puntaje = 0;

if (respuesta1.toUpperCase()=="B" && respuesta2.toUpperCase()=="B" && respuesta3.toUpperCase()=="A") {

  acertadas= 3;
  puntaje = 30;
} else {
  if (respuesta1.toUpperCase()!="B" && respuesta2.toUpperCase()!="B" && respuesta3.toUpperCase()!="A") {
      acertadas=0;
      puntaje = 0;
  } else {
    if (respuesta1.toUpperCase()!="B" && respuesta2.toUpperCase()!="B" && respuesta3.toUpperCase()=="A") {
       acertadas=1;
       puntaje = 10;
    } else {
      if (respuesta1.toUpperCase()!="B" && respuesta2.toUpperCase()=="B" && respuesta3.toUpperCase()!="A") {
        acertadas=1;
        puntaje = 10;
      } else {
        if (respuesta1.toUpperCase()=="B" && respuesta2.toUpperCase()!="B" && respuesta3.toUpperCase()!="A") {
            acertadas=1;
            puntaje = 10;
        } else {
          acertadas=2;
          puntaje = 20;}
      }
    }
  }
}

var acertadas1 = document.getElementById("acertadas");
acertadas1.innerHTML="Acertaste "+ acertadas+" de 3.";

var puntuacion1 = document.getElementById("puntuacion");
puntuacion1.innerHTML="Tienes "+ puntaje+" puntos.";


},1000);

// Botones de explicación de preguntas
function myFunction1() {
  if (confirm("Ver Explicación 1")){

    var explain1 = document.getElementById("trivia1");
    trivia1.innerHTML="Manuél Odría: \n Un 7 de septiembre de 1955 el general Manuel A. Odría promulgó la Ley N° 12391 que otorgaba, tras largos años de lucha, el voto femenino a la mujer peruana.";

  } else {
    var explain1 = document.getElementById("trivia1");
    trivia1.innerHTML="La participación política de la mujer, mediante el ejercicio del sufragio, se logró durante el gobierno de...";
  }
}

function myFunction2() {
  if (confirm("Ver Explicación 2")){

    var explain2 = document.getElementById("trivia2");
    trivia2.innerHTML= "José Pardo: \n Se decretó el 15 de enero de 1919.";
  } else {
    var explain2 = document.getElementById("trivia2");
    trivia2.innerHTML="La jornada de las 8 horas en el Perú se implantó definitivamente durante el gobierno de...";
  }
}

function myFunction3() {
  if (confirm("Ver Explicación 3")){
    var explain3 = document.getElementById("trivia3");
    trivia3.innerHTML="Ecuador: \n La Guerra peruano-ecuatoriana terminó con la victoria peruana. Sucedió porque Ecuador cedió terrenos peruanos a terceros ingleses para pagar sus deudas.";
  } else {
    var explain3 = document.getElementById("trivia3");
    trivia3.innerHTML="Durante el segundo Gobierno de Ramón Castilla las tropas peruanas invadieron la república de...";
  }
}

