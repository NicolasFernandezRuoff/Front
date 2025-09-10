const solicitudes = [
    {
      id: 1,
      hecho: { id: 101, titulo: "Incendio en depósito" },
      motivoDeEliminacion: "Reporte duplicado",
      contribuyente: {
        nombre: "Matias",
        apellido: "Alejo",
        email: "mati.cao@mail.com"
      }
    },
    {
      id: 2,
      hecho: { id: 102, titulo: "Corte de luz en barrio norte" },
      motivoDeEliminacion: "Información incorrecta",
      contribuyente: {
        nombre: "María",
        apellido: "Gómez",
        email: "maria.gomez@mail.com"
      }
    }
  ];
  
  // Renderiza las notificaciones en el menú lateral
  function cargarNotificaciones() {
    const lista = document.getElementById("listaNotificaciones");
    lista.innerHTML = "";
  
    solicitudes.forEach(solicitud => {
      const item = crearItemNotificacion(solicitud);
      lista.appendChild(item);
    });
  }
  
  function crearItemNotificacion(solicitud) {
    const { id, hecho } = solicitud;
  
    const item = document.createElement("li");
    item.className =
      "list-group-item d-flex align-items-center justify-content-between py-3 fs-5";
  
    item.innerHTML = `
        <span><i class="bi bi-envelope me-2 text-primary"></i> <strong>#${id}</strong> - ${hecho.titulo}</span>
        <i class="bi bi-chevron-right text-muted"></i>
      `;
  
    item.addEventListener("click", () => {
      document
        .querySelectorAll("#listaNotificaciones .active")
        .forEach(el => el.classList.remove("active"));
      item.classList.add("active");
      mostrarDetalle(solicitud);
    });
  
    return item;
  }
  
  // Muestra el detalle en el área principal
  function mostrarDetalle(solicitud) {
    const { id, hecho, motivoDeEliminacion, contribuyente } = solicitud;
    const contenido = document.getElementById("contenidoPrincipal");
  
    const datosContribuyente = contribuyente
      ? `
        <div class="card mt-3 shadow-sm border-0 bg-light">
          <div class="card-body">
            <h5 class="mb-3 text-primary"><i class="bi bi-person-circle me-2"></i>Contribuyente</h5>
            <p><strong>Nombre:</strong> ${contribuyente.nombre}</p>
            <p><strong>Apellido:</strong> ${contribuyente.apellido}</p>
            <p><strong>Email:</strong> <a href="mailto:${contribuyente.email}" class="text-decoration-none">${contribuyente.email}</a></p>
          </div>
        </div>`
      : `<p><strong>Contribuyente:</strong> Anónimo</p>`;
  
    contenido.innerHTML = `
        <div class="card shadow-sm">
          <div class="card-body fs-5">
            <h3 class="card-title mb-3 text-primary">Solicitud N°${id}</h3>
            <p><strong>Hecho:</strong> ${hecho.titulo}</p>
            <p><strong>Motivo de eliminación:</strong> ${motivoDeEliminacion}</p>
  
            ${datosContribuyente}
  
            <div class="d-flex gap-3 justify-content-end mt-4">
              <button class="btn btn-aprobar btn-lg" onclick="cambiarEstado(${id}, 'aprobado')">
                <i class="bi bi-check-circle"></i> Aprobar
              </button>
              <button class="btn btn-eliminar btn-lg" onclick="cambiarEstado(${id}, 'eliminado')">
                <i class="bi bi-x-circle"></i> Eliminar
              </button>
            </div>
          </div>
        </div>
      `;
  }
  
  
  // Inicializa
  document.addEventListener("DOMContentLoaded", cargarNotificaciones);
  