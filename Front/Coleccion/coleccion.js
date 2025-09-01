const hechosMock  = [
  {
    "titulo": "La Biblioteca de Alejandría",
    "descripcion": "Antigua biblioteca de Alejandría, Egipto, uno de los centros de conocimiento más grandes del mundo antiguo.",
    "categoria": { "descripcion": "Historia" },
    "ubicacion": { "latitud": "31.2001", "longitud": "29.9187" },
    "fechaAcontecimiento": "0300-01-01T00:00:00",
    "etiquetas": [
      { "nombreDeEtiqueta": "conocimiento" },
      { "nombreDeEtiqueta": "antigüedad" }
    ],
    "fechaAlta": "2025-01-01T10:00:00",
    "origen": "ESTATICA",
    "idContribuyente": 1,
    "eliminado": false,
    "multimedia": ["https://picsum.photos/400/200"],
    "idFuente": 100,
    "id": 1,
    "updateAt": "2025-01-05T12:00:00"
  },
  {
    "titulo": "El CERN y el Bosón de Higgs",
    "descripcion": "El laboratorio europeo de física de partículas, donde se descubrió el bosón de Higgs.",
    "categoria": { "descripcion": "Ciencia" },
    "ubicacion": { "latitud": "46.233", "longitud": "6.055" },
    "fechaAcontecimiento": "2012-07-04T00:00:00",
    "etiquetas": [
      { "nombreDeEtiqueta": "ciencia" },
      { "nombreDeEtiqueta": "física" },
      { "nombreDeEtiqueta": "partículas" }
    ],
    "fechaAlta": "2025-01-02T10:00:00",
    "origen": "DINAMICA",
    "idContribuyente": 2,
    "eliminado": false,
    "multimedia": ["https://picsum.photos/401/200"],
    "idFuente": 101,
    "id": 2,
    "updateAt": "2025-01-05T12:30:00"
  },
  {
    "titulo": "Las Pirámides de Egipto",
    "descripcion": "Construcciones monumentales y una de las siete maravillas del mundo antiguo.",
    "categoria": { "descripcion": "Historia" },
    "ubicacion": { "latitud": "29.9792", "longitud": "31.1342" },
    "fechaAcontecimiento": "2500-01-01T00:00:00",
    "etiquetas": [
      { "nombreDeEtiqueta": "arquitectura" },
      { "nombreDeEtiqueta": "antigüedad" }
    ],
    "fechaAlta": "2025-01-03T10:00:00",
    "origen": "ESTATICA",
    "idContribuyente": 3,
    "eliminado": false,
    "multimedia": ["https://picsum.photos/402/200"],
    "idFuente": 102,
    "id": 3,
    "updateAt": "2025-01-06T09:00:00"
  },
  {
    "titulo": "Viaje a la Luna",
    "descripcion": "La misión Apolo 11 llevó al primer hombre a la Luna en 1969.",
    "categoria": { "descripcion": "Ciencia" },
    "ubicacion": { "latitud": "0.6741", "longitud": "23.4729" },
    "fechaAcontecimiento": "1969-07-20T20:17:00",
    "etiquetas": [
      { "nombreDeEtiqueta": "espacio" },
      { "nombreDeEtiqueta": "astronomía" }
    ],
    "fechaAlta": "2025-01-04T11:00:00",
    "origen": "DINAMICA",
    "idContribuyente": 4,
    "eliminado": false,
    "multimedia": ["https://picsum.photos/403/200"],
    "idFuente": 103,
    "id": 4,
    "updateAt": "2025-01-06T10:30:00"
  },
  {
    "titulo": "Roma Antigua",
    "descripcion": "El Imperio Romano dejó una gran herencia cultural, política y arquitectónica.",
    "categoria": { "descripcion": "Historia" },
    "ubicacion": { "latitud": "41.9028", "longitud": "12.4964" },
    "fechaAcontecimiento": "0001-01-01T00:00:00",
    "etiquetas": [
      { "nombreDeEtiqueta": "imperio" },
      { "nombreDeEtiqueta": "cultura" }
    ],
    "fechaAlta": "2025-01-05T10:00:00",
    "origen": "ESTATICA",
    "idContribuyente": 5,
    "eliminado": false,
    "multimedia": ["https://picsum.photos/404/200"],
    "idFuente": 104,
    "id": 5,
    "updateAt": "2025-01-07T08:45:00"
  },
  {
    "titulo": "Telescopio Hubble",
    "descripcion": "Observatorio espacial que revolucionó la astronomía moderna.",
    "categoria": { "descripcion": "Ciencia" },
    "ubicacion": { "latitud": "28.5383", "longitud": "-81.3792" },
    "fechaAcontecimiento": "1990-04-24T00:00:00",
    "etiquetas": [
      { "nombreDeEtiqueta": "astronomía" },
      { "nombreDeEtiqueta": "tecnología" }
    ],
    "fechaAlta": "2025-01-06T12:00:00",
    "origen": "DINAMICA",
    "idContribuyente": 6,
    "eliminado": false,
    "multimedia": ["https://picsum.photos/405/200"],
    "idFuente": 105,
    "id": 6,
    "updateAt": "2025-01-07T10:15:00"
  },
  {
    "titulo": "Descubrimiento de América",
    "descripcion": "Cristóbal Colón llegó a América en 1492.",
    "categoria": { "descripcion": "Historia" },
    "ubicacion": { "latitud": "25.0343", "longitud": "-77.3963" },
    "fechaAcontecimiento": "1492-10-12T00:00:00",
    "etiquetas": [
      { "nombreDeEtiqueta": "descubrimiento" },
      { "nombreDeEtiqueta": "colonización" }
    ],
    "fechaAlta": "2025-01-07T11:00:00",
    "origen": "ESTATICA",
    "idContribuyente": 7,
    "eliminado": false,
    "multimedia": ["https://picsum.photos/406/200"],
    "idFuente": 106,
    "id": 7,
    "updateAt": "2025-01-08T09:00:00"
  },
  {
    "titulo": "La Biblioteca de Alejandría",
    "descripcion": "Antigua biblioteca de Alejandría, Egipto, uno de los centros de conocimiento más grandes del mundo antiguo.",
    "categoria": { "descripcion": "Historia" },
    "ubicacion": { "latitud": "31.2001", "longitud": "29.9187" },
    "fechaAcontecimiento": "0300-01-01T00:00:00",
    "etiquetas": [
      { "nombreDeEtiqueta": "conocimiento" },
      { "nombreDeEtiqueta": "antigüedad" }
    ],
    "fechaAlta": "2025-01-01T10:00:00",
    "origen": "ESTATICA",
    "idContribuyente": 1,
    "eliminado": false,
    "multimedia": ["https://picsum.photos/400/200"],
    "idFuente": 100,
    "id": 1,
    "updateAt": "2025-01-05T12:00:00"
  },
  {
    "titulo": "El CERN y el Bosón de Higgs",
    "descripcion": "El laboratorio europeo de física de partículas, donde se descubrió el bosón de Higgs.",
    "categoria": { "descripcion": "Ciencia" },
    "ubicacion": { "latitud": "46.233", "longitud": "6.055" },
    "fechaAcontecimiento": "2012-07-04T00:00:00",
    "etiquetas": [
      { "nombreDeEtiqueta": "ciencia" },
      { "nombreDeEtiqueta": "física" },
      { "nombreDeEtiqueta": "partículas" }
    ],
    "fechaAlta": "2025-01-02T10:00:00",
    "origen": "DINAMICA",
    "idContribuyente": 2,
    "eliminado": false,
    "multimedia": ["https://picsum.photos/401/200"],
    "idFuente": 101,
    "id": 2,
    "updateAt": "2025-01-05T12:30:00"
  },
  {
    "titulo": "Las Pirámides de Egipto",
    "descripcion": "Construcciones monumentales y una de las siete maravillas del mundo antiguo.",
    "categoria": { "descripcion": "Historia" },
    "ubicacion": { "latitud": "29.9792", "longitud": "31.1342" },
    "fechaAcontecimiento": "2500-01-01T00:00:00",
    "etiquetas": [
      { "nombreDeEtiqueta": "arquitectura" },
      { "nombreDeEtiqueta": "antigüedad" }
    ],
    "fechaAlta": "2025-01-03T10:00:00",
    "origen": "ESTATICA",
    "idContribuyente": 3,
    "eliminado": false,
    "multimedia": ["https://picsum.photos/402/200"],
    "idFuente": 102,
    "id": 3,
    "updateAt": "2025-01-06T09:00:00"
  },
  {
    "titulo": "Viaje a la Luna",
    "descripcion": "La misión Apolo 11 llevó al primer hombre a la Luna en 1969.",
    "categoria": { "descripcion": "Ciencia" },
    "ubicacion": { "latitud": "0.6741", "longitud": "23.4729" },
    "fechaAcontecimiento": "1969-07-20T20:17:00",
    "etiquetas": [
      { "nombreDeEtiqueta": "espacio" },
      { "nombreDeEtiqueta": "astronomía" }
    ],
    "fechaAlta": "2025-01-04T11:00:00",
    "origen": "DINAMICA",
    "idContribuyente": 4,
    "eliminado": false,
    "multimedia": ["https://picsum.photos/403/200"],
    "idFuente": 103,
    "id": 4,
    "updateAt": "2025-01-06T10:30:00"
  },
  {
    "titulo": "Roma Antigua",
    "descripcion": "El Imperio Romano dejó una gran herencia cultural, política y arquitectónica.",
    "categoria": { "descripcion": "Historia" },
    "ubicacion": { "latitud": "41.9028", "longitud": "12.4964" },
    "fechaAcontecimiento": "0001-01-01T00:00:00",
    "etiquetas": [
      { "nombreDeEtiqueta": "imperio" },
      { "nombreDeEtiqueta": "cultura" }
    ],
    "fechaAlta": "2025-01-05T10:00:00",
    "origen": "ESTATICA",
    "idContribuyente": 5,
    "eliminado": false,
    "multimedia": ["https://picsum.photos/404/200"],
    "idFuente": 104,
    "id": 5,
    "updateAt": "2025-01-07T08:45:00"
  },
  {
    "titulo": "Telescopio Hubble",
    "descripcion": "Observatorio espacial que revolucionó la astronomía moderna.",
    "categoria": { "descripcion": "Ciencia" },
    "ubicacion": { "latitud": "28.5383", "longitud": "-81.3792" },
    "fechaAcontecimiento": "1990-04-24T00:00:00",
    "etiquetas": [
      { "nombreDeEtiqueta": "astronomía" },
      { "nombreDeEtiqueta": "tecnología" }
    ],
    "fechaAlta": "2025-01-06T12:00:00",
    "origen": "DINAMICA",
    "idContribuyente": 6,
    "eliminado": false,
    "multimedia": ["https://picsum.photos/405/200"],
    "idFuente": 105,
    "id": 6,
    "updateAt": "2025-01-07T10:15:00"
  },
  {
    "titulo": "Descubrimiento de América",
    "descripcion": "Cristóbal Colón llegó a América en 1492.",
    "categoria": { "descripcion": "Historia" },
    "ubicacion": { "latitud": "25.0343", "longitud": "-77.3963" },
    "fechaAcontecimiento": "1492-10-12T00:00:00",
    "etiquetas": [
      { "nombreDeEtiqueta": "descubrimiento" },
      { "nombreDeEtiqueta": "colonización" }
    ],
    "fechaAlta": "2025-01-07T11:00:00",
    "origen": "ESTATICA",
    "idContribuyente": 7,
    "eliminado": false,
    "multimedia": ["https://picsum.photos/406/200"],
    "idFuente": 106,
    "id": 7,
    "updateAt": "2025-01-08T09:00:00"
  }
];


const hechosCarrusel = document.getElementById("hechos-container");
const hechosPorSlide = 4; // cantidad de hechos que querés mostrar por slide

for (let i = 0; i < hechosMock.length; i += hechosPorSlide) {
  const bloqueHechos = hechosMock.slice(i, i + hechosPorSlide);


  const hechosHTML = bloqueHechos.map(hecho => {
    const etiquetasHTML = hecho.etiquetas
    .slice(0, 4) // solo tomamos las primeras 3 etiquetas
    .map(etiqueta => `<div class="mb-2">${etiqueta.nombreDeEtiqueta}</div>`)
    .join("");
    
    return `
    <div class="col-md-3 mb-3">
      <div class="card shadow-sm border-0 rounded">
        <img src="${hecho.multimedia}" class="card-img-top rounded-top" alt="${hecho.titulo}">
        <div class="card-body">
          ${etiquetasHTML}
          <h5 class="card-title">${hecho.titulo}</h5>
          <p class="card-text text-muted">${hecho.descripcion}</p>
        </div>
      </div>
    </div>
  `;
  }).join("");

  const itemHTML = `
    <div class="carousel-item ${i === 0 ? "active" : ""}">
      <div class="row">
        ${hechosHTML}
      </div>
    </div>
  `;

  hechosCarrusel.innerHTML += itemHTML;
}


const hechosPorPagina = 4;
let paginaActual = 1;

function renderHechos() {
  const contenedor = document.getElementById("hechosPorColeccion");
  contenedor.innerHTML = "";

  const inicio = (paginaActual - 1) * hechosPorPagina;
  const fin = inicio + hechosPorPagina;
  const hechosPagina = hechosMock.slice(inicio, fin);

  hechosPagina.forEach(hecho => {
    const etiquetasHTML = hecho.etiquetas
      .slice(0, 3) // max 3 etiquetas
      .map(e => `<span class="badge bg-secondary me-1">${e.nombreDeEtiqueta}</span>`)
      .join("");

    const card = `
      <div class="col-md-3 mb-3">
        <div class="card h-100 shadow-sm border-0">
          <img src="${hecho.multimedia[0]}" class="card-img-top" alt="${hecho.titulo}">
          <div class="card-body">
            <span class="badge bg-primary mb-2">${hecho.categoria.descripcion}</span>
            <h5 class="card-title">${hecho.titulo}</h5>
            <p class="card-text text-muted">${hecho.descripcion}</p>
            <div>${etiquetasHTML}</div>
          </div>
        </div>
      </div>
    `;
    contenedor.innerHTML += card;
  });
}

function renderPaginacion() {
  const totalPaginas = Math.ceil(hechosMock.length / hechosPorPagina);
  const contenedorPaginas = document.getElementById("paginacion");
  contenedorPaginas.innerHTML = "";

  // Botón anterior
  const btnPrev = document.createElement("button");
  btnPrev.innerText = "Anterior";
  btnPrev.className = "btn btn-outline me-2";
  btnPrev.disabled = paginaActual === 1;
  btnPrev.onclick = () => {
    if (paginaActual > 1) {
      paginaActual--;
      renderHechos();
      renderPaginacion();
    }
  };
  contenedorPaginas.appendChild(btnPrev);

  // Botones de números
  for (let i = 1; i <= totalPaginas; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;
    btn.className = `btn ${i === paginaActual ? "btn" : "btn-outline"} me-1`;
    btn.onclick = () => {
      paginaActual = i;
      renderHechos();
      renderPaginacion();
    };
    contenedorPaginas.appendChild(btn);
  }

  // Botón siguiente
  const btnNext = document.createElement("button");
  btnNext.innerText = "Siguiente";
  btnNext.className = "btn ms-2";
  btnNext.disabled = paginaActual === totalPaginas;
  btnNext.onclick = () => {
    if (paginaActual < totalPaginas) {
      paginaActual++;
      renderHechos();
      renderPaginacion();
    }
  };
  contenedorPaginas.appendChild(btnNext);
}

// Inicializar
renderHechos();
renderPaginacion();



// ================== MAPA ==================
const map = L.map('map-container').setView([-38.4161, -63.6167], 6);

// Capa base
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap &copy; CARTO',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

// Render de markers desde el mismo mock
hechosMock.forEach(hecho => {
  if (hecho.ubicacion?.lat && hecho.ubicacion?.lon) {
    L.marker([hecho.ubicacion.lat, hecho.ubicacion.lon])
      .addTo(map)
      .bindPopup(`
        <strong>${hecho.titulo}</strong><br/>
        ${hecho.ubicacion.lugar}
      `);
  }
});