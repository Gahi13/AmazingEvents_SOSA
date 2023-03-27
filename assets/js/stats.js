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

let containerTabla1 =document.getElementById('table1')

function porcentage(parametro){
    let mayorPor= parametro[0]
    let asistencia=0
    for (let i of parametro){
        //console.log(mayorPor.name)
        asistencia+=  i. assistance ? i.assistance : i.estimate
        //if (i.asistencia ){
            if(((i.assistance/i.capacity*100)>= (mayorPor.assistance/mayorPor.capacity)*100)){
                mayorPor=i
                //console.log(mayorPor)
            }
       // }
    }

    return mayorPor.name
}
let por= porcentage(events)
console.log(por)

function porcentageMenor(parametro){
    let menorPor= parametro[0]
    let asistencia=0
    for (let i of parametro){
        //console.log(mayorPor.name)
        asistencia+=  i. assistance ? i.assistance : i.estimate
        //if (i.asistencia ){
            if(((i.assistance/i.capacity*100)<=(menorPor.assistance/menorPor.capacity)*100)){
                menorPor=i
                //console.log(mayorPor)
            }
       // }
    }

    return menorPor.name
}
let porMenor= porcentageMenor(events)
console.log(porMenor)

function mayorCapacidad(parametro){
    let mayorCap= parametro.sort((a, b) => b.capacity - a.capacity)[0].name
    return mayorCap
}
console.log(mayorCapacidad(events))

let capacidad= mayorCapacidad(events)

let datos ={
        "mayorPor": por,
        "menorPor":porMenor,
        "mayorCap": capacidad
}
function PintarEventGeneral(array,lugar){
    lugar.innerHTML=''
    let tarjetas=''
        tarjetas += `
        <tr>
        <td>"${array.mayorPor}"</td>
        <td>"${array.menorPor}"</td>
        <td>"${array.mayorCap}"</td>
      </tr>
            `
    lugar.innerHTML=tarjetas
}
PintarEventGeneral(datos, containerTabla1) 
//---------------------------------------------------------------------------------------------//
let containerTabla2 =document.getElementById('table2')
let columna1 =document.getElementsByClassName('columna1')
let fechasFuturas= comparar_fechas(data)
console.log(fechasFuturas)

function Buscar_categorias(array){
    let array_cat= array.map(evento => evento.category)
    let setCat= new Set(array_cat)
    let arrayCATE= Array.from(setCat)
    
    return arrayCATE

}
//console.log(Buscar_categorias(fechasFuturas))
//let category=Buscar_categorias(fechasFuturas)

function porCategoria(parametro ) {
   let array1=[]
   let array2=[]
   let array3=[]
   let array4=[]
   let array5=[]
   let array6=[]
   let category=Buscar_categorias(parametro)
   for(let evento of parametro){
    for (let i=0; i<category.length; i++ ){
    
    if (evento.category==category[i]){
        switch (i){
            case 0:
                array1.push(evento)
                
                break
            case 1:
                array2.push(evento)
                break
            case 2:
                array3.push(evento)
                break
            case 3:
                array4.push(evento)
                break
            case 4:
                array5.push(evento)
                break
            case 5:
                array6.push(evento)
                break
        }  
   }
}

}
let uno=cuenta_revenues(array1)
let dos=cuenta_revenues(array2)
let tres=cuenta_revenues(array3)
let cuatro=cuenta_revenues(array4)
let cinco=cuenta_revenues(array5)
let seis=cuenta_revenues(array6)
let por1=porcentagePastUpcoming(array1)
let por2=porcentagePastUpcoming(array2)
let por3=porcentagePastUpcoming(array3)
let por4=porcentagePastUpcoming(array4)
let por5=porcentagePastUpcoming(array5)
let por6=porcentagePastUpcoming(array6)

let eventosPorCate ={
    "events":[
     {"array":array1,
     "category":category[0],
    "revenues":uno,
    "porcentaje": por1},
    {"array":array2,
    "category":category[1],
    "revenues":dos,
    "porcentaje": por2},
    {"array":array3,
    "category":category[2],
    "revenues":tres,
    "porcentaje": por3},
    {"array":array4,
    "category":category[3],
    "revenues":cuatro,
    "porcentaje": por4},
    {"array":array5,
    "category":category[4],
    "revenues":cinco,
    "porcentaje": por5},
    {"array":array6,
    "category":category[5],
    "revenues":seis,
    "porcentaje": por6},
]}
return eventosPorCate
}
let cat= porCategoria(fechasFuturas)
console.log( cat)

function cuenta_revenues(array){
    let acum=0
        //asistencia+=  array. assistance ? array.assistance : array.estimate
        for (let event of array){
            //asistencia+=  array. assistance ? array.assistance : array.estimate
        
            acum+= event.estimate*event.price
        
            }
          
        return acum
}

function porcentagePastUpcoming(parametro){
    let porcentage=0
    let as
    for (let i of parametro){
        porcentage=i.estimate/i.capacity*100

    }
    return porcentage
}

function pintarFila( array,lugar){
   
    let tarjetas=''
    array.forEach(evento => {
        tarjetas += `
        <tr>
        <td>"${evento.category}"</td>
        <td>"${evento.revenues}"</td>
        <td>"${evento.porcentaje}"</td>
      </tr>
            `
    });
    lugar.innerHTML=tarjetas
}

pintarFila(cat.events,containerTabla2 )

//---------------------------------------------------------------------------
let containerTabla3 =document.getElementById('table3')
let pasado=fechas_pasadas(data)
console.log(pasado)
let categotiaPast= porCategoria(pasado)
console.log( categotiaPast)
pintarFila(categotiaPast.events, containerTabla3)