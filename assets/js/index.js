import data from "./amazing.js";
import { cardIndex, cardPast,fechas_pasadas, comparar_fechas, cardUpcoming, categorias, checks, filtrarCat, filtrar } from "./funciones.js";

//DIBUJAR LAS CARDS
const divElementos= document.getElementById('cards')
cardIndex(data.events, divElementos)
//FILTRAR POR CATEGORIAS
//para listar las categorias, luego las pongo sin repetir
let categories= categorias(data.events)
let lugar_checks = document.getElementById('checks')
let mostrar_checks = checks(categories, lugar_checks)
console.log(mostrar_checks)
//para filtrar por categorias
lugar_checks.addEventListener('change', () => {
    let arrayFiltrado = filtrarCat(data.events)
    cardIndex(arrayFiltrado, divElementos )
})
//buscador
let buscador= document.getElementById('buscador').addEventListener('keyup', (e) => {
   
    cardIndex(filtrar(filtrarCat(data.events), e.target.value), divElementos )
})








