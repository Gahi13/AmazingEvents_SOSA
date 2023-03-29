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
//-----------------------------------------------------------TABLA 1--------------------------------------------------------------------------//
let containerTabla1 =document.getElementById('table1')
//saca el porcentaje mayor de la primera tabla de stats
function porcentageMayorTabla1(arrayEventos){
    let eventoMayorPorcentaje= arrayEventos[0]
    let asistencia=0
    for (let evento of arrayEventos){
         if((((evento. assistance ? evento.assistance : evento.estimate)/evento.capacity*100)>= (eventoMayorPorcentaje.assistance/eventoMayorPorcentaje.capacity)*100)){
            eventoMayorPorcentaje=evento
        }
    }
    return eventoMayorPorcentaje.name
}
let porcentageMayorTable1= porcentageMayorTabla1(events)
console.log(porcentageMayorTable1)
//saca el porcentaje mayor de la primera tabla de stats
function porcentageMenorTabla1(parametro){
    let menorPor= parametro[0]
    let asistencia=0
    for (let i of parametro){
        asistencia+=  i. assistance ? i.assistance : i.estimate
        if(((i.assistance/i.capacity*100)<=(menorPor.assistance/menorPor.capacity)*100)){
            menorPor=i  
        }
    }
    return menorPor.name
}
let porMenorTable1= porcentageMenorTabla1(events)
console.log(porMenorTable1)
//saca la mayor capacidad para la tabla 1
function mayorCapacidad(parametro){
    let eventoMayorCapacidad= parametro.sort((a, b) => b.capacity - a.capacity)[0].name
    return eventoMayorCapacidad
}
console.log(mayorCapacidad(events))
let eventoMayorCap= mayorCapacidad(events)

let datos ={
    "mayorPorcentaje": porcentageMayorTable1,
    "menorPorcentaje":porMenorTable1,
    "mayorCapacidad": eventoMayorCap
}
//pinta la fila de la primera tabla, toma como parametro a "datos"
function pintarTabla1(array,lugar){
    lugar.innerHTML=''
    let tarjetas=''
    tarjetas += `
    <tr>
        <td>${array.mayorPorcentaje}</td>
        <td>${array.menorPorcentaje}</td>
        <td>${array.mayorCapacidad}</td>
    </tr>
    `
    lugar.innerHTML=tarjetas
}
pintarTabla1(datos, containerTabla1) 
//-----------------------------------------------------------TABLA 2--------------------------------------------------------------------------//
let containerTabla2 =document.getElementById('table2')
//let columna1 =document.getElementsByClassName('columna1')
//filtra los eventos que pasaran en un futuro con respecto al current day
let fechasFuturas= comparar_fechas(data)
console.log(fechasFuturas)
//busco las categorias que existen en mi array de eventos y me devuelve un array solo con las categorias
function Buscar_categorias(array){
    let eventos= array.map(evento => evento.category)
    let setCategorias= new Set(eventos)
    let arrayCategoriasEncontradas= Array.from(setCategorias)
    return arrayCategoriasEncontradas
}

//hace la cuenta que ncesito para saber la recaudacion de los eventos de cada categoria
function cuenta_revenues(array){
    let acumulador=0
    for (let event of array){
        acumulador+= (event.estimate ? event.estimate : event.assistance)*event.price
    }  
    return acumulador
}
//porcentaje de la asistencia de la tabla para past y upcoming events
function porcentagePastUpcoming(eventos){
    let porcentage=0
    for (let evento of eventos){
        porcentage+=((evento.assistance ? evento.assistance :evento.estimate)/evento.capacity)*100
    }
    return (porcentage/eventos.length).toFixed(2)
}
//toma por parametro al array de eventos que esta filtrado por fecha, con eso busca los eventos que tienen la misma categoria y las mete en el array eventosCategorias
//luego creo un objeto donde pongo todos los datos que necesito para completar la tabla 2, que son obtenidos por funciones. 
function buscoInfoporCategoria(eventos) {
    let categorias=Buscar_categorias(eventos)
    let infoResultado =[]
    for(let i=0;i< categorias.length;i++){
        let eventosCategoria=[]
        for(let evento of eventos){
            if(evento.category==categorias[i]){
                eventosCategoria.push(evento)
            }
        }
        infoResultado.push({"array":eventosCategoria,
            "category":categorias[i],
            "revenues":cuenta_revenues(eventosCategoria),
            "porcentaje": porcentagePastUpcoming(eventosCategoria)})
    }
    return infoResultado
}
let eventosPorCategorias= buscoInfoporCategoria(fechasFuturas)
function pintarPorFilaTablas23(array,lugar){
    let tarjetas=''
    array.forEach(evento => {
        tarjetas += `
        <tr>
            <td>${evento.category}</td>
            <td>${evento.revenues}</td>
            <td>${evento.porcentaje}%</td>
        </tr>
            `
    });
    lugar.innerHTML=tarjetas
}
pintarPorFilaTablas23(eventosPorCategorias,containerTabla2 )

//-----------------------------------------------------------TABLA 3--------------------------------------------------------------------------//
let containerTabla3 =document.getElementById('table3')
let pasado=fechas_pasadas(data)
console.log(pasado)
let categotiaPast= buscoInfoporCategoria(pasado)
console.log( categotiaPast)
pintarPorFilaTablas23(categotiaPast, containerTabla3)