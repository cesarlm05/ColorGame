var colores = [];
var pickedColor;
var posicion;
var displayColor = document.querySelector("#colorDisplay");//Mensaje.
var squares = document.querySelectorAll(".square");
var btnReset = document.querySelector("#reset");
var btnFacil = document.querySelector("#facil");
var btnMedio = document.querySelector("#medio");
var btnDificil = document.querySelector("#dificil");

var iten;

load();

function load(){
  colorRandon(iten);
  colorSquares(); 
  display();
  reset();
};

btnReset.addEventListener("click", () => load()); //Funcion arrow

//btnFacil.addEventListener("click", iten = 3, () => load());
//btnMedio.addEventListener("click", iten = 6, () => load());
btnDificil.addEventListener("click", iten = 12, () => load());

function generarColor() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return "rgb(" + r + ", " + g + ", " + b + ")";
};

function colorRandon(itens) {
  for (let i = 0; i < itens; i++) {
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
        displayColor.innerHTML = '¡¡¡La cagaste!!!';
        squares[i].style.display="none"
      };
    });
  };
};

function colorGanador() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = pickedColor;
  };
};

/*function reset() {
  colores = [];
};*/

function reset(){
  colores= [];
  pickedColor=generarColor()
  displayColor.textContent=pickedColor
  for (var i = 0; i < squares.length; i++) {
    if(colores[i]){
    squares[i].style.background=colores[i]
    squares[i].style.display="none"
  }else{
    squares[i].style.display="block"
  }
  }
  //h1.style.background="steelblue"
  //messageDisplay.textContent=""
  //btnReset.textContent="New Colors"
}
