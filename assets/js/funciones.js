//home
function cardIndex(eventos, lugarCard){
    lugarCard.innerHTML=''
    if(eventos.length==0){
        lugarCard.innerHTML = '<h3>NO MATCHES WERE FOUND WITH THE NAME YOU ENTERED, PLEASE ADJUST YOUR SEARCH  </h3>'

    }else{
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
 }
//Past events//
function fechas_pasadas(parametro){
    let past=[]
    
    past = parametro.events.filter(dato => Date.parse(dato.date)< Date.parse (parametro.currentDate))
    return past
}
function cardPast(parametro, contenedor){
    contenedor.innerHTML=''
    if(parametro.length==0){
        contenedor.innerHTML = '<h3>NO MATCHES WERE FOUND WITH THE NAME YOU ENTERED, PLEASE ADJUST YOUR SEARCH  </h3>'

    }else{
    let fragmento= document.createDocumentFragment();
    for (let eventos of fechas_pasadas(parametro)) {
        const card = document.createElement('div')
        card.classList.add('card')
        card.style.width = '18rem'
        card.innerHTML = ` 
        <div class="card zoom bg-warning-subtle">
            <img src="${eventos.image}" class="card-img-top" >
            <div class="card-body body">
                <h5 class="card-title">${eventos.name}</h5>
                <p class="card-text bg-info-subtle">${eventos.description}</p>
                <div class=" d-grid gap-2">
                <a href="./details.html?id=${eventos._id}" class="btn btn-outline-success me-md-2">Go to Details</a>
                </div>
            </div>
        </div>
            `
        fragmento.appendChild(card)
    }
    contenedor.appendChild(fragmento)
}
}
//upcoming events
function comparar_fechas(parametro){
    let future=[]
    future = parametro.events.filter(dato => Date.parse(dato.date)> Date.parse (parametro.currentDate))
    return future
  }
function cardUpcoming(parametro, contenedor) {
    contenedor.innerHTML=''
    if(parametro.length==0){
        contenedor.innerHTML = '<h3>NO MATCHES WERE FOUND WITH THE NAME YOU ENTERED, PLEASE ADJUST YOUR SEARCH  </h3>'

    }else{
    const divElementos= document.getElementById('cards')
    let fragmento= document.createDocumentFragment();
    for (let events of comparar_fechas(parametro)) {
        const card = document.createElement('div')
        card.classList.add('card')
        card.style.width = '18rem'
        card.innerHTML = ` 
        <div class="card zoom bg-info-subtle">
            <img src="${events.image}" class="card-img-top" >
            <div class="card-body body">
            <h5 class="card-title">${events.name}</h5>
            <p class="card-text bg-danger-subtle">${events.description}</p>
            <div class=" d-grid gap-2 d-md-flex justify-content-md-center">
                <a href="./details.html?id=${events._id}" class="btn btn-outline-success me-md-2">Go to Details</a>
            </div>
            </div>
        </div>
        `
        fragmento.appendChild(card)
    }
   contenedor.appendChild(fragmento)
}
}
//FILTRAR POR CATEGORIAS
function categorias(lista){
    let cat = lista.map(evento => evento.category)
    let cat_unica = new Set(cat)
    let convertir_array = Array.from(cat_unica)
    return convertir_array
}
function checks(parametro, lugar){
    let frag = document.createDocumentFragment()
    for(const category of parametro){
        let div = document.createElement('div')
        div.classList = "form-check"
        div.innerHTML = `<input class="form-check-input" type="checkbox" value="${category.toString().toLowerCase() }" name="categorias" id="${category.toString().toLowerCase() }">
        <label class="form-check-label" for="${category.toString().toLowerCase() }">"${category}"</label>`
        frag.appendChild(div)
    }
    lugar.appendChild(frag)
}
function filtrarCat(array){
    let checksCapturados = document.querySelectorAll('input[class="form-check-input"]')
    let checksArrays= Array.from(checksCapturados)
    let checkMarcados = checksArrays.filter(check => check.checked )
    let checkMap = checkMarcados.map(check => check.id)
    if(checkMap.length>0){
       let arrayFiltrado = array.filter(evento => checkMap.includes(evento.category.toLowerCase()))
       return arrayFiltrado
    }
    return array
}
function filtrar(parametro, texIngresado){
    let array = parametro.filter(item => item.name.toLowerCase().includes(texIngresado.toLowerCase().trim()))
    if(array.length>0){
        return array
    }
    return []
}
export{cardIndex, cardPast,fechas_pasadas, comparar_fechas, cardUpcoming, categorias, checks, filtrarCat, filtrar}