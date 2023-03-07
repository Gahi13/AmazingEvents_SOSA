import data from "./amazing.js";

function fechas_pasadas(data){
  let past=[]
  let fechaActual= new Date(data.currentDate )
  console.log(fechaActual)
  for (let i=0; i<data.events.length; i++) {
      let fecha= new Date(data.events[i].date)
      console.log(fecha)
      if (fechaActual>fecha){
          past.push(data.events[i])
      }
  }
  return past
}
console.log(fechas_pasadas(data))
const divElementos= document.getElementById('cards')
let fragmento= document.createDocumentFragment();
for (let eventos of fechas_pasadas(data)) {
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
