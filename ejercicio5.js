var mensaje;
let duplicados = [];

function numDuplicado(x) {
  var numeros = x.value;
  const arrayNumeros = [...numeros].sort();

  for (let i = 0; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i + 1] === arrayNumeros[i]) {
      duplicados.push(arrayNumeros[i]);
    }
  }
  mensaje = "<p> Los elementos no únicos son: " + duplicados + "</p>";
  document.getElementById("salidaNumDuplicado").innerHTML = mensaje;
}
