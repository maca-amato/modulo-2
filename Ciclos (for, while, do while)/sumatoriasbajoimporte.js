function sumatoriaBajoImporte (importes) {
  let resultadoMesesConGanancia = 0;
  for (let i = 0; i < importes.length; i ++) {
    let mes = importes [i];
      if (mes > 0 && mes <= 1000) {
        resultadoMesesConGanancia = resultadoMesesConGanancia + mes;
      }
  }
return resultadoMesesConGanancia
}

console.log (sumatoriaBajoImporte ([300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000])) // tiene que dar 3300
//console.log (sumatoriaBajoImporte ([-100, -20, 200, 500, 1001]))