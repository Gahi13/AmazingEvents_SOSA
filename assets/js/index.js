import { cardIndex, cardsPast,fechas_pasadas, comparar_fechas, cardUpcoming, crearChecks, filtrarCat, filtrarPorTexto } from "./funciones.js";
async function getEventos() {
    let data = await fetch("../amazing.json").then((response) => response.json()).then((data) => {
        return data;
    }).catch(err => console.log(err));
    return data;
}
let data= await getEventos()
let events = data.events
let currentDate = data.currentDate

let contenedor = document.getElementById('cards')
let check= document.getElementById('checks')
let input= document.getElementById('buscador')

//captura cuando se realiza la accion
input.addEventListener('input', megaFiltro)
check.addEventListener('change', megaFiltro)
//junta los ods filtros
function megaFiltro(){
    let filtroUno=  filtrarPorTexto(events, input.value)
    let filtroDos= filtrarCat(filtroUno)
    cardIndex(filtroDos,contenedor)
}
 
cardIndex(events,contenedor)
console.log(crearChecks(events, check))








