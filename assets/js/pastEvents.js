import data from "./amazing.js";
import { cardIndex, cardPast, comparar_fechas, cardUpcoming, categorias, checks, filtrarCat, filtrar } from "./funciones.js";

const divElementos= document.getElementById('cards')
cardPast(data,divElementos)


let categories= categorias(data.events)
console.log(categories)
let lugar_checks = document.getElementById('checks')


let mostrar_checks = checks(categories, lugar_checks)


lugar_checks.addEventListener('change', () => {
    let arrayFil =filtrarCat(data.events)
    cardPast(arrayFil, divElementos )
    
})


//buscador
let buscador= document.getElementById('buscador').addEventListener('keyup', (e) => {
   
    cardIndex(filtrar(filtrarCat(data.events), e.target.value), divElementos )
})




