
import { cardIndex, pintarCards,fechas_pasadas, comparar_fechas, cardUpcoming, crearChecks, filtrarCat, filtrarPorTexto } from "./funciones.js";
async function getEventos() {
    let data = await fetch("amazing.json").then((response) => response.json()).then((data) => {
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

function megaFiltro(){
    let filtroUno=  filtrarPorTexto(fecha, input.value)
    let filtroDos= filtrarCat(filtroUno)
    pintarCards(filtroDos,contenedor)
}
console.log(fechas_pasadas(data))
let fecha=fechas_pasadas(data)
 
pintarCards(fecha,contenedor)
console.log(crearChecks(fecha, check))



