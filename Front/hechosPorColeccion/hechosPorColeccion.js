const categorias = ["Historia", "Ciencia", "Cultura", "Naturaleza", "Tecnología", "Arte"];

// Datos de prueba
const hechos = [
  {
    titulo: "Obelisco de Buenos Aires",
    descripcion: "Monumento icónico inaugurado en 1936 en la Plaza de la República."
  }
];

const hechoContenedor = document.getElementById("hecho");

hechos.forEach(hecho => {
  // Generamos las etiquetas con tus clases
  const etiquetasHTML = categorias.map(c => `<span class="etiquetas-item separado-paginas">${c}</span>`).join("");

  const hechoItem = `
    <div class="mb-5 p-4 border rounded shadow-sm">
      <h2>${hecho.titulo}</h2>
      <p class="text-muted">Monumento Histórico</p>

      <div class="etiquetas mb-3">
        ${etiquetasHTML}
      </div>

      <div class="text-descripcion mb-3">
        <h3>Descripción</h5>
        <p>${hecho.descripcion}</p>
      </div>

      <div class="d-flex gap-2 mb-4 botones-hecho">
        <button class="btn btn-modidificaion"><i class="bi bi-pencil"></i> Solicitar Modificación</button>
        <button class="btn btn-eliminacion"><i class="bi bi-trash"></i> Solicitar Eliminación</button>
        <button class="btn btn-compartir"><i class="bi bi-share"></i> Compartir</button>
      </div>

      <div class="galeria mt-3">
      <h5>Galería de Imágenes</h5>
        <div class="row g-3">
            <div class="col-md-3"><img src="https://picsum.photos/400/300" class="img-fluid rounded w-100 object-fit-cover"></div>
            <div class="col-md-3"><img src="https://picsum.photos/401/300" class="img-fluid rounded w-100 object-fit-cover"></div>
            <div class="col-md-3"><img src="https://picsum.photos/402/300" class="img-fluid rounded w-100 object-fit-cover"></div>
            <div class="col-md-3"><img src="https://picsum.photos/403/300" class="img-fluid rounded w-100 object-fit-cover"></div>
        </div>
       </div>
    </div>
  `;
  hechoContenedor.innerHTML += hechoItem;
});