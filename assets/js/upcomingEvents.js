import data from "./amazing.js";
import { cardIndex, cardPast, fechas_pasadas, comparar_fechas, cardUpcoming, categorias, checks, filtrarCat, filtrar } from "./funciones.js";
const divElementos= document.getElementById('cards')
console.log(comparar_fechas(data))
cardUpcoming(data, divElementos)

let lugar_checks = document.getElementById('checks')
let categories= categorias(data.events)
console.log(categories)
let mostrar_checks = checks(categories, lugar_checks)
console.log(mostrar_checks)
lugar_checks.addEventListener('change', () => {
    let arrayFiltrado = filtrarCat(data.events)
    cardUpcoming(arrayFiltrado, divElementos )
})
let buscador= document.getElementById('buscador').addEventListener('keyup', (e) => {
   
    cardIndex(filtrar(filtrarCat(data.events), e.target.value), divElementos )
})