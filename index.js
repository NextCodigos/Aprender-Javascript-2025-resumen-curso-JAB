// ARRAYS de objeto
let notas=[
    {
        nota:7,
        nombre:"Jab"
    },
    {
        nota:6.5,
        nombre:"Eva"
    }
];

let edad=18;
const NOMBRE="Diego";
let lenguaje="Javascript";
let verdadero=true;

let nota1=9;
let nota2=9;
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

// Selecciono el 1º boton Minuto 20 video
// document.querySelectorAll("button")[0].addEventListener("click",contar);
document.querySelector("button").addEventListener("click",contar);
// Selecciono el 2º boton
document.querySelectorAll("button")[1].addEventListener("click",saludar);

// Para ejecutar funcion no es practico.
// saludar();
function saludar(){
    // CONDICIONALES
    // insuficiente <5
    // Suficiente 5 - <7
    // Notable 7 - <9
    // Sobresaliente >=9
    // Solo tiene efectoo dentro de la funcion
    let mensaje;
    if(resultado<5){
        mensaje="Insuficiente";
    }  else if(resultado<7){
        mensaje="Suficiente";
    } else if (resultado<9){
        mensaje="Notable";
    } else if (resultado>=9){
        mensaje =
          "Sobresaliente<a href='https://www.html6.es'><img src='./Img/rey_incognito.png'></a></a>";

    }
    document.querySelector(".caja").innerHTML = mensaje; 
}

function contar(){
    // Recorremos Array
     for (let i = 0; i < notas.length; i++) {
        document.querySelector(".caja").innerHTML += `
        <div>${notas[i].nombre} Ha sacado ${notas[i].nota}</div>
        `;
    }
}