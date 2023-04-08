function recogeDatos(evento) {
  evento.preventDefault();

  var nombre = document.querySelector("#nombre").value;
  var fecha = document.querySelector("#fecha").value;
  var edad = 2023 - fecha;

  var bienvenida = document.querySelector("#bienvenida");
  var mensajeEdad;

  var mensaje;

  if (edad > 50) {
    mensajeEdad = "carcamal!";
  } else if (edad < 50) {
    mensajeEdad = "chavalín!";
  } else {
    mensajeEdad = "te estás haciendo mayor.";
  }

  mensaje =
    "<p>Hola, " +    nombre +    ", tienes " +    edad +    " años, " +    mensajeEdad +    "</p>";

  bienvenida.innerHTML = mensaje;
}

var miForm = document.querySelector("#formulario");

miForm.addEventListener("submit", recogeDatos);
