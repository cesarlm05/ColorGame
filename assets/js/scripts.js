var colores = [];
var pickedColor;
var posicion;
var displayColor = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var btnNevoColor = document.querySelector("#nuevo");

load();

function load(){
  colorRandon();
  colorSquares(); 
  display();
  reset();
};

btnNevoColor.addEventListener("click", () => load()); //Funcion arrow

function generarColor() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return "rgb(" + r + ", " + g + ", " + b + ")";
};

function colorRandon() {
  for (let i = 0; i < 6; i++) {
      let color = generarColor();
      colores.push(color);
  };
};

function colorSquares() {
  for (let i = 0; i < squares.length; i++) {
    let color = colores[i];
    squares[i].style.background = color;
  };
};

function display() {
  posicion = Math.floor(Math.random() * colores.length);
  pickedColor = colores[posicion];
  displayColor.innerHTML = pickedColor;
  console.log('PickedColor = '+pickedColor);
  console.log('Posicion del Array Colores: '+posicion);
  comparar();
};

function comparar() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
      if (posicion === i) {
        displayColor.innerHTML = '¡¡¡GENIAL GANASTE!!!';
        colorGanador();
      } else {
        this.style.background = "#333";
      };
    });
  };
};

function colorGanador() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = pickedColor;
  };
};

function reset() {
  colores = [];  
};