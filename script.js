document.getElementById("validar").addEventListener("click", function() {
  const correcto = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi página web</title>
  <link rel="stylesheet" href="style.css">
</head>`;
  
  const tarjetas = document.querySelectorAll(".tarjeta");
  let resultadoHTML = "";
  
  tarjetas.forEach((tarjeta, index) => {
    const contenido = tarjeta.value.trim();
    if (contenido === correcto) {
      resultadoHTML += `<p>Tarjeta ${index + 1}: ✅ Correcta</p>`;
      tarjeta.style.borderColor = "green";
    } else {
      resultadoHTML += `<p>Tarjeta ${index + 1}: ❌ Incorrecta</p>`;
      tarjeta.style.borderColor = "red";
    }
  });

  document.getElementById("resultado").innerHTML = resultadoHTML;
});
