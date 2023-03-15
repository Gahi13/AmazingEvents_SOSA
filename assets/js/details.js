import data from "./amazing.js";
//
const queryString = location.search
const params = new URLSearchParams(queryString)
const dataId = params.get('id')

const evento = data.events.find (evento => evento._id == dataId)

let detalles= document.getElementById('detalles')
function cardDetails(evento, ubicacion){
    let div = document.createElement('div')
    div.classList= 'card-big d-flex gap-2 rounded p-3'
    div.style='with: 90%; height:90%'
    div.innerHTML= `
    <div class="card mb-3 bg-danger-subtle">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${ evento.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h2 class="card-title">${ evento.name}</h2>
      <h3 class="card-text bg-info-subtle"><strong>Date: </strong> ${ evento.date}</h3>
      <h3 class="card-text bg-info-subtle"><strong>Description: </strong> ${ evento.description}</h3>
      <h3 class="card-text bg-info-subtle"><strong>Place: </strong> ${ evento.place}</h3>
      <h3 class="card-text bg-info-subtle"><strong>Capacity: </strong> ${ evento.capacity}</h3>
      <h3 class="card-text bg-info-subtle"><strong>Assistance: </strong> ${ evento.assistance}</h3>
      <h3 class="card-text bg-info-subtle"><strong>Price: </strong> ${ evento.price}</h3>
      </div>
    </div>
  </div>
</div>
        ` 
        ubicacion.appendChild(div)
}
cardDetails(evento,detalles)
