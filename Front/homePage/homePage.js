const data = [
    {
      categoria: "Historia",
      titulo: "La Biblioteca de Alejandría",
      descripcion: "Antigua biblioteca de Alejandría, Egipto, uno de los centros de conocimiento más grandes del mundo antiguo.",
      lugar: "Alejandría, Egipto",
      img: "https://picsum.photos/400/200",
      mapa: "https://picsum.photos/400/100"
    },
    {
      categoria: "Ciencia",
      titulo: "El CERN y el Bosón de Higgs",
      descripcion: "El laboratorio europeo de física de partículas, donde se descubrió el bosón de Higgs.",
      lugar: "Ginebra, Suiza",
      img: "https://picsum.photos/401/200",
      mapa: "https://picsum.photos/401/100"
    },
    {
      categoria: "Historia",
      titulo: "Las Pirámides de Egipto",
      descripcion: "Construcciones monumentales y una de las siete maravillas del mundo antiguo.",
      lugar: "Giza, Egipto",
      img: "https://picsum.photos/402/200",
      mapa: "https://picsum.photos/402/100"
    },
    {
      categoria: "Ciencia",
      titulo: "Viaje a la Luna",
      descripcion: "La misión Apolo 11 llevó al primer hombre a la Luna en 1969.",
      lugar: "NASA, EE.UU.",
      img: "https://picsum.photos/403/200",
      mapa: "https://picsum.photos/403/100"
    },
    {
      categoria: "Historia",
      titulo: "Roma Antigua",
      descripcion: "El Imperio Romano dejó una gran herencia cultural, política y arquitectónica.",
      lugar: "Roma, Italia",
      img: "https://picsum.photos/404/200",
      mapa: "https://picsum.photos/404/100"
    },
    {
      categoria: "Ciencia",
      titulo: "Telescopio Hubble",
      descripcion: "Observatorio espacial que revolucionó la astronomía moderna.",
      lugar: "Órbita terrestre",
      img: "https://picsum.photos/405/200",
      mapa: "https://picsum.photos/405/100"
    }
  ];
  
  const itemsPorPagina = 4; // Se puede variar ya que es lo basico
  let paginaActual = 1;
  
  const container = document.getElementById("cards-container");
  const containerPaginas = document.querySelector('#cantidad-paginas');
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  
  function renderCards() {
    container.innerHTML = "";
    const start = (paginaActual - 1) * itemsPorPagina;
    const end = start + itemsPorPagina;
    const items = data.slice(start, end);
  
    items.forEach(item => {
      const card = `
        <div class="col-md-6">
          <div class="fact-card">
            <img src="${item.img}" class="card-img-top" alt="Imagen Hecho">
            <div class="card-body">
              <span class="categoria-item card-categoria-center">${item.categoria}</span>
              <h5 class="card-title">${item.titulo}</h5>
              <p class="card-text">${item.descripcion}</p>
              <div class="map-preview">
                <div class="container-md mapa-personalizado">
                <div id="map-container" style="height:100px;" class="rounded shadow-sm"></div>
              </div>

              </div>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += card;
    });
  }
  
  function renderPaginacion() {
    const totalPaginas = Math.ceil(data.length / itemsPorPagina);
    containerPaginas.innerHTML = "";
  
    for (let i = 1; i <= totalPaginas; i++) {
      const boton = document.createElement("button");
      boton.className = `btn btn-pagina ${i === paginaActual ? 'active' : ''}`;
      boton.innerText = i;
      boton.addEventListener("click", () => {
        paginaActual = i;
        renderCards();
        renderPaginacion();
      });
      containerPaginas.appendChild(boton);
    }
  
    prevBtn.parentElement.classList.toggle("disabled", paginaActual === 1);
    nextBtn.parentElement.classList.toggle("disabled", paginaActual === totalPaginas);
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

  const categorias = ["Historia", "Ciencia", "Cultura", "Naturaleza", "Tecnología", "Arte"];
  const categoriaContainer = document.getElementById("TodasLasCategorias");
  
  categorias.forEach(categoria => {
    const catego = `<span class="categoria-item separado-paginas">${categoria}</span>`;
    categoriaContainer.innerHTML += catego;
  });


