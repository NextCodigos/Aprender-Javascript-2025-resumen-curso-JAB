let edad=18;
const NOMBRE="Diego";
let lenguaje="Javascript";
let verdadero=true;

let nota1=6;
let nota2=4;
let resultado=(nota1+nota2)/2;
// let aprobado=resultado>=5;
// let notaMaxima=resultado===10;

// Operador ternario
let aprobado=resultado>=5 ? "Has aprobado" : "Has suspendido";
let notaMaxima=resultado===10 ? "Has sacado el maximo" : "No has sacado el maximo";
// Para ver en consola pagina web escribo:
// aprobado;
// ("Has aprobado");
// notaMaxima;
// ("No has sacado el maximo"); 

// SELECTORES:
// Seleccionamos: <div class="caja"></div>
// document.querySelector(".caja").innerHTML=aprobado;//Resultado arriba boton: Has aprobado; La suma de nota1 y nota2 es 10/2=5 ,si da menos de 10 Has suspendido.

// Eventos y funciones
// Solo selecciona el primer boton de los dos
// document.querySelector("button").addEventListener("click",saludar);

// Selecciono el 2º boton
document.querySelectorAll("button")[1].addEventListener("click",saludar);

// Para ejecutar funcion no es practico.
// saludar();
function saludar(){
   document.querySelector(".caja").innerHTML = aprobado; 
}