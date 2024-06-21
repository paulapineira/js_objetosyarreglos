import propiedades_venta from "./venta.js";
import propiedades_alquiler from "./alquiler.js";


function mostrarPropiedadesVenta() {
    const propiedadesContainer = document.getElementById('propiedades-para-vender');

    // Recorrer solo las primeras 3 propiedades en venta
    for (let i = 0; i < 3; i++) {
        const propiedad = propiedades_venta[i];

        // Crear el elemento de columna
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-4', 'mb-4');

        // Crear la tarjeta (card)
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        // Crear la imagen de la tarjeta
        const img = document.createElement('img');
        img.src = propiedad.src;
        img.classList.add('card-img-top');
        img.alt = 'Imagen de la propiedad';

        // Crear el cuerpo de la tarjeta
        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.classList.add('card-body');

        // Insertar el contenido
        cardBodyDiv.innerHTML = `
            <h5 class="card-title">${propiedad.title}</h5>
            <p class="card-text">${propiedad.description}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.address}</p>
            <p><i class="fas fa-bed"></i> ${propiedad.bedrooms} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.bathroom} Baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad.price}</p>
            <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}"> <i class="fas ${propiedad.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'} </p>
            <p class="${propiedad.pets ? 'text-success' : 'text-danger'}"> <i class="fas ${propiedad.pets ? 'fa-paw' : 'fa-ban'}"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}</p>
        `;

        // Construir la estructura de la tarjeta
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBodyDiv);

        // Agregar la tarjeta al contenedor de propiedades en venta
        colDiv.appendChild(cardDiv);
        propiedadesContainer.appendChild(colDiv);
    }
}

// Función para mostrar propiedades de alquiler
function mostrarPropiedadesAlquiler() {
    const propiedadesContainer = document.getElementById('propiedades-para-alquilar');

    // Recorrer solo las primeras 3 propiedades en alquiler
    for (let i = 0; i < 3; i++) {
        const propiedad = propiedades_alquiler[i];

        // Crear el elemento de columna 
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-4', 'mb-4');

        // Crear la tarjeta (card) 
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        // Crear la imagen de la tarjeta
        const img = document.createElement('img');
        img.src = propiedad.src;
        img.classList.add('card-img-top');
        img.alt = 'Imagen de la propiedad';

        // Crear el cuerpo de la tarjeta
        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.classList.add('card-body');

        // Insertar el contenido
        cardBodyDiv.innerHTML = `
            <h5 class="card-title">${propiedad.title}</h5>
            <p class="card-text">${propiedad.description}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.address}</p>
            <p><i class="fas fa-bed"></i> ${propiedad.bedrooms} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.bathroom} Baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad.price}</p>
            <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}"> <i class="fas ${propiedad.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'} </p>
            <p class="${propiedad.pets ? 'text-success' : 'text-danger'}"> <i class="fas ${propiedad.pets ? 'fa-paw' : 'fa-ban'}"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}</p>
        `;

        // Construir la estructura de la tarjeta
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBodyDiv);

        // Agregar la tarjeta al contenedor de propiedades en alquiler
        colDiv.appendChild(cardDiv);
        propiedadesContainer.appendChild(colDiv);
    }
}

// Llamar a las funciones para mostrar las primeras 3 propiedades
mostrarPropiedadesVenta();
mostrarPropiedadesAlquiler();


