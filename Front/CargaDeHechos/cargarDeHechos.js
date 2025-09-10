document.getElementById("fileUpload").addEventListener("change", function(e){
    if(e.target.files.length > 0){
      alert("Archivo seleccionado: " + e.target.files[0].name);
    }
  });

  // Crear mapa
  const map = L.map('map-container').setView([-38.4161, -63.6167], 6);

  // Capa base
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  let markerSeleccionado;

  // Evento click en el mapa
  map.on('click', function (e) {
    const { lat, lng } = e.latlng;

    // Actualizar inputs
    document.getElementById('latitud').value = lat.toFixed(6);
    document.getElementById('longitud').value = lng.toFixed(6);

    // Si ya había un marcador, lo movemos
    if (markerSeleccionado) {
      markerSeleccionado.setLatLng([lat, lng]);
    } else {
      markerSeleccionado = L.marker([lat, lng], { draggable: true }).addTo(map);

      // Actualizar inputs al arrastrar el marker
      markerSeleccionado.on('dragend', function (event) {
        const pos = event.target.getLatLng();
        document.getElementById('latitud').value = pos.lat.toFixed(6);
        document.getElementById('longitud').value = pos.lng.toFixed(6);
      });
    }

    // API de geocodificación inversa
    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`)
      .then(res => res.json())
      .then(data => {
        if (data.display_name) {
          document.getElementById('lugar').value = data.display_name;
        }
      })
      .catch(err => console.log("Error en geocodificación:", err));
  });

  function actualizarPreview() {
    const titulo = document.getElementById("titulo").value || "Sin título";
    const descripcion = document.getElementById("descripcion").value || "Sin descripción";
    const categoria = document.getElementById("categoria").value;
    const lugar = document.getElementById("lugar").value;
    const fecha = document.getElementById("fecha").value;
  
    // Actualizar título y descripción
    document.getElementById("preview-title").innerText = titulo;
    document.getElementById("preview-description").innerText = "Descripción: " + descripcion;
  
    // Categorías como chips
    const categoriasContainer = document.getElementById("preview-categorias");
    categoriasContainer.innerHTML = "";
    if (categoria && categoria !== "Selecciona una categoría") {
      const span = document.createElement("span");
      span.className = "categoria-item";
      span.textContent = categoria;
      categoriasContainer.appendChild(span);
    }
  
    // Ubicación y fecha
    document.getElementById("preview-extra").innerText =
      (lugar ? `${lugar}` : "") + (fecha ? ` | ${fecha}` : "");
  }
  
  // --- Actualización en vivo ---
  ["titulo", "descripcion", "categoria", "lugar", "fecha"].forEach(id => {
    document.getElementById(id).addEventListener("input", actualizarPreview);
  });
  
  // --- Botón de Previsualizar ---
  document.querySelector(".btn-outline-primary").addEventListener("click", actualizarPreview);

  const previewCard = document.getElementById('preview-card');
  const toggleButton = document.getElementById('toggle-preview');

  toggleButton.addEventListener('click', () => {
      if (previewCard.style.display === 'none' || previewCard.style.display === '') {
          previewCard.style.display = 'block';
          toggleButton.textContent = 'Ocultar Previsualización';
      } else {
          previewCard.style.display = 'none';
          toggleButton.textContent = 'Previsualizar';
      }
  });
  