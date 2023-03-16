//home
function cardIndex(eventos, lugarCard){
    lugarCard.innerHTML=''
    if(eventos.length==0){
        lugarCard.innerHTML = '<h3 class="display-1 fw-bolder">NO MATCHES WERE FOUND WITH THE NAME/CATEGORY YOU ENTERED, PLEASE ADJUST YOUR SEARCH  </h3>'
        return
    }
        let fragmento= document.createDocumentFragment();
        for (let evento of eventos) {
            const card = document.createElement('div')
            card.classList.add('card')
            card.style.width = '18rem'
            card.innerHTML = ` 
            <div class="card zoom bg-danger-subtle">
            <img src="${evento.image}" class="card-img-top " >
            <div class="card-body body">
            <h5 class="card-title">${evento.name}</h5>
            <p class="card-text bg-warning">${evento.description}</p>
            <div class=" d-grid gap-2 d-md-flex justify-content-md-end">
                <a href="./details.html?id=${evento._id}" class="btn  btn-outline-danger me-md-2">Go to Details</a>
            </div>
            </div>
            </div>
            
            `
            fragmento.appendChild(card)
        }
        lugarCard.appendChild(fragmento)
     }
 

function fechas_pasadas(parametro){
    let past=[]
    let fechaActual= new Date(parametro.currentDate )
    for (let i=0; i<parametro.events.length; i++) {
        let fecha= new Date(parametro.events[i].date)
        if (fechaActual>fecha){
            past.push(parametro.events[i])
        }
    }
    return past
  }
  function pintarCards(array, lugar){
    if (array.length==0){
        lugar.innerHTML=`<h3 class="display-1 fw-bolder">NO MATCHES WERE FOUND WITH THE NAME YOU ENTERED, PLEASE ADJUST YOUR SEARCH  </h3>`
        return
    }
    let tarjetas=''
    array.forEach(evento => {
        tarjetas += `
        <div class="card zoom bg-warning-subtle" style="width:18rem">
            <img src="${evento.image}" class="card-img-top" >
            <div class="card-body body">
                <h5 class="card-title">${evento.name}</h5>
                <p class="card-text bg-info-subtle">${evento.description}</p>
                <div class=" d-grid gap-2">
                <a href="./details.html?id=${evento._id}" class="btn btn-outline-success me-md-2">Go to Details</a>
                </div>
            </div>
        </div>
            `
    });
    lugar.innerHTML=tarjetas
}
//upcoming events
function comparar_fechas(parametro){
    let past=[]
    let fechaActual= new Date(parametro.currentDate )
    for (let i=0; i<parametro.events.length; i++) {
        let fecha= new Date(parametro.events[i].date)
        if (fechaActual<fecha){
            past.push(parametro.events[i])
        }
    }
    return past
  }
function cardUpcoming(array, lugar) {
    
    if (array.length==0){
        lugar.innerHTML='<h3 class="display-1 fw-bolder">NO MATCHES WERE FOUND WITH THE NAME/CATEGORY YOU ENTERED, PLEASE ADJUST YOUR SEARCH  </h3>'
        return
    }
    let tarjetas=''
    array.forEach(evento => {
        tarjetas += `
        <div class="card zoom bg-info-subtle" style="width:18rem">
            <img src="${evento.image}" class="card-img-top" >
            <div class="card-body body">
                <h5 class="card-title">${evento.name}</h5>
                <p class="card-text bg-danger-subtle">${evento.description}</p>
                <div class=" d-grid gap-2">
                <a href="./details.html?id=${evento._id}" class="btn btn-outline-success me-md-2">Go to Details</a>
                </div>
            </div>
        </div>
            `
    });
    lugar.innerHTML=tarjetas
}

//FILTRAR POR CATEGORIAS
//funcion crearchecks
function crearChecks(array,lugar){
    let array_cat= array.map(evento => evento.category)
    //console.log(array_cat)
    let setCat= new Set(array_cat)
    //console.log(setCat)
    let arrayCheck= Array.from(setCat)
    //console.log(arrayCheck)
    let checkbox= ''
    arrayCheck.forEach(category => {
        checkbox +=` <div class="form-check">
        <input class="form-check-input" type="checkbox" value="${category }" name="categorias" id="${category }">
        <label class="form-check-label" for="${category }">"${category}"</label>
        </div>`
    })
    lugar.innerHTML = checkbox
}
//que hacer(filtrar)
function filtrarPorTexto(array, texto){
    let array_filtrado= array.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
    return array_filtrado
}

function filtrarCat(array){
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    //console.log(checkboxes)
    let arr= Array.from(checkboxes)
    let arr_Chekeados= arr.filter(check => check.checked)
    let array_cat= arr_Chekeados.map(chekeado => chekeado.value)
    //console.log(array_cat)
    let arrFilt= array.filter(elemento => array_cat.includes(elemento.category))
    if (arr_Chekeados.length >0){
        return arrFilt
    }
    return array
}
export{cardIndex, pintarCards,fechas_pasadas, comparar_fechas, cardUpcoming, crearChecks, filtrarCat, filtrarPorTexto}