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
                <img src="${evento.image}" class="card-img-top object-fit-cover" >
                <div class="card-body body">
                    <h5 class="card-title">${evento.name}</h5>
                    <div class=" d-flex flex-column">
                        <p class="card-text bg-warning flex-grow-1">${evento.description}</p>
                    </div>
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
//past events
//funcion que filtra los eventos por fechas que ya pasaron, dependiendo del current day
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

function cardsPast(array, lugar){
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
//funcion que filtra los eventos por fechas futuras, dependiendo del current day
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
        <div class="card zoom bg-info-subtle " style="width:18rem">
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

//filtra por categoria, luego las pinta en la pantalla
function crearChecks(array,lugar){
    let array_cat= array.map(evento => evento.category)
    let setCat= new Set(array_cat)
    let arrayCheck= Array.from(setCat)
    let checkbox= ''
    arrayCheck.forEach(category => {
        checkbox +=`
         <div class="form-check">
            <input class="form-check-input" type="checkbox" value="${category }" name="categorias" id="${category }">
            <label class="form-check-label" for="${category }">"${category}"</label>
        </div>`
    })
    lugar.innerHTML = checkbox
}
//filtro por texto, osea con el search
function filtrarPorTexto(array, texto){
    let array_filtrado= array.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
    return array_filtrado
}
//me muestra los eventos que son de  lamisma cat
function filtrarCat(array){
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    let arr= Array.from(checkboxes)
    let arr_Chekeados= arr.filter(check => check.checked)
    let array_cat= arr_Chekeados.map(chekeado => chekeado.value)
    let arrFilt= array.filter(elemento => array_cat.includes(elemento.category))
    if (arr_Chekeados.length >0){
        return arrFilt
    }
    return array
}
export{cardIndex, cardsPast,fechas_pasadas, comparar_fechas, cardUpcoming, crearChecks, filtrarCat, filtrarPorTexto}