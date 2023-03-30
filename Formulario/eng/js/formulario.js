function recogeDatos(evento) {
  evento.preventDefault();

  var nombre = document.querySelector("#nombre").value;
  var fecha = document.querySelector("#fecha").value;
  var edad = 2023 - fecha;

  var bienvenida = document.querySelector("#bienvenida");
  var mensajeEdad;

  var mensaje;

  if (edad > 50) {
    mensajeEdad = "old man!";
  } else if (edad < 50) {
    mensajeEdad = "lad!";
  } else {
    mensajeEdad = "you're getting older.";
  }

  mensaje =
    "<p>Hello, " +    nombre +    ", you are " +    edad +    " years, " +    mensajeEdad +    "</p>";

  bienvenida.innerHTML = mensaje;
}

var miForm = document.querySelector("#formulario");

miForm.addEventListener("submit", recogeDatos);
