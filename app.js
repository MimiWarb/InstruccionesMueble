var tipoMesa = "mesa de cristal"
var outputSafety = "No se ponga encima del producto."
const outputAyuda = "Cualquier duda, póngase en contacto con atención al cliente."
const outputHerramientas = "Solo hace falta un destornillador Phillips para este montaje."
const outputEstabilidad = "Asegurar la estabilidad de la estructura."

var destorPhil = true; // Destornillador Phillips 
var tornilloA = 4; // Tornillos 117494
var tornilloB = 4; // Tornillos 116654/1114676
var tornilloSuelo = 4; // Tornillos 122158/143131
var pegatinas = 3*2; // Pegatinas de silicona 107091/123741
var patas = 2;
var llanta = true; 
var cristal = true;
var madera = false;
var base = true; // Base sólido inferior
var proteger = true; // Manta o cartón para proteger el suelo

let numPaso = 1;
let separador = ". ";

var tornilloTotal = tornilloA + tornilloB + tornilloSuelo;

////// Paso 1 //////
console.log("Vamos a contruir una " + tipoMesa + "!");
console.log("-- " + outputSafety);
console.log("-- " + outputAyuda);
console.log("-- " + outputHerramientas);
console.log("-- Deberías tener " + tornilloTotal + " tornillos en total.")
console.log("-- Deberías tener " + pegatinas + " pegatinas de silicona en total.")
console.log("-- Deberías tener una llanta.")
console.log("-- Deberías tener una encimera de cristal o madera.")


if(proteger){
	console.log(numPaso + separador + "Coloca una manta o cartón en el suelo.");
};
numPaso++;

////// Paso 2 //////
console.log(numPaso + separador + "Pon la llanta encima de la manta con la parte superior hacia abajo.");
numPaso++;

////// Paso 3 y 4 //////
for(let i = 1; i <= patas; i++){
	console.log(numPaso + separador + "Pon pata número " + i);
    numPaso++;
};

for(let i = 1; i <= tornilloB; i++){
    console.log(numPaso + separador + "Atornilla el tornillo 16654/114676 número " + i + " en la pata.");
    numPaso++;
};

console.log(numPaso + separador + outputEstabilidad);
numPaso++;

////// Paso 5 //////
for(let i = 1; i <= tornilloSuelo; i++){
    console.log(numPaso + separador + "Atornilla el tornillo de suelo 122158/143131 número " + i + " en la parte inferior de la pata.");
    numPaso++;
}

////// Paso 6 //////
if(base){
    console.log(numPaso + separador + "Pon la estructura fija a su lado.");
    numPaso++;
    console.log(numPaso + separador + "Desliza la parte sólida inferior sobre las patas");
    numPaso++;
    for(let i = 1; i <= tornilloA; i++){
        console.log(numPaso + separador + "Atornilla el tornillo 117494 número " + i + " en la pieza sólida inferior.");
        numPaso++;
    };
    console.log(numPaso + separador + outputEstabilidad);
    numPaso++;
};

////// Paso 7 //////
console.log(numPaso + separador + "Levanta la mesa en vertical.");
numPaso++;
console.log(numPaso + separador + "Evalua la estabilidad de la estructura fija.");
numPaso++;

for(let i = 1; i <= pegatinas; i++){
    console.log(numPaso + separador + "Pon pegatina de silicona 107091/123741 número " + i + " uniformemente en la llanta.");
    numPaso++;
};

////// Paso 8 //////
if(madera){
    console.log(numPaso + separador + "Pon la pieza de madera encima de las pegatinas de silicona.");
    numPaso++;
} else {
    console.log(numPaso + separador + "Pon la pieza de cristal cuidadosamente encima de las pegatinas de silicona.");
    numPaso++;
};

////// Paso 9 //////
console.log(numPaso + separador + outputEstabilidad);
numPaso++;
console.log(numPaso + separador + "A disfrutar de tu nueva mesa!");
numPaso++;