//import data from "./amazing.js";
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

function megaFiltro(){
    //filtra por texto (search)
    let filtroUno=  filtrarPorTexto(fecha, input.value)
    //filtra por categorias (checks)
    let filtroDos= filtrarCat(filtroUno)
    cardUpcoming(filtroDos,contenedor)
}
//filtra los eventos despues del current day
console.log(comparar_fechas(data))
let fecha=comparar_fechas(data)
 
cardUpcoming(fecha,contenedor)

console.log(crearChecks(fecha, check))
