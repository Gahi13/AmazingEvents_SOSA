import data from "./amazing.js";

function comparar_fechas(data){
  let upcoming=[]
  let fechaActual= new Date(data.currentDate )
  console.log(fechaActual)
  for (let i=0; i<data.events.length; i++) {
      let fecha= new Date(data.events[i].date)
      console.log(fecha)
      if (fechaActual<fecha){
          upcoming.push(data.events[i])
      }
  }
  return upcoming
}
console.log(comparar_fechas(data))
const divElementos= document.getElementById('cards')
let fragmento= document.createDocumentFragment();
for (let events of comparar_fechas(data)) {
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

