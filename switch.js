function tengoClases(dia) {
  switch (dia) {
    case "lunes":
    case "miércoles":
    case "viernes":
      console.log("tenés clases");
      break;
      default:
      console.log("no tenés clases");
  }
}

console.log(tengoClases());
