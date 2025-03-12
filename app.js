//solucion 1//
function transformarPalabra(palabra){
  let resultado = "";
  for (let i = 0; i < palabra.length; i++) {
    resultado += palabra[i] .toUpperCase() + " ";
  } return resultado.trim();
}
console.log(transformarPalabra("jorge"));





//solucion 2//
function contarpalabras(nombre) {
  const palabras = nombre.trim().split(/\s+/);
  return palabras.length;
};
console.log(contarpalabras("el mundo es un lugar maravilloso"));
console.log (contarpalabras("españa es un pais multicultural"))

//strim  elimina los espacios en blanco al principio y al final de una cadena
//split divide una cadena en un array de subcadenas y devuelve el nuevo array
//\s+  coincide con cualquier carácter de espacio en blanco, incluidos los espacios, tabulaciones y saltos de línea//