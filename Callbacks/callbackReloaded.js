function agregarHttp(url) {
  return "http://" + url;
}

function procesar(array, callback) {
  let sitiosWeb = [];
  for (let i = 0; i < array.length; i++) {
    // Se ejecuta la función callback enviando el elemento actual como parámetro
    sitiosWeb.push(callback(array[i]));
  }
  return sitiosWeb;
}

let sitioWebCompleto = (array, callback) => procesar(array, callback);

console.log(
  sitioWebCompleto(
    ["www.yahoo.com", "www.google.com", "www.git.com"],
    agregarHttp
  )
);
