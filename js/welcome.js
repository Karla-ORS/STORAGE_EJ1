const nombre = localStorage.getItem("nombre");
const mensajeBienvenida = document.getElementById("tituloBienvenida");
const mensajeAlterno = document.getElementById("mensajeSecundario");
const btnEliminar = document.getElementById("btnEliminar");

if (nombre) {
  mensajeBienvenida.textContent = `Hola, ${nombre}, bienvenid@ de nuevo`;
  mensajeAlterno.textContent = "";
} else {
  mensajeBienvenida.textContent = "";
  mensajeAlterno.textContent = "Por favor ve al index e ingresa tu nombre";
}

btnEliminar.addEventListener("click", () => {
  console.log(`Nombre eliminado: ${nombre}`);
  localStorage.removeItem("nombre");
  mensajeBienvenida.textContent = "";
  mensajeAlterno.textContent = "Por favor ve al index e ingresa tu nombre";
});
