import data from "./amazing.js";
import { cardIndex, pintarCards,fechas_pasadas, comparar_fechas, cardUpcoming, crearChecks, filtrarCat, filtrarPorTexto } from "./funciones.js";
let contenedor = document.getElementById('cards')
let check= document.getElementById('checks')
let input= document.getElementById('buscador')

//captura cuando se realiza la accion
input.addEventListener('input', megaFiltro)
check.addEventListener('change', megaFiltro)

function megaFiltro(){
    let filtroUno=  filtrarPorTexto(fecha, input.value)
    let filtroDos= filtrarCat(filtroUno)
    pintarCards(filtroDos,contenedor)
}
console.log(fechas_pasadas(data))
let fecha=fechas_pasadas(data)
 
pintarCards(fecha,contenedor)
console.log(crearChecks(fecha, check))



