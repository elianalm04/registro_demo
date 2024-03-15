function generarGafete() {
  var nombreCompleto = document.getElementById("nombreCompleto").value;
  var empresa = document.getElementById("empresa").value;
  var numeroStand = document.getElementById("numeroStand").value;
  var fotoInput = document.getElementById("foto");

  if (fotoInput.files.length === 0) {
    alert("Por favor, seleccione una fotografía.");
    return;
  }

  var gafete = {
    nombreCompleto: nombreCompleto,
    empresa: empresa,
    numeroStand: numeroStand,
    foto: URL.createObjectURL(fotoInput.files[0])
  };

  mostrarGafete(gafete);
}

function mostrarGafete(gafete) {
  var gafeteContainer = document.getElementById("gafeteContainer");
  var gafeteInfo = document.getElementById("gafeteInfo");
  var gafeteFoto = document.getElementById("gafeteFoto");

  gafeteInfo.innerHTML = `
    <p><strong>Nombre Completo:</strong> ${gafete.nombreCompleto}</p>
    <p><strong>Empresa:</strong> ${gafete.empresa}</p>
    <p><strong>Número de Stand:</strong> ${gafete.numeroStand}</p>
  `;

  gafeteFoto.src = gafete.foto;

  gafeteContainer.classList.add("visible");
}

function descargarPDF() {
  var gafeteContainer = document.getElementById("gafeteContainer");

  html2pdf(gafeteContainer);
}
