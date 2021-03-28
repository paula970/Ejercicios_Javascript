var valor;
var mensaje;
function romano(a) {
  var x = Number(a.value);
  if (x > 1000 || x <= 0) {
    alert("Introduzca un número entre 1 y 1000");
  } else {
    var romano = [
      "I",
      "IV",
      "V",
      "IX",
      "X",
      "XL",
      "L",
      "XC",
      "C",
      "CD",
      "D",
      "CM",
      "M",
    ];
    var arabigo = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    var i = 12;
    var valor = "";
    while (x > 0) {
      if (arabigo[i] <= x) {
        valor = `${valor}${romano[i]}`;
        x = x - arabigo[i];
      } else {
        i--;
      }
    }
  }
  mensaje = "<p> El número " + a.value + " en romano es: " + valor + "</p>";
  document.getElementById("salidaNumRomano").innerHTML = mensaje;
}
