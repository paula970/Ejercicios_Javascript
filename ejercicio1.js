var diccionario = "abcdefghijklmnñopqrstuvwxyz";
var text = document.getElementById("cadena");
var boton = document.getElementById("click");
var bolean = true;
pangrama = function () {
  let array = Array.from(diccionario);
  let texto = text.value;
  for (let i = 0; i < array.length; i++) {
    if (!texto.includes(array[i])) {
      document.getElementById("salidaPangrama").innerHTML = "no es un pangrama";
      console.log("no es un pangrama");
      bolean = false;
    }
  }
  if (bolean) {
    document.getElementById("salidaPangrama").innerHTML = "es un pangrama";
    console.log("es un pangrama");
  }
};
boton.addEventListener("click", pangrama);
