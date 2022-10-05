const danna = require("./danna_holguin");
const eze = require("./ezequiel_macia");
const maca = require("./macarena_amato");


let mensajeParticipante1 = 'Hola, soy '+danna[0]+', disfruto '+danna[1]+' y soy de '+danna[2]
console.log('Participante 1: ',mensajeParticipante1);

let mensajeParticipante2 = 'Hola, soy '+eze[0]+', disfruto '+eze[1]+' y soy de '+eze[2]
console.log('Participante 2: ',mensajeParticipante2);

let mensajeParticipante3 = 'Hola, soy '+maca[0]+', disfruto '+maca[1]+' y soy de '+maca[2]
console.log('Participante 3: ',mensajeParticipante3);

//------------------------------------------------------------------------------------------//

const fs = require('fs')
let archivo = fs.readFileSync('mensaje.txt', 'utf-8')
console.log(archivo); 
