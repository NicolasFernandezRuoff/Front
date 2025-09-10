// document.addEventListener("DOMContentLoaded", () => {
//     // ================== MAPA ==================
//     const map = L.map('map-container').setView([-38.4161, -63.6167], 5);
  
//     // Capa base (Carto Light)
//     L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
//       attribution: '&copy; OpenStreetMap &copy; CARTO',
//       subdomains: 'abcd',
//       maxZoom: 19
//     }).addTo(map);
  
//     // ====== Render de markers desde el mock o lugar random ======
//     let hayHechos = false;
  
//     // if (typeof hechosMock !== "undefined" && Array.isArray(hechosMock)) {
//     //   hechosMock.forEach(hecho => {
//     //     if (hecho.ubicacion?.lat && hecho.ubicacion?.lon) {
//     //       hayHechos = true;
//     //       L.marker([hecho.ubicacion.lat, hecho.ubicacion.lon])
//     //         .addTo(map)
//     //         .bindPopup(`
//     //           <strong>${hecho.titulo}</strong><br/>
//     //           ${hecho.ubicacion.lugar}
//     //         `);
//     //     }
//     //   });
//     // }
  
//     // Si no hay hechos -> punto random en Argentina
//     if (!hayHechos) {
//       const lat = -55 + Math.random() * ( -21 - (-55) );  // entre -55 y -21
//       const lon = -73 + Math.random() * ( -53 - (-73) );  // entre -73 y -53
  
//       L.marker([lat, lon])
//         .addTo(map)
//         .bindPopup("<strong>Lugar Random</strong><br/>Argentina");
  
//       map.setView([lat, lon], 6);
//     }
//   });

document.addEventListener("DOMContentLoaded", () => {
    const map = L.map('map-container').setView([-38.4161, -63.6167], 5);

    // Capa base
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    let hayHechos = false;

    // Si no hay hechos -> marcador random en Argentina
    if (!hayHechos) {
        const lat = -55 + Math.random() * (-21 - (-55));
        const lon = -73 + Math.random() * (-53 - (-73));

        L.marker([lat, lon])
            .addTo(map)
            .bindPopup("<strong>Lugar Random</strong><br/>Argentina");

        map.setView([lat, lon], 6);
    }
});
  