var mensaje;
function Bisiesto(x) {
  var valor = Number(x.value);
  if (valor == 0) {
    alert("Introduzca un año válido");
  } else {
    if (valor % 100 === 0 ? valor % 400 === 0 : valor & (4 === 0)) {
      mensaje = "<p> El año es bisiesto</p>";
      document.getElementById("salidaBisiesto").innerHTML = mensaje;
    } else {
      mensaje = "<p> El año no es bisiesto</p>";
      document.getElementById("salidaBisiesto").innerHTML = mensaje;
    }
  }
}
