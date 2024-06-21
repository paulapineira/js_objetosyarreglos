import propiedades_alquiler from "./alquiler.js"


// Obtener el contenedor donde se agregarán las propiedades
const propiedadesContainer = document.getElementById('propiedades-para-alquilar');

// Recorrer el arreglo de propiedades
propiedades_alquiler.forEach(propiedad => {
  // Crear el div <div class="col-md-4 mb-4">
  const colDiv = document.createElement('div');
  colDiv.classList.add('col-md-4', 'mb-4');

  // Crear el div <div class="card">
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  // Crear la imagen <img class="card-img-top">
  const img = document.createElement('img');
  img.src = propiedad.src;
  img.classList.add('card-img-top');
  img.alt = 'Imagen del departamento';

  // Crear <div class="card-body">
  const cardBodyDiv = document.createElement('div');
  cardBodyDiv.classList.add('card-body');

  // Usar template y innerHTML para generar el contenido
  cardBodyDiv.innerHTML = `
    <h5 class="card-title">${propiedad.title}</h5>
    <p class="card-text">${propiedad.description}</p>
    <p><i class="fas fa-map-marker-alt"></i> ${propiedad.address}</p>
    <p><i class="fas fa-bed"></i> ${propiedad.bedrooms} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.bathroom} Baños</p>
    <p><i class="fas fa-dollar-sign"></i> ${propiedad.price}</p>
    <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}"> <i class="fas ${propiedad.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'} </p> <p class="${propiedad.pets ? 'text-success' : 'text-danger'}"> <i class="fas ${propiedad.pets ? 'fa-paw' : 'fa-ban'}"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}</p>
 `;

 

  // Construir la estructura del documento
  cardDiv.appendChild(img);
  cardDiv.appendChild(cardBodyDiv);

  colDiv.appendChild(cardDiv);

  // Agregar cada propiedad al contenedor principal
  propiedadesContainer.appendChild(colDiv);
});