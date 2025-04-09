const txtNombre = document.getElementById("txtNombre");
const btnGuardar = document.getElementById("btnGuardar");


btnGuardar.addEventListener("click", function (event) {
  event.preventDefault();
  const nombre = txtNombre.value.trim();


  if (nombre !== "") {
    localStorage.setItem("nombre", nombre);
    window.location.href = "welcome.html"; // Redirige a welcome
  } else {
    alert("Por favor ingresa tu nombre.");
  }
});
