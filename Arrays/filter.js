let estudiantes = [
  { nombre: "Julio", promedio: 6.5, aprobado: false },
  { nombre: "John", promedio: 8.5, aprobado: true },
  { nombre: "Jane", promedio: 7, aprobado: true },
  { nombre: "June", promedio: 3, aprobado: false },
];

let aprobados = estudiantes.filter(function (persona) {
  return persona.aprobado;
});

let desaprobados = estudiantes.filter(function (persona) {
  return !persona.aprobado;
});

console.log(aprobados);
console.log(desaprobados);


// Necesitamos enviarle un diploma a los alumnos que están aprobados y un e-mail a los alumnos desaprobados 
// para acordar un recuperatorio. Por lo tanto, necesitamos dos listas: una lista que almacene todos los aprobados
// y otra los desaprobados. Deberemos guardarlos en las variables aprobados y desaprobados respectivamente.