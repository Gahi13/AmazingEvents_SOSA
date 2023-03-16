import data from "./amazing.js";
import { cardIndex, pintarCards,fechas_pasadas, comparar_fechas, cardUpcoming, crearChecks, filtrarCat, filtrarPorTexto } from "./funciones.js";

let contenedor = document.getElementById('cards')
let check= document.getElementById('checks')
let input= document.getElementById('buscador')

//captura cuando se realiza la accion
input.addEventListener('input', megaFiltro)
check.addEventListener('change', megaFiltro)

function megaFiltro(){
    let filtroUno=  filtrarPorTexto(data.events, input.value)
    let filtroDos= filtrarCat(filtroUno)
    cardIndex(filtroDos,contenedor)
}
 
cardIndex(data.events,contenedor)
console.log(crearChecks(data.events, check))








