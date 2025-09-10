const data = [
  {
    categoria: "Historia",
    titulo: "La Biblioteca de Alejandría",
    descripcion: "Antigua biblioteca de Alejandría, Egipto, uno de los centros de conocimiento más grandes del mundo antiguo.",
    lugar: "Alejandría, Egipto",
    lat: 31.2001,
    lon: 29.9187,
    img: "https://picsum.photos/400/200"
  },
  {
    categoria: "Ciencia",
    titulo: "El CERN y el Bosón de Higgs",
    descripcion: "El laboratorio europeo de física de partículas, donde se descubrió el bosón de Higgs.",
    lugar: "Ginebra, Suiza",
    lat: 46.2333,
    lon: 6.0550,
    img: "https://picsum.photos/401/200"
  },
  {
    categoria: "Historia",
    titulo: "Las Pirámides de Egipto",
    descripcion: "Construcciones monumentales y una de las siete maravillas del mundo antiguo.",
    lugar: "Giza, Egipto",
    lat: 29.9792,
    lon: 31.1342,
    img: "https://picsum.photos/402/200"
  },
  {
    categoria: "Ciencia",
    titulo: "Viaje a la Luna",
    descripcion: "La misión Apolo 11 llevó al primer hombre a la Luna en 1969.",
    lugar: "NASA, EE.UU.",
    lat: 28.5729,
    lon: -80.6490,
    img: "https://picsum.photos/403/200"
  },
  {
    categoria: "Historia",
    titulo: "Roma Antigua",
    descripcion: "El Imperio Romano dejó una gran herencia cultural, política y arquitectónica.",
    lugar: "Roma, Italia",
    lat: 41.8902,
    lon: 12.4922,
    img: "https://picsum.photos/404/200"
  },
  {
    categoria: "Ciencia",
    titulo: "Telescopio Hubble",
    descripcion: "Observatorio espacial que revolucionó la astronomía moderna.",
    lugar: "Órbita terrestre",
    lat: 0,
    lon: 0,
    img: "https://picsum.photos/405/200"
  }
];

const itemsPorPagina = 4;
let paginaActual = 1;

const container = document.getElementById("cards-container");
const containerPaginas = document.querySelector('#cantidad-paginas');
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function renderMiniMapa(mapId, lat, lon, lugar) {
  const map = L.map(mapId, { zoomControl: false }).setView([lat, lon], 5);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  L.marker([lat, lon]).addTo(map)
    .bindPopup(`<strong>${lugar}</strong>`);

  map.setView([lat, lon], 6);
  map.scrollWheelZoom.disable();
}

function renderCards() {
  container.innerHTML = "";
  const start = (paginaActual - 1) * itemsPorPagina;
  const end = start + itemsPorPagina;
  const items = data.slice(start, end);

  items.forEach((item, index) => {
    const mapId = `map-${start + index}-${Math.random().toString(36).substr(2, 9)}`;

    const card = `
      <div class="col-md-6 mb-4">
        <div class="fact-card border rounded shadow-sm p-2 h-100">
          <img src="${item.img}" class="card-img-top" alt="Imagen de ${item.titulo}">
          <div class="card-body">
            <span class="categoria-item card-categoria-center">${item.categoria}</span>
            <h5 class="card-title mt-2">${item.titulo}</h5>
            <p class="card-text">${item.descripcion}</p>
            <div class="map-preview mt-3">
              <div class="container-md mapa-personalizado">
                <div id="${mapId}" style="height:120px;" class="rounded shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    container.innerHTML += card;

    if (item.lat !== 0 || item.lon !== 0) {
      requestAnimationFrame(() => {
        renderMiniMapa(mapId, item.lat, item.lon, item.lugar);
      });
    }
  });
}

function renderPaginacion() {
  const totalPaginas = Math.ceil(data.length / itemsPorPagina);
  containerPaginas.innerHTML = "";

  for (let i = 1; i <= totalPaginas; i++) {
    const boton = document.createElement("button");
    boton.className = `btn btn-pagina ${i === paginaActual ? 'btn-primary' : 'btn-outline-primary'}`;
    boton.innerText = i;
    boton.addEventListener("click", () => {
      paginaActual = i;
      renderCards();
      renderPaginacion();
    });
    containerPaginas.appendChild(boton);
  }

  prevBtn.disabled = paginaActual === 1;
  nextBtn.disabled = paginaActual === totalPaginas;
}

prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (paginaActual > 1) {
    paginaActual--;
    renderCards();
    renderPaginacion();
  }
});

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const totalPaginas = Math.ceil(data.length / itemsPorPagina);
  if (paginaActual < totalPaginas) {
    paginaActual++;
    renderCards();
    renderPaginacion();
  }
});

// Inicializar
renderCards();
renderPaginacion();

// Categorías
const categorias = ["Historia", "Ciencia", "Cultura", "Naturaleza", "Tecnología", "Arte"];
const categoriaContainer = document.getElementById("TodasLasCategorias");

categorias.forEach(categoria => {
  const catego = document.createElement("span");
  catego.className = "categoria-item separado-paginas btn btn-outline-secondary";
  catego.textContent = categoria;
  categoriaContainer.appendChild(catego);
});
