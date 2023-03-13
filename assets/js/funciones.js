//home
function cardIndex(eventos){
    const divElementos= document.getElementById('cards')
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
            <a href="./details.html" class="btn  btn-outline-danger me-md-2">Go to Details</a>
          </div>
        </div>
        </div>
        
        `
        fragmento.appendChild(card)
    }
    divElementos.appendChild(fragmento)
    }
//Past events//
function fechas_pasadas(parametro){
    let past=[]
    past = parametro.events.filter(dato => Date.parse(dato.date)< Date.parse (parametro.currentDate))
    return past
}
function cardPast(parametro){
    const divElementos= document.getElementById('cards')
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
                <a href="./details.html" class="btn btn-outline-success me-md-2">Go to Details</a>
                </div>
            </div>
        </div>
            `
        fragmento.appendChild(card)
    }
    divElementos.appendChild(fragmento)
}
//upcoming events
function comparar_fechas(parametro){
    let future=[]
    future = parametro.events.filter(dato => Date.parse(dato.date)> Date.parse (parametro.currentDate))
    return future
  }
function cardUpcoming(parametro) {
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
                <a href="./details.html" class="btn btn-outline-success me-md-2">Go to Details</a>
            </div>
            </div>
        </div>
        `
        fragmento.appendChild(card)
    }
    divElementos.appendChild(fragmento)
}
export{cardIndex, fechas_pasadas, cardPast, comparar_fechas, cardUpcoming}