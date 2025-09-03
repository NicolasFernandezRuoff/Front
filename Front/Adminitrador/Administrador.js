document.getElementById("btnAddFuente").addEventListener("click", function(e){
    e.preventDefault();
    const form = document.getElementById("formFuente");
    form.style.display = form.style.display === "none" ? "block" : "none";
  });

  document.getElementById("fileUpload").addEventListener("change", function(e){
    if(e.target.files.length > 0){
      alert("Archivo seleccionado: " + e.target.files[0].name);
    }
  });